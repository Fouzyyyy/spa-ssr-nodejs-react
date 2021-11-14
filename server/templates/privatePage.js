const { getBaseTemplate } = require('./basePageTemplate');
const { translate } = require('../utils/translate');

const getPrivatePage = lang => {
    const content = `
        <h1>${translate(lang, 'privatePage')}</h1>
    `;

    return getBaseTemplate(lang, content);
};

module.exports = {
    getPrivatePage
};