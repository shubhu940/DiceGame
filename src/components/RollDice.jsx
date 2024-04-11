import React, { useState } from 'react'
import styled from 'styled-components'

const RollDice = ({ rollDice, currentDice }) => {

    // const [currentDice, setCurrentDice] = useState(1);

    // Logic used to generate Random Number
    // const generateRandomNumber = (min, max) => {
    //     return Math.floor(Math.random() * (max - min) + min);
    // }

    // const rollDice = () => {
    //     const randomNumber = generateRandomNumber(1, 7);
    //     setCurrentDice((prev) => randomNumber)
    // }

    return (
        <DiceContainer>
            <div className='dice' onClick={rollDice}>
                <img src={`/images/dice/dice_${currentDice}.png`} alt="dice 1" />
            </div>
            <p>Click on Dice to Roll</p>
        </DiceContainer>
    )
}

export default RollDice

const DiceContainer = styled.div`
    margin-top: 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    .dice{
        cursor: pointer;

    }

    p{
        font-size:medium;
    }
`;