import React from 'react'
import styled from 'styled-components';
import { Button } from '../styled/Button';
import dices from '/dices.png'
const StartGame = ({ toggle }) => {
    return (
        <Container className='container row'>
            <div className='col-md-6'>
                <img className='w-100' src={dices} alt="Start Game" />
            </div>
            <div className='col-md-6 content'>
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
    justify-content: center;
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
