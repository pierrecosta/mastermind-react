import '../App.css';
import React from "react";

const UserContainer = props => (
  <div key="userContainer" className="userContainer">
    {Array.from({length: props.nBCaseCode}).map((caseColor, idx) => (
      <div
        key={idx} className="userItem"
        style={{backgroundColor: props.activeUserColor[(idx )]}}
        onClick={() => props.onUserClick(idx)}
      >
        {caseColor}
      </div>
    ))}
  </div>
);

export default UserContainer;