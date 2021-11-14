const translations = {
    de: {
        publicPage: 'Öffentliche Seite auf Deutsch',
        privatePage: 'Private Seite auf Deutsch',
        home: 'Startseite'
    },
    en: {
        publicPage: 'Public page in English',
        privatePage: 'Private Page in English',
        home: 'Home page'
    }
};

const translate = (lang, key) => translations[lang][key];

module.exports = {
    translate
};
