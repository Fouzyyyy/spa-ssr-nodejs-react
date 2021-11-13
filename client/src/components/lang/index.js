import styled from 'styled-components';

import germanFlag from './de.png'
import britishFlag from './en.png'

const LanguagesComponentWrapper = styled.div`
    display: flex;
    grid-area: 1 / 3 / 2 / 4;
    height: 30%;
    margin-left: 35%;
    width: 30%;
`;

const Flag = styled.div`
    width: 100%;

    img {
        width: 100%;
        height: 100%;
    }
`;

export const LanguagesComponent = () => {

    return <LanguagesComponentWrapper>
                <Flag selected>
                    <img src={germanFlag} alt="German flag" />
                </Flag>
                <Flag selected>
                    <img src={britishFlag} alt="British flag" />
                </Flag>
            </LanguagesComponentWrapper>;   
}

