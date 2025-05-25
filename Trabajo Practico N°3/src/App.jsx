import React, { useState } from 'react';
import './assets/app.css';
import SelectorManual from './selectormanual.jsx';
import SelectorAleatorio from './SelectorAleatorio.jsx';


function App() {
  const [backgroundColor, setBackgroundColor] = useState('#ffffff');
  const [textColor, setTextColor] = useState('#000000');

  const generateRandomColor = () => {
    const hex = '0123456789ABCDEF';
    return '#' + Array.from({ length: 6 }, () => hex[Math.floor(Math.random() * 16)]).join('');
  };

  const handleRandomBackgroundColor = () => {
    setBackgroundColor(generateRandomColor());
  };

  const handleRandomTextColor = () => {
    setTextColor(generateRandomColor());
  };

  // appStyle no se está usando, puedes quitarlo si quieres
  // const appStyle = {
  //   backgroundColor,
  //   color: textColor,
  // };

  return (
    <div
      style={{
        backgroundColor: backgroundColor,
        color: textColor,
        minHeight: '100vh',
        padding: '20px',
        boxSizing: 'border-box',
      }}
    >
      <SelectorManual
        backgroundColor={backgroundColor}
        setBackgroundColor={setBackgroundColor}
        textColor={textColor}
        setTextColor={setTextColor}
      />
      <SelectorAleatorio
        onRandomBackground={handleRandomBackgroundColor}
        onRandomText={handleRandomTextColor}
      />
    </div>
  );
}

export default App;