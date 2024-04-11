import React, { useState } from 'react'
import styled from 'styled-components'

const NumberSelector = ({ error, setError, selectedNumber, setSelectedNumber }) => {
    const arrayNumber = [1, 2, 3, 4, 5, 6];
    // const [selectedNumber, setSelectedNumber] = useState();
    const numberSelectorHandler = (value) => {
        setSelectedNumber(value);
        setError("");
    }
    return (
        <NumberSelectorContainer className='row'>
            <p className='error'>{error}</p>
            <div className='flex col-md-10'>
                {
                    arrayNumber.map((value, i) => (
                        <Box isSelected={value === selectedNumber} key={i} onClick={() => numberSelectorHandler(value)}>
                            {value}
                        </Box>
                    )
                    )
                }
            </div>
            <p>Select Number</p>
        </NumberSelectorContainer>

    )
}

export default NumberSelector;

const NumberSelectorContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: end;

    .flex{
        display:flex;
        gap: 1rem;
    }
    p{
        margin-top: 1rem;
        text-align: end;
        font-size: medium;
        font-weight:500;
    }
    .error{
        color: red;
    }
`;

const Box = styled.div`
    height: 4rem;
    width: 4rem;
    border: 1px solid black;
    display: grid;
    place-items: center;
    font-size: x-large;
    font-weight:700;
    background-color: ${(props) => (props.isSelected ? "black" : "white")};
    color: ${(props) => (props.isSelected ? "white" : "black")};
`
