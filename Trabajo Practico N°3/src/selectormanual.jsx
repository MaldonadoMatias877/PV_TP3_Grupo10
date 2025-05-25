import React from 'react';

// CAMBIO AQUÍ: Recibimos setBackgroundColor y setTextColor directamente
function SelectorManual({ backgroundColor, textColor, setBackgroundColor, setTextColor }) {
  return (
    <div className="panel left-panel">
      <h2>Elegir colores</h2>
      <label>
        Color de fondo:
        <input
          type="color"
          value={backgroundColor}
          // CAMBIO AQUÍ: Llamamos a setBackgroundColor con el valor del input
          onChange={(e) => setBackgroundColor(e.target.value)}
          style={{ marginLeft: '1rem' }}
        />
      </label>
      <label>
        Color del texto:
        <input
          type="color"
          value={textColor}
          // CAMBIO AQUÍ: Llamamos a setTextColor con el valor del input
          onChange={(e) => setTextColor(e.target.value)}
          style={{ marginLeft: '1rem' }}
        />
      </label>
    </div>
  );
}

export default SelectorManual;