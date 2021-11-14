const translations = {
    de: {
        publicPage: 'Öffentliche Seite auf Deutsch',
        privatePage: 'Private Seite auf Deutsch',
        homePage: 'Startseite',
        email: 'E-Mail Addresse',
        password: 'Passwort',
        login: 'Anmeldung',
        loading: 'wird geladen...',
        knownUser: 'Benutzer eingeloggt.'
    },
    en: {
        publicPage: 'Public page in English',
        privatePage: 'Private Page in English',
        homePage: 'Home page',
        email: 'E-Mail address',
        password: 'Password',
        login: 'Login',
        loading: 'loading...',
        knownUser: 'User logged in.'
    }
};

export const translate = (lang, key) => translations[lang][key];
