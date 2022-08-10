import React, { useState } from "react";
import Game from './components/Game';
import PlayAgain from "./components/PlayAgain";

const App = () => {
  const [gameId, setGameId] = useState(1);
  const [gameStatus, setGameStatus] = useState('active'); //'active' 'won' or 'lost'

  return (
    <>
      <h1>
        CSS only (not really (not at all)) Responsive Tables
      </h1>
      <h2>
        <PlayAgain gameStatus={gameStatus} onClick={() => {setGameId(gameId + 1); setGameStatus('active'); }}/>
      </h2>
      <Game key={gameId} setGameStatus={setGameStatus} gameStatus={gameStatus} />
    </>
  );
};

export default App;
