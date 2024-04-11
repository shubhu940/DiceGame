import React from 'react'
import styled from 'styled-components'
const Rules = () => {
    return (
        <RulesContainer>
            <h2>How to Play Dice Game</h2>
            <div className="text">
                <p>
                    after click on dice if selected number is equal to disc number you will get same point as disc{" "}
                </p>
                <p>
                    if you get wrong guess then 2 point will be deducted
                </p>
            </div>
        </RulesContainer>
    )
}

export default Rules

const RulesContainer = styled.div`
    max-width: 70vw;
    margin: 0 auto;
    background-color: #fbf1f1;
    padding: 2rem;
    margin-top: 2rem;
    border-radius: 1rem;

    h2{
        
    }
    .text{
        margin-top: 2rem;
    }
    .text p{
        font-size: smaller
    }

`;