const { getBaseTemplate } = require('./basePageTemplate');
const { translate } = require('../utils/translate');

const getPublicPage = lang => {
    const content = `
        <h1>${translate(lang, 'publicPage')}</h1>
    `;

    return getBaseTemplate(lang, content);
};

module.exports = {
    getPublicPage
};