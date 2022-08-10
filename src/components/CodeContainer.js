import '../App.css';
import React from "react";

const CodeContainer = props => (
  <div key="codeContainer" className="codeContainer">
    {props.gameCodeColor.map((caseColor, idx) => (
      <div key={idx} className="codeItem" style={{backgroundColor: caseColor}}> </div>
    ))}
  </div>
);

export default CodeContainer;