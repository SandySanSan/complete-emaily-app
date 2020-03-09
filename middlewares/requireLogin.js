// next is function that is called when middlewars is complete

module.exports = (req, res, next) => {
    // if passport doesn't find user referenced in the cookie

    if (!req.user) {
        // unauthorized
        return res.status(401).send({ error: 'You must log in!' });
    }

    // let the user continue on to the actual request handler
    next();
};
