import React, { useState } from 'react'
import styled from 'styled-components'
import TotalScore from './TotalScore'
import NumberSelector from './NumberSelector'
import RollDice from './RollDice'
import { Button, OutlineButton } from '../styled/Button'
import Rules from './Rules'

const GamePlay = () => {

    const [score, setScore] = useState(0);
    const [currentDice, setCurrentDice] = useState(1);
    const [selectedNumber, setSelectedNumber] = useState();
    const [error, setError] = useState("");
    const [showRules, setShowRules] = useState(false);

    const generateRandomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min) + min);
    }

    const rollDice = () => {
        const randomNumber = generateRandomNumber(1, 7);
        setCurrentDice((prev) => randomNumber)

        if (!selectedNumber) {
            setError("You have not selected any number");

            return
        };

        if (selectedNumber == randomNumber) {
            setScore((prev) => prev + randomNumber);
        } else {
            setScore((prev) => prev - 2);
        }

        setSelectedNumber(undefined);
    }

    const resetScore = () => {
        setScore(0);
    }

    return (
        <MainContainer>
            <div className='top-section row'>
                <div className="col-md-6">
                    <TotalScore score={score} />
                </div>
                <div className="col-md-6">
                    <NumberSelector error={error} setError={setError} selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber} />
                </div>

            </div>
            <RollDice currentDice={currentDice} rollDice={rollDice} />
            <div className='btns'>
                <OutlineButton onClick={resetScore}>Reset</OutlineButton>
                <Button onClick={() => setShowRules((prev) => !prev)}>
                    {showRules ? "Hide" : "Show"} Rules
                </Button>
            </div>
            {showRules && <Rules />}

        </MainContainer>
    )
}

export default GamePlay;

const MainContainer = styled.div`
padding: 1rem 0;
    .top-section{
        display: flex;
        justify-content: space-around;
        align-items: end;
    }

    .btns{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 1rem;
    }
`