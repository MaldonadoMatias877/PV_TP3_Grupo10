import React, { useState } from 'react';

function App() {
  const [backgroundColor, setBackgroundColor] = useState('#ffffff');
  const [textColor, setTextColor] = useState('#000000');

  // Función para generar un color hexadecimal aleatorio
  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const styles = {
    backgroundColor,
    color: textColor,
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '2rem',
    transition: '0.3s',
  };

  return (
    <div style={styles}>
      {/* Columna izquierda con inputs personalizados */}
      <div>
        <h2>Elegir colores</h2>
        <div style={{ marginBottom: '1rem' }}>
          <label>
            Color de fondo:
            <input
              type="color"
              value={backgroundColor}
              onChange={(e) => setBackgroundColor(e.target.value)}
              style={{ marginLeft: '1rem' }}
            />
          </label>
        </div>
        <div>
          <label>
            Color del texto:
            <input
              type="color"
              value={textColor}
              onChange={(e) => setTextColor(e.target.value)}
              style={{ marginLeft: '1rem' }}
            />
          </label>
        </div>
      </div>

      {/* Columna derecha con botones aleatorios */}
      <div>
        <h2>Colores al azar</h2>
        <button
          onClick={() => setBackgroundColor(getRandomColor())}
          style={{ marginBottom: '1rem', padding: '0.5rem 1rem' }}
        >
          Fondo Aleatorio
        </button>
        <br />
        <button
          onClick={() => setTextColor(getRandomColor())}
          style={{ padding: '0.5rem 1rem' }}
        >
          Texto Aleatorio
        </button>
      </div>
    </div>
  );
}

export default App;