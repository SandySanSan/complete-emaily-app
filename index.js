const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');
const keys = require('./config/keys');
require('./models/User');
require('./services/passport');

mongoose.connect(keys.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const app = express();

// use() refers to middlewares (small functions that modify the incoming requests before they are sent off to route handlers)

// parses the request (post, patch, put) and assigns it to req.body property of the incoming request object
app.use(bodyParser.json());

app.use(
    cookieSession({
        // thirty days in ms
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [keys.cookieKey],
    })
);

app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app); // IIFE
require('./routes/billingRoutes')(app); // IIFE

// env variable automatically set by Heroku
if (process.env.NODE_ENV === 'production') {
    // Express will serve up production assets like main.js or main.css
    app.use(express.static('client/build'));

    // Express will serve up index.html if it doesn't recognize the route
    const path = require('path');
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

// dynamic Port binding for Heroku
const PORT = process.env.PORT || 5000;
app.listen(PORT);
