import { Link } from 'react-router-dom';

import { translate } from '../../utils/translate';

export const HomePageLink = ({ lang }) => 
    <Link to={`${lang === 'de' ? `/${lang}` : '/'}`}>
        {translate(lang, 'homePage')}
    </Link>;