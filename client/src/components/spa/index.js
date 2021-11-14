import { useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { SectionComponent } from '../ui/Section';
import { LanguageContext } from '../languageContext';
import logo from './logo-react.svg';
import { translate } from '../../utils/translate';

const SpaComponentWrapper = styled.div`
    grid-area: 2 / 2 / 3 / 3;
`;

export const SpaComponent = () => {
    const lang = useContext(LanguageContext);
    const publicLinkLabel = translate(lang, 'publicPage');
    const privateLinkLabel = translate(lang, 'privatePage');

    return <SpaComponentWrapper>
                <SectionComponent>
                    <img src={logo} alt="logo-react" />
                    <ul>
                        <li>{lang === 'de' ? <Link to={`/${lang}/spa/public`}>{publicLinkLabel}</Link> : <Link to="/spa/public">{publicLinkLabel}</Link>}</li>
                        <li>{lang === 'de' ? <Link to={`/${lang}/spa/private`}>{privateLinkLabel}</Link> : <Link to="/spa/private">{privateLinkLabel}</Link>}</li>
                    </ul>
                </SectionComponent>
            </SpaComponentWrapper>;
};
