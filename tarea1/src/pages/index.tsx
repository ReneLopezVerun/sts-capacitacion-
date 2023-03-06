import React, { useState } from 'react';

function ColorButton() {
  const [backgroundColor, setBackgroundColor] = useState('#ffffff');

  const handleButtonClick = () => {
    const newColor = getRandomColor();
    setBackgroundColor(newColor);
    document.body.style.backgroundColor = newColor;
  };

  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  return (
    <button onClick={handleButtonClick}>Cambiar color de fondo</button>
  );
}

export default ColorButton;
