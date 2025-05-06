import React from 'react';
import '../../styles/Producto.css';

let productos = [];

function Producto() {
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
      if (!p.precioMasIva) {
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
    <>
      <form onSubmit={manejoDeLaLista} className="producto-form"> {/* Aplica la clase al form */}
        <div className="inputs-container"> {/* Envuélve los inputs en un div con clase */}
          <input type="text" id="nombre" placeholder="Ingrese nombre" required />
          <input type="number" id="precio" placeholder="Precio" required />
        </div>
        <div className="button-container"> {/* Envuélve los botones en un div con clase */}
          <button type="submit">Agregar producto</button>
          <button onClick={filtrarProducto}>Filtrar</button>
          <button onClick={agregarIVA}>Agregar IVA</button>
          <button onClick={eliminarMasBarato}>Eliminar más barato</button>
          <button onClick={ordenarAlfabeticamente}>Ordenar</button>
        </div>
      </form>

      <h2>Productos Agregados</h2>
      <ul id="lista-productos"></ul> {/* El id para la lista */}
    </>
  );
}

export default Producto;
