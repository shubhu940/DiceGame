import React from 'react'
import styled from 'styled-components';
const TotalScore = ({ score }) => {
    return (
        <ScoreContainer>
            <h1>{score}</h1>
            <p>Total Score</p>
        </ScoreContainer>
    )
}

export default TotalScore

const ScoreContainer = styled.div`
    max-width: 8rem;
    text-align: center;
    padding: 0 0.5rem;
    line-height: 1rem;
    h1{
        font-size:6vw;
        font-weight: bold;
    }
    p{
        font-size: large;
        font-weight: 600;
    }

`;