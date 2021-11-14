import { useContext } from 'react';
import styled from 'styled-components';

import { SectionComponent } from '../ui/Section';
import { LanguageContext } from '../languageContext';
import { translate } from '../../utils/translate';
import logo from './logo-nodejs.svg';

const SsrComponentWrapper = styled.div`
    grid-area: 2 / 4 / 3 / 5;
`;

export const SsrComponent = () => {
    const lang = useContext(LanguageContext);
    const publicLinkLabel = translate(lang, 'publicPage');
    const privateLinkLabel = translate(lang, 'privatePage');

    return <SsrComponentWrapper>
                <SectionComponent>
                    <img src={logo} alt="logo-nodejs" />
                    <ul>
                        <li>
                            {lang === 'de' ? <a href={`http://localhost:4000/${lang}/public`}>{publicLinkLabel}</a> : <a href={`http://localhost:4000/public`}>{publicLinkLabel}</a>}
                        </li>
                        <li>
                            {lang === 'de' ? <a href={`http://localhost:4000/${lang}/private`}>{privateLinkLabel}</a> : <a href={`http://localhost:4000/private`}>{privateLinkLabel}</a>}
                        </li>
                    </ul>
                </SectionComponent>
            </SsrComponentWrapper>;
};
