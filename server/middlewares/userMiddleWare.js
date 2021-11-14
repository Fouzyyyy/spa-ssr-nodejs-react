const userMiddleWare = (req, _, next) => {
    req.params.isUserAuthenticated = req.headers.cookie?.includes('isAuthenticated');

    next();
};

module.exports = {
    userMiddleWare
};