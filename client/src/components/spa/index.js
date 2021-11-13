import styled from 'styled-components';

import { SectionComponent } from '../ui/Section';
import logo from './logo-react.svg';

const SpaComponentWrapper = styled.div`
    grid-area: 2 / 2 / 3 / 3;
`;

export const SpaComponent = () =>
    <SpaComponentWrapper>
        <SectionComponent>
            <img src={logo} alt="logo-react" />
        </SectionComponent>
    </SpaComponentWrapper>;
