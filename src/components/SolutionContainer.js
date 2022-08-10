import '../App.css';
import React from "react";

const SolutionContainer = props => (
  <div key="solutionContainer" className="solutionContainer">
    {props.gameSolutionColor.map((caseColor, idx) => (
      <div key={idx} className="solutionItem" style={{backgroundColor: caseColor}}> </div>
    ))}
  </div>
);

export default SolutionContainer;