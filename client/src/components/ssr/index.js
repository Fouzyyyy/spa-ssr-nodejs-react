import styled from 'styled-components';

import { SectionComponent } from '../ui/Section';
import logo from './logo-nodejs.svg';

const SsrComponentWrapper = styled.div`
    grid-area: 2 / 4 / 3 / 5;
`;

export const SsrComponent = () => 
    <SsrComponentWrapper>
        <SectionComponent>
            <img src={logo} alt="logo-nodejs" />
        </SectionComponent>
    </SsrComponentWrapper>;
