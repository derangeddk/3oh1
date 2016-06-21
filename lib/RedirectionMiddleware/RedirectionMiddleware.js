module.exports = function RedirectionMiddleware() {
    return redirectionMiddleware;
};

function redirectionMiddleware(req, res, next) {
    next();
}
