const translations = {
    de: {
        publicPage: 'Öffentliche Seite auf Deutsch',
        privatePage: 'Private Seite auf Deutsch',
        homePage: 'Startseite'
    },
    en: {
        publicPage: 'Public page in English',
        privatePage: 'Private Page in English',
        homePage: 'Home page'
    }
};

export const translate = (lang, key) => translations[lang][key];
