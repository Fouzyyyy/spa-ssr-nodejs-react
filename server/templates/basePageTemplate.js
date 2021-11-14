const { translate } = require("../utils/translate");

const getBaseTemplate = (lang, content) => `
    <!DOCTYPE html>
    <html lang=${lang}>
        <head></head>
        <body>
            <a href="/">${translate(lang, 'home')}</a>
            ${content}
        </body>
    </html>
`;

module.exports = {
    getBaseTemplate
};