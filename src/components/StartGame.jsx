import React from 'react'
import styled from 'styled-components';
import { Button } from '../styled/Button';
const StartGame = ({ toggle }) => {
    return (
        <Container className='container'>
            <div>
                <img className='w-100' src="/images/dices.png" alt="" />
            </div>
            <div className='content'>
                <h1>Dice Game</h1>
                <Button onClick={toggle}>Play Now</Button>
            </div>
        </Container>
    )
}

export default StartGame


const Container = styled.div`
    display: flex;
    height: 100vh;
    margin: 0 auto;
    align-items: center;

    /* .content h1{
        font-size: 6vw;
        white-space: nowrap;
        color: #000000;
    } */

    .content {
        h1{
            font-size: 6vw;
            white-space: nowrap;
            color: #000000;
        }
    }
`;
