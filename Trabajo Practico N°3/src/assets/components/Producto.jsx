import React from 'react';

// Array productos
let productos = [
    { nombre: "Teclado", precio: 500 },
    { nombre: "Pantalla", precio: 500 },
    { nombre: "CPU", precio: 500 },
    { nombre: "Mouse", precio: 500 },
    { nombre: "Auriculares", precio: 500 }
];

function Producto() {
    // --- Precios con IVA (21%) ---
    const productosConIVA = productos.map(producto => ({
        ...producto,
        precioConIVA: producto.precio * 1.21 
    }));

    // --- Ordenar por precio (de menor a mayor) ---
    const productosOrdenados = [...productos].sort((a, b) => a.precio - b.precio);

    // --- Agregar nuevo producto ---
    const productosConNuevo = [...productos, { nombre: "Parlante Bluetooth", precio: 590.90 }];

    // --- Eliminar el producto más barato ---
    const precioMasBajo = Math.min(...productos.map(p => p.precio));
    const productosSinMasBarato = productos.filter(p => p.precio !== precioMasBajo);

    return (
        <div>
            <h2>Lista de productos</h2>
            
            {/* Lista original */}
            <h3>Original:</h3>
            <ul>
                {productos.map((producto, index) => (
                    <li key={index}>
                        {producto.nombre} - ${producto.precio}
                    </li>
                ))}
            </ul>

            {/* Lista con IVA */}
            <h3>Precios con IVA (21%):</h3>
            <ul>
                {productosConIVA.map((producto, index) => (
                    <li key={`iva-${index}`}>
                        {producto.nombre} - ${producto.precioConIVA.toFixed(2)}
                    </li>
                ))}
            </ul>

            {/* Lista ordenada por precio */}
            <h3>Ordenados por precio (menor a mayor):</h3>
            <ul>
                {productosOrdenados.map((producto, index) => (
                    <li key={`ordenado-${index}`}>
                        {producto.nombre} - ${producto.precio}
                    </li>
                ))}
            </ul>

            {/* Lista con nuevo producto */}
            <h3>Con producto agregado:</h3>
            <ul>
                {productosConNuevo.map((producto, index) => (
                    <li key={`nuevo-${index}`}>
                        {producto.nombre} - ${producto.precio}
                    </li>
                ))}
            </ul>

            {/* Lista sin el más barato */}
            <h3>Sin el producto más barato:</h3>
            <ul>
                {productosSinMasBarato.map((producto, index) => (
                    <li key={`sin-bajo-${index}`}>
                        {producto.nombre} - ${producto.precio}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Producto;