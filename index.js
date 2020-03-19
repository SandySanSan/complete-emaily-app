const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');
const keys = require('./config/keys');
require('./models/User');
require('./models/Survey');
require('./services/passport');

// connect mongoose to db
mongoose.connect(keys.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const app = express();

/**
 * use() refers to middlewares
 */

app.use(bodyParser.json()); // parses the request and assigns it to req.body property of the incoming request object

app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000, // thirty days in ms
        keys: [keys.cookieKey],
    })
);

app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app); // IIFE
require('./routes/billingRoutes')(app);
require('./routes/surveyRoutes')(app);

// env variable automatically set by Heroku
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build')); // Express will serve up production assets like main.js or main.css

    const path = require('path'); // Express will serve up index.html if it doesn't recognize the route
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

const PORT = process.env.PORT || 5000; // dynamic Port binding for Heroku
app.listen(PORT);
