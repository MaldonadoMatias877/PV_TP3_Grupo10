import React from 'react';

let productos = [
    { nombre: "Teclado", precio: 500 },
    { nombre: "Pantalla", precio: 500 },
    { nombre: "CPU", precio: 500 },
    { nombre: "Mouse", precio: 500 },
    { nombre: "Auriculares", precio: 500 }
];

function Producto() {
    return (
        <div>
            <h2>Lista de productos</h2>
            <ul>
                {productos.map((producto, index) => (
                    <li key={index}>
                        {producto.nombre} - ${producto.precio}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Producto;
