import React, { useState } from 'react';

function useRandomColor() {
  const getRandomLightColor = () => {
    const minBrightness = 120; // Adjust this threshold to define what you consider "light"
    const excludedColors = ['red', 'black', 'maroon'];

    let red, green, blue;
    let color ;
    do {
      red = Math.floor(Math.random() * 256);
      green = Math.floor(Math.random() * 256);
      blue = Math.floor(Math.random() * 256);
      color = `rgb(${red},${green},${blue})`;
    } while (red + green + blue < 3 * minBrightness );

    const redHex = red.toString(16).padStart(2, '0');
    const greenHex = green.toString(16).padStart(2, '0');
    const blueHex = blue.toString(16).padStart(2, '0');

    return `#${redHex}${greenHex}${blueHex}`;
  };

  const [randomColor, setRandomColor] = useState(getRandomLightColor());
  console.log('colour',getRandomLightColor())
  const changeColor = () => {
    const newRandomColor = getRandomLightColor();
    setRandomColor(newRandomColor);
  };

  return [randomColor, changeColor];
}

export default useRandomColor