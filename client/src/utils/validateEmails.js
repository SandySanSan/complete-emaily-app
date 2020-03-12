/**
 * Visit http://emailregex.com/ for General Email Regex (RFC 5322 Official Standard)
 */

const re = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

export default emails => {
    const invalidEmails = emails
        .split(',')
        .map(email => email.trim())
        .filter(email => email.trim() && !re.test(email)); // captures email that fails the test

    if (invalidEmails.length) {
        return `These emails are invalid : ${invalidEmails}`;
    }
    return;
};
