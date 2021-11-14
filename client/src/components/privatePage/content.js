import { Fragment, useContext } from "react";

import { LanguageContext } from "../languageContext";
import { HomePageLink } from "../homePageLink";
import { translate } from "../../utils/translate";

export const Content = () => {
    const lang = useContext(LanguageContext);

    return <Fragment>
                <HomePageLink lang={lang} />
                <h1>{translate(lang, 'privatePage')}</h1>
           </Fragment>;
};