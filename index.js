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

// dynamic Port binding for Heroku
const PORT = process.env.PORT || 5000;
app.listen(PORT);
