import { useContext, useCallback, useState } from "react";
import styled from 'styled-components';

import { translate } from "../../utils/translate";

import { LanguageContext } from "../languageContext";

const LoginFormWrapper = styled.div`
    border: 1px solid gray;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 500px;
`;

const InputFormFIeld = styled.div`
    margin-bottom: 50px;
    min-width: 600px;
    display: flex;
    justify-content: space-between;

    label, input, button {
        font-size: 2rem;
    }

    button {
        margin-top: 10px;
        border: 1px solid gray;
        background-color: white;
        width: 100%;
    }

    button:hover {
        cursor: pointer;
    }
`;

export const LoginFormComponent = () => {
    const lang = useContext(LanguageContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const login = useCallback(async () => {
        setIsLoading(true);

        try {
            const response = await fetch('http://localhost:4000/login', {
                         method: 'POST',
                         headers: {
                             'Content-Type': 'application/json'
                         },
                         body: JSON.stringify({ email, password })
                     });


            if (response.status === 200) {
                document.cookie = 'isAuthenticated=true; path=/;';
                document.location = lang === 'en' ? '/' : `/${lang}`;
            }
        } catch {
            console.error('Couldn\'t login with the provided credentials');
        } finally {
            setIsLoading(false);
        }
    }, [email, password, lang]);

    return <LoginFormWrapper>
        <InputFormFIeld>
            <label htmlFor="email">
                {translate(lang, 'email')}
            </label>
            <input id="email" type="email" onChange={({ target }) => setEmail(target.value)} value={email} />
        </InputFormFIeld>

        <InputFormFIeld>
            <label htmlFor="password">
                {translate(lang, 'password')}
            </label>
            <input type="password" onChange={({ target}) => setPassword(target.value)} value={password} />
        </InputFormFIeld>

        <InputFormFIeld>
            <button onClick={login}>{isLoading ? translate(lang, 'loading') : translate(lang, 'login')}</button>
        </InputFormFIeld>
    </LoginFormWrapper>
}