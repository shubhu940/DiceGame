import React, { useState } from 'react'
import GamePlay from './components/GamePlay';
import StartGame from './components/StartGame';

export default function App() {
  const [isGameStarted, setIsGameStarted] = useState(false);

  const toggleGamePlay = () => {
    setIsGameStarted((prev) => !prev);
  };

  return (
    <>
      {
        //In this line we are using logic with ternary operator
        //if isGameStarted is true then redirect toGamPlay componenet otherwise redirect to StartGame
        isGameStarted ? <GamePlay /> : <StartGame toggle={toggleGamePlay} />
      }
    </>
  )
}
