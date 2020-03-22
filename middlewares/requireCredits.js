/**
 * Checking amount of credits
 */
module.exports = (req, res, next) => {
    if (req.user.credits < 1)
        return res
            .status(403) // Forbidden
            .send({
                error:
                    'Not enough credits to send surveys! Please, add credits to your account.',
            });
    next();
};
