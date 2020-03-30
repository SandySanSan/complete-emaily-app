const { Path } = require('path-parser');
const { URL } = require('url');
const _ = require('lodash');
const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const requireCredits = require('../middlewares/requireCredits');
const Mailer = require('../services/Mailer');
const surveyTemplate = require('../services/emailTemplates/surveyTemplate');

// To avoid issues when running tests, do not use 'require' directly
const Survey = mongoose.model('surveys');

module.exports = app => {
    app.get('/api/surveys', requireLogin, async (req, res) => {
        const surveys = await Survey.find({ _user: req.user.id }).select(
            // excludes recipients
            {
                recipients: false,
            }
        );
        res.send(surveys);
    });

    app.delete('/api/surveys/:surveyId', requireLogin, async (req, res) => {
        const surveyToDelete = await Survey.findByIdAndDelete(
            { _id: req.params.surveyId },
            (err, data) => {
                if (err) {
                    console.log('err');
                }
                res.send(data._id).status(204);
            }
        );
    });

    app.get('/api/surveys/:surveyId/:choice', (req, res) => {
        res.send('Thanks for voting!');
    });

    app.post('/api/surveys/webhooks', (req, res) => {
        //extract survey and choice
        const p = new Path('/api/surveys/:surveyId/:choice');
        _.chain(req.body)
            .map(({ email, url }) => {
                const match = p.test(new URL(url).pathname);
                if (match)
                    return {
                        email,
                        surveyId: match.surveyId,
                        choice: match.choice,
                    };
            })
            .compact()
            // remove duplicate
            .uniqBy('email', 'surveyId')
            .each(({ surveyId, email, choice }) => {
                /**
                 * Send instructions to MongoDb
                 */
                // find and update survey
                Survey.updateOne(
                    {
                        _id: surveyId,
                        recipients: {
                            $elemMatch: { email: email, responded: false },
                        },
                    },
                    {
                        // $inc (increment) > mongo operator
                        $inc: { [choice]: 1 }, // choice > yes || or
                        $set: { 'recipients.$.responded': true }, // update one of the properties inside the survey record that was found by the initial query
                        lastResponded: new Date(),
                    }
                ).exec(); //execute the query
            })
            .value();
        res.send({});
    });
    /**
     * Create new survey
     */
    app.post('/api/surveys', requireLogin, requireCredits, async (req, res) => {
        const { title, subject, body, recipients } = req.body;
        const survey = new Survey({
            title, // title: title,
            subject,
            body,
            recipients: recipients
                .split(',')
                .map(email => ({ email: email.trim() })),
            _user: req.user.id, // relationship field (here, property available in any mongoose model)
            dateSent: Date.now(),
        });

        /**
         * Send email to recipients
         */
        const mailer = new Mailer(survey, surveyTemplate(survey));
        try {
            await mailer.send();
            await survey.save(); // save survey to MongoDB
            req.user.credits -= 1;
            const user = await req.user.save(); // prevents from stale user
            res.send(user); // sends back updated user model (and updates credits)
        } catch (err) {
            res.status(422).send(err); // Unprocessable Entity
        }
    });
};
