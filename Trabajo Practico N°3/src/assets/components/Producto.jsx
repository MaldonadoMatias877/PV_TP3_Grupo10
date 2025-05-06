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

// Array productos
let productos = [
    { nombre: "Teclado", precio: 500 },
    { nombre: "Pantalla", precio: 500 },
    { nombre: "CPU", precio: 500 },
    { nombre: "Mouse", precio: 500 },
    { nombre: "Auriculares", precio: 500 }
];
let productos = [];

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

    function manejoDeLaLista(evento) {
        evento.preventDefault();

        const nombre = document.getElementById('nombre').value;
        const precio = parseFloat(document.getElementById('precio').value);

        const prod = { nombre, precio };
        productos.push(prod);

        console.clear();
        console.log(productos);

        mostrarLista();

        // Limpiar campos
        document.getElementById('nombre').value = '';
        document.getElementById('precio').value = '';
    }


    function mostrarLista(filtrados = productos) {
        const lista = document.getElementById('lista-productos');
        lista.innerHTML = '';

        filtrados.forEach(prod => {
            const item = document.createElement('li');
            item.textContent = `Producto: ${prod.nombre} - Precio: $${prod.precio.toFixed(2)}`;
            lista.appendChild(item);
        });
    }

    function filtrarProducto(event) {
        event.preventDefault();
        const filtro = document.getElementById('nombre').value.toLowerCase();
        const filtrados = productos.filter(p => p.nombre.toLowerCase().includes(filtro));
        console.log("Filtrado:", filtrados);
        mostrarLista(filtrados);
    }

    function agregarIVA(event) {
        
        event.preventDefault();
        
        productos = productos.map(p => {
            if(!p.precioMasIva) {
                return {
                    ...p,
                    precio: parseFloat((p.precio * 1.21).toFixed(2)),
                    precioMasIva: true
                };
            }
            return p;
        });
        console.log("Con IVA:", productos);
        mostrarLista();
    }

    function eliminarMasBarato(event) {
        event.preventDefault();
        if (productos.length === 0) return;

        let precioMin = Math.min(...productos.map(p => p.precio));
        const index = productos.findIndex(p => p.precio === precioMin);
        if (index !== -1) {
            productos.splice(index, 1);
        }

        console.log(productos);
        mostrarLista();
    }

    function ordenarAlfabeticamente(event) {
        event.preventDefault();
        productos.sort((a, b) => a.nombre.localeCompare(b.nombre));
        console.log(productos);
        mostrarLista();
    }

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
        <>
            <form onSubmit={manejoDeLaLista}>

                <input type="text" id="nombre" placeholder="Ingrese nombre" required />
                <input type="number" id="precio" placeholder="Precio" required />

                <br /><br />

                <button type="submit">Agregar producto</button>
                <button onClick={filtrarProducto}>Filtrar</button>
                <button onClick={agregarIVA}>Agregar IVA</button>
                <button onClick={eliminarMasBarato}>Eliminar más barato</button>
                <button onClick={ordenarAlfabeticamente}>Ordenar</button>
            </form>

            <h2>Productos Agregados</h2>
            <ul id="lista-productos"></ul>
        </>
    );
}

export default Producto;