import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import { SpaComponent } from '../spa';
import { SsrComponent } from '../ssr';
import { LanguagesComponent } from '../lang';
import { LanguageContext } from '../LanguageContext';

const SectionsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr repeat(3, 2fr) 1fr;
  grid-template-rows: 1fr 4fr 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
`;

export const RootComponent = () => {
    const { lang } = useParams();

    return <LanguageContext.Provider value={lang || 'en'}>
              <SectionsWrapper>
               <LanguagesComponent />
               <SpaComponent />
               <SsrComponent />
              </SectionsWrapper>
          </LanguageContext.Provider>;
};