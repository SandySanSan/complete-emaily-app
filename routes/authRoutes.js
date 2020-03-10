const passport = require('passport');

module.exports = app => {
    app.get(
        '/auth/google',
        passport.authenticate('google', {
            scope: ['profile', 'email'],
        })
    );

    app.get(
        '/auth/google/callback',
        passport.authenticate('google'),
        (req, res) => {
            res.redirect('/surveys'); // Function attached to res object
        }
    );

    app.get('/api/logout', (req, res) => {
        req.logout(); // Function attached to res object
        res.redirect('/');
    });

    /**
     * req > incoming request
     * res > outgoing response
     */

    app.get('/api/current_user', (req, res) => {
        res.send(req.user);
    });
};
