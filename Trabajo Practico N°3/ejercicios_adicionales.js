import React from "react";

const Producto = () => {
  // Array original de productos 
  const productos = [
    { descripcion: "Teclado", precio: 30000 },
    { descripcion: "Auriculares", precio: 49000 },
    { descripcion: "Monitor", precio: 120000 },
    { descripcion: "Mouse", precio: 15000 },
    { descripcion: "Notebook", precio: 250000 },
  ];

  // Punto 3: Aplicar IVA (21%) a cada producto (map)
  const productosConIVA = productos.map((producto) => ({
    ...producto,
    precioConIVA: producto.precio * 1.21, 
  }));

  // Punto 4: Ordenar productos por precio
  const productosOrdenados = [...productos].sort((a, b) => a.precio - b.precio);

  // Punto 5: Agregar un nuevo producto
  const productosConNuevo = [...productos, { descripcion: "Parlante Bluetooth", precio: 59000.90 }];

  // Punto 6: Eliminar el producto más barato 
  const indiceMasBarato = productos.findIndex(
    (p) => p.precio === Math.min(...productos.map((p) => p.precio))
  );
  const productosSinMasBarato = productos.filter((_, index) => index !== indiceMasBarato);

  return (
    <div>
      <h2>Lista de Productos (sin hooks)</h2>

      {/* Lista original */}
      <h3>Original:</h3>
      <ul>
        {productos.map((p, i) => (
          <li key={i}>{p.descripcion} - ${p.precio}</li>
        ))}
      </ul>

      {/* Punto 3: Precios con IVA */}
      <h3>Con IVA (21%):</h3>
      <ul>
        {productosConIVA.map((p, i) => (
          <li key={i}>{p.descripcion} - ${p.precioConIVA.toFixed(2)}</li>
        ))}
      </ul>

      {/* Punto 4: Ordenados por precio */}
      <h3>Ordenados (menor a mayor precio):</h3>
      <ul>
        {productosOrdenados.map((p, i) => (
          <li key={i}>{p.descripcion} - ${p.precio}</li>
        ))}
      </ul>

      {/* Punto 5: Con nuevo producto */}
      <h3>Con producto agregado:</h3>
      <ul>
        {productosConNuevo.map((p, i) => (
          <li key={i}>{p.descripcion} - ${p.precio}</li>
        ))}
      </ul>

      {/* Punto 6: Sin el más barato */}
      <h3>Sin el producto más barato:</h3>
      <ul>
        {productosSinMasBarato.map((p, i) => (
          <li key={i}>{p.descripcion} - ${p.precio}</li>
        ))}
      </ul>
    </div>
  );
};

export default Producto;