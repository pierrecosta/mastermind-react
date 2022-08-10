import '../App.css';
import React from "react";

const ColorPickContainer = props => (
  <div key="colorPickContainer" className="colorPickContainer">
    {props.availableColors.map(colorName => (
      <div
        key={colorName} className="colorPickItem" style={{ backgroundColor: colorName }}
        onClick={() => props.updateColorClick(colorName)}
      >
        {colorName}
      </div>
    ))}
  </div>
);

export default ColorPickContainer;