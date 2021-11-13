import { BrowserRouter } from 'react-router-dom';
import styled from 'styled-components';

import { SpaComponent } from './components/spa';
import { SsrComponent } from './components/ssr';
import { LanguagesComponent } from './components/lang';

const SectionsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr repeat(3, 2fr) 1fr;
  grid-template-rows: 1fr 4fr 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
`;

function App() {
  return (
    <BrowserRouter>
      <SectionsWrapper>
        <LanguagesComponent />
        <SpaComponent />
        <SsrComponent />
      </SectionsWrapper>
    </BrowserRouter>  
  );
}

export default App;
