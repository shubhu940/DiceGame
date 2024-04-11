import styled from 'styled-components'
export const Button = styled.button`
    /* padding: 0.8rem 2rem; */
    padding: 1vw 2vw;
    background-color:#000000;
    color: white;
    border-radius: 1rem;
    width: 14vw;
    border-radius: none;
    border: 1px solid transparent;
    cursor: pointer;
    transition: 0.4s background ease-in;

    &:hover{
        background-color: #fff;
        border: 1px solid black;
        color: #000000;
        transition: 0.3s background ease-in;
    }
`;

export const OutlineButton = styled(Button)`

    background-color: #fff;
    border: 1px solid black;
    color: #000000;
   &:hover{
        background-color: #000000;
        border: 1px solid transparent;
        color: #fff;
    }
`;