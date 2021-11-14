import styled from 'styled-components';

import { LanguageProvider } from "../languageProvider";

import { LoginFormComponent } from './loginForm';

const LoginPageComponentWrapper = styled.div`
    margin-left: 25%;
    width: 50%;
`;

export const LoginPageComponent = () => {
    return <LoginPageComponentWrapper>
                <LanguageProvider>
                <LoginFormComponent />
                </LanguageProvider>
           </LoginPageComponentWrapper>
};