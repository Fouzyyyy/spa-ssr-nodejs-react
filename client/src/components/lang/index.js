import { useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import germanFlag from './de.png'
import britishFlag from './en.png'
import { LanguageContext } from '../languageContext';

const LanguagesComponentWrapper = styled.div`
    display: flex;
    grid-area: 1 / 3 / 2 / 4;
    height: 30%;
    margin-left: 35%;
    width: 30%;
`;

const Flag = styled.div`
    filter: ${props => props.selected ? 'grayscale(0)' : 'grayscale(50)' };
    width: 100%;

    :hover {
        filter: grayscale(0);
        cursor: pointer;
    }

    img {
        width: 100%;
        height: 100%;
    }
`;

export const LanguagesComponent = () => {
    const selectedLanguage = useContext(LanguageContext);
    const isGermanSelected = selectedLanguage === 'de';

    return <LanguagesComponentWrapper>
                <Flag selected={isGermanSelected}>
                    <Link to="/de">
                        <img src={germanFlag} alt="German flag" />
                    </Link>
                </Flag>
                <Flag selected={!isGermanSelected}>
                    <Link to="/">
                        <img src={britishFlag} alt="British flag" />
                    </Link>
                </Flag>
            </LanguagesComponentWrapper>;   
}

