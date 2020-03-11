const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const requireCredits = require('../middlewares/requireCredits');
const Mailer = require('../services/Mailer');
const surveyTemplate = require('../services/emailTemplates/surveyTemplate');

// To avoid issues when running tests, do not use 'require' directly
const Survey = mongoose.model('surveys');

module.exports = app => {
    app.get('/api/surveys/thanks', (req, res) => {
        res.send('Thanks for voting!');
    });

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
         * Send email
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
