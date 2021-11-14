const languageMiddleWare = (req, res, next) => {
    if (!req.params.lang) {
        req.params.lang = 'en';
    }

    next();
};

module.exports = {
    languageMiddleWare
};