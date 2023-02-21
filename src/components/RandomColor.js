import React, { useState } from "react";
import ColorInfo from "./ColorInfo";

function RandomColor() {
  const [color, setColor] = useState(createRandomColor());

  function clickHandler(event) {
    event.preventDefault();
    const newColor = createRandomColor();
    setColor(newColor);
  }

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        position: "relative",
      }}
    >
      <ColorInfo color={color} />
      <div
        style={{
          width: "100%",
          height: "100%",
          background: color,
        }}
        onClick={clickHandler}
      ></div>
    </div>
  );
}

function createRandomColor() {
  return `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(
    Math.random() * 255
  )}, ${Math.floor(Math.random() * 255)})`;
}

export default RandomColor;
