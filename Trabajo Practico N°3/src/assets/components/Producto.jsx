import { useEffect } from "react";
import React, { useState } from 'react';

function Producto() {
  const productos = [
    { nombre: "Teclado", precio: 15 },
    { nombre: "Pantalla", precio: 30 },
    { nombre: "CPU", precio: 80 },
    { nombre: "Mouse", precio: 10 },
    { nombre: "Auriculares", precio: 20 },
  ];

  const [lista, setLista] = useState(productos);
  const [filtrado, setFiltrado] = useState(false);
  const [IVA, setIVA] = useState(false);

  // Efecto para mostrar los productos en consola

  useEffect(() => {
    productos.forEach(producto => {
      console.log(`Producto: ${producto.nombre} - Precio: $${producto.precio}`);
    });
  }, []);

    // Función para filtrar productos
  const toggleFiltro = () => {
    if (filtrado) {
      setLista(productos);
      setFiltrado(false);
    } else {
      const filtrados = productos.filter(producto => producto.precio > 20);
      setLista(filtrados);
      setFiltrado(true);
    }
  };

  // Función para agregar IVA a los precios
  const toogleIVA = () => {
    if (IVA) {
      setLista(productos)
      setIVA(false);
  } else {
    const preciosConIVA = productos.map(producto => ({
      ...producto,
      precio: parseFloat((producto.precio * 1.21)), // Agregar IVA del 21%
    }));
    setLista(preciosConIVA);
    setIVA(true);
  } 
  }

  return (
    <div>
      <h2>Lista de productos</h2>

      <button onClick={toggleFiltro}> {filtrado ? "Mostrar todos los productos" : "Filtrar productos con precio mayor a 20"} </button>
      <button onClick={toogleIVA}> {filtrado ? "Mostrar productos sin IVA" : "Filtrar productos con IVA"} </button>

      <ul>
        {lista.map((producto, index) => (
          <li key={index}>
            {producto.nombre} - ${producto.precio}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Producto;