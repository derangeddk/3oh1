var kvfs = require("kvfs")(".data");

module.exports = function RedirectionMiddleware() {
    return redirectionMiddleware;
};

function redirectionMiddleware(req, res, next) {
    kvfs.get(req.hostname, (error, redirection) => {
        if(error) {
            return next();
        }
        res.redirect(301, redirection.destination);
    });
}
