import styled from 'styled-components';

const Wrapper = styled.div`
    border: 2px solid gray;
    border-radius: 10px;
    height: 600px;
    padding: 20px;
    width: calc(100% - 42px);

    img {
        width: 100%;
    }
`;

export const SectionComponent = ({ children }) => <Wrapper>{children}</Wrapper>;
