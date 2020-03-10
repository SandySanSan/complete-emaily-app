/**
 * Exports Mailer class
 */

const sendgrid = require('sendgrid');
const helper = sendgrid.mail; // provided by SendGrid library
const keys = require('../config/keys');

class Mailer extends helper.Mail {
    // content is the HTML string received by survey instance.
    constructor({ subject, recipients }, content) {
        super();
        this.sgApi = sendgrid(keys.sendGridKey); // returns an object to communicate with SendGrid API
        this.from_email = new helper.Email('no-reply@emaily.com');
        this.subject = subject;
        this.body = new helper.Content('text/html', content);
        /**
         * recipients > Array of objects
         */
        this.recipients = this.formatAddresses(recipients);

        this.addContent(this.body); // built-in function from Mail class
        this.addClickTracking();
        this.addRecipients();
    }
    formatAddresses(recipients) {
        // destructuring recipients with ({email})
        return recipients.map(({ email }) => {
            return new helper.Email(email);
        });
    }

    addClickTracking() {
        // code from SendGrid doc
        const trackingSettings = new helper.TrackingSettings();
        const clickTracking = new helper.ClickTracking(true, true);

        trackingSettings.setClickTracking(clickTracking);
        this.addTrackingSettings(trackingSettings);
    }

    addRecipients() {
        const personalize = new helper.Personalization();
        this.recipients.forEach(recipient => {
            personalize.addTo(recipient);
        });
        this.addPersonalization(personalize);
    }
    /**
     * Send to SendGrid
     */
    async send() {
        const request = this.sgApi.emptyRequest({
            method: 'POST',
            path: '/v3/mail/send',
            body: this.toJSON(), // function defined by the Mail based class
        });
        const response = await this.sgApi.API(request);
        return response;
    }
}

module.exports = Mailer;
