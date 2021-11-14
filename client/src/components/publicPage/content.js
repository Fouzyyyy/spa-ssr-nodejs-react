import { useContext } from "react";

import { LanguageContext } from "../languageContext";
import { translate } from "../../utils/translate";

export const Content = () => {
    const lang = useContext(LanguageContext);

    return <h1>{translate(lang, 'publicPage')}</h1>;
};