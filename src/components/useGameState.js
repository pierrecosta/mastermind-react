import '../App.css';
import React, { useState } from "react";

const useGameState = () => {
  // Do not change cause NOTHING is dynamic
  const nBCaseCode = 4;
  const nBUserPossibility = 10;
  const availableColors = ["red", "blue", "green", "yellow", "orange", "pink"];
  const initAllCases = () => {
    let myArrayTemp = [];
    Array.from({length: nBUserPossibility}).map(() => (
      Array.from({length: nBCaseCode}).map(() => (
        myArrayTemp.push("whitesmoke")
      ))
    ));
    return [...myArrayTemp];
  };

  const initComputeCases = () => {
    let myArrayTemp = [];
    myArrayTemp = Array(nBCaseCode)
      .fill()
      .map(() =>
        availableColors[Math.floor(Math.random() * availableColors.length)]
      );
    return [...myArrayTemp];
  };
  
  // Show actual selection
  const [computeRandomValue, setComputeRandomValue] = useState(initComputeCases());
  const [activeGameTry, setActiveGameTry] = useState(0);
  const [isHidden, setIsHidden] = useState(true);
  const [activeUserCase, setActiveUserCase] = useState("");
  const [activeUserColor, setActiveUserColor] = useState(["silver", "silver", "silver", "silver"]);
  const [gameSolutionColor, setGameSolutionColor] = useState(initAllCases());
  const [gameCodeColor, setGameCodeColor] = useState(initAllCases());

  return {
    nBCaseCode,
    nBUserPossibility,
    availableColors,
    computeRandomValue,
    activeGameTry, setActiveGameTry, 
    isHidden, setIsHidden,
    activeUserCase, setActiveUserCase,
    activeUserColor, setActiveUserColor,
    gameSolutionColor, setGameSolutionColor,
    gameCodeColor, setGameCodeColor
  };
}

export default useGameState;