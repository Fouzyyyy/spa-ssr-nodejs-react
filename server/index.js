const express = require('express');

const { languageMiddleWare } = require('./middlewares/languagesMiddleWare');
const { getPublicPage } = require('./templates/publicPage');
const { getPrivatePage } = require('./templates/privatePage');

const app = express();

app.get('/:lang?/public', languageMiddleWare, (req, res) => {
    res.send(getPublicPage(req.params.lang));
});

app.get('/:lang?/private', languageMiddleWare, (req, res) => {
    res.send(getPrivatePage(req.params.lang));
});

// Home page routes
app.use('/:lang', express.static('spa'));
app.use(express.static('spa'));

app.listen(4000);
