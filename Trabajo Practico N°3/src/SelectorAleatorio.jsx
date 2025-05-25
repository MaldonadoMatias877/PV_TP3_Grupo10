import React from 'react';

function SelectorAleatorio({ onRandomBackground, onRandomText }) {
  return (
    <div className="panel right-panel">
      <h2>Colores al azar</h2>
      {/* Botón para cambiar el color de fondo de forma aleatoria */}
      <button onClick={onRandomBackground}>Fondo Aleatorio</button>
      {/* Botón para cambiar el color del texto de forma aleatoria */}
      <button onClick={onRandomText}>Texto Aleatorio</button>
    </div>
  );
}

export default SelectorAleatorio;