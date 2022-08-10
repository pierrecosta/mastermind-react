import '../App.css';
import React, { useState } from "react";

import useGameState from './useGameState';

import CodeContainer from './CodeContainer';
import SolutionContainer from './SolutionContainer';
import UserContainer from './UserContainer';
import ColorPickContainer from './ColorPickContainer';

const Game = props => {
  const {
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
  } = useGameState();

  const updateCodeCases = () => {
    let myArrayTemp = [];
    let idxMain = 0;
    Array.from({length: nBUserPossibility}).map((caseRowId, idxRow) => {
      Array.from({length: nBCaseCode}).map((caseColumnId, idxColumn) => {
        // console.log("Array Update, index is " + idxMain + " (Active try is " + activeGameTry + ")");
        if(idxRow !== activeGameTry) {
          myArrayTemp.push(gameCodeColor[idxMain]);
        } else {
          myArrayTemp.push(activeUserColor[idxColumn]);
        }
        return idxMain = idxMain + 1; // why return ? Because warning
      })
    });
    return [...myArrayTemp];
  }

  const updateSolutionCases = () => {
    let myArrayTemp = [];
    let sumGameWin = 0;
    let idxMain = 0;
    Array.from({length: nBUserPossibility}).map((caseRowId, idxRow) => (
      Array.from({length: nBCaseCode}).map((caseColumnId, idxColumn) => {
        if(idxRow !== activeGameTry) {
          myArrayTemp.push(gameSolutionColor[idxMain])
        } else {
          // console.log("Result for case " + idxColumn + " with value " + computeRandomValue[idxColumn]);
          if (activeUserColor[idxColumn] === computeRandomValue[idxColumn]) {
            myArrayTemp.push("green");
            sumGameWin = sumGameWin + 1;
          } else if (computeRandomValue.includes(activeUserColor[idxColumn])) {
            myArrayTemp.push("orange");
          } else {
            myArrayTemp.push("red");
          }
        }
        return idxMain = idxMain + 1; // why return ? Because warning
      })
    ));

    if (sumGameWin === 4) {
      props.setGameStatus('won');
    }
    return [...myArrayTemp];
  }

  const onUserClick = (caseColumnId) => {
    if (isHidden) {
      setIsHidden(false)
      setActiveUserCase(caseColumnId);
    } else {
      setIsHidden(true);
    }
  }

  const updateColorClick = (color) => {
    if (activeUserCase !== -1) {
      let tempColor = [];
      activeUserColor.map((tempCaseColor, idx) => {
        if(idx === (activeUserCase)){
          tempColor.push(color);
        }
        else {
          tempColor.push(tempCaseColor);
        }
        return tempColor; // why return ? Because warning
      });
      setActiveUserColor([...tempColor]);
    }
    setIsHidden(true);
  }

  const checkUserInput = () => {
    setGameCodeColor(updateCodeCases());
    setGameSolutionColor(updateSolutionCases);

    setActiveGameTry((activeGameTry + 1));
    
    if (activeGameTry >= 10) {
      props.setGameStatus('lost');
    }

    setActiveUserColor(["silver", "silver", "silver", "silver"]);
  }
  
  return (
    <div className="gameContainer">
      <div className="gameHeader">MasterMind : Trouve la couleur de l'ordinateur</div>
      <div className="pageContainerLeft">
        <CodeContainer gameCodeColor={gameCodeColor} />
      </div>
      <div className="pageContainerRight">
        <SolutionContainer gameSolutionColor={gameSolutionColor} />
      </div>
      <div className="pageContainerBottom">
        <div className="userInputContainer">
          <div className="orderContainer"> Choose 4 Colors:</div>
          <div className="orderContainer">
            <UserContainer
              nBCaseCode={nBCaseCode}
              activeUserColor={activeUserColor}
              onUserClick={onUserClick}
              />
          </div>
          <div className="orderContainer">
            {props.gameStatus==='active' && <button onClick={(checkUserInput)}>Valider</button> }</div>
          <div className="orderContainer">
            {!isHidden && <ColorPickContainer availableColors={availableColors} updateColorClick={updateColorClick}/>}
          </div>
        </div>
      </div>
      <div className="gameFooter"> This is the end of the game </div>
    </div>
  );
};

export default Game;