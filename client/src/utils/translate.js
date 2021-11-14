const translations = {
    de: {
        publicPage: 'Öffentliche Seite auf Deutsch',
        privatePage: 'Private Seite auf Deutsch'
    },
    en: {
        publicPage: 'Public page in English',
        privatePage: 'Private Page in English'
    }
};

export const translate = (lang, key) => translations[lang][key];
