import { useParams } from 'react-router-dom';

import { LanguageContext } from '../languageContext';

export const LanguageProvider = ({ children }) => {
    const { lang } = useParams();

    return <LanguageContext.Provider value={lang || 'en'}>
                {children}
           </LanguageContext.Provider>;
}