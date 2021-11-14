import { Fragment, useContext } from "react";

import { LanguageContext } from "../languageContext";
import { HomePageLink } from "../homePageLink";
import { IsUserLoggedIn } from "../userContext";
import { translate } from "../../utils/translate";

export const Content = () => {
    const lang = useContext(LanguageContext);
    const isUserLoggedIn = useContext(IsUserLoggedIn);

    if (!isUserLoggedIn) {
        document.location = lang === 'en' ? '/login' : `/${lang}/login`; 
        return null;
    }

    return <Fragment>
                <HomePageLink lang={lang} />
                <h1>{translate(lang, 'privatePage')}</h1>
           </Fragment>;
};