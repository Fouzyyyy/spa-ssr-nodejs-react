const express = require('express');

const { getPublicPage } = require('./templates/publicPage');
const { getPrivatePage } = require('./templates/privatePage');

const app = express();

app.get('/public', (_, res) => {
    res.send(getPublicPage('en'));
});

app.get('/private', (_, res) => {
    res.send(getPrivatePage('en'));
});

app.use(express.static('spa'));

app.listen(4000);
