import React, { useState } from 'react';

function Tarea() {
    const [tareas, setTareas] = useState([
        { texto: 'Crear repositorio', realizada: false },
        { texto: 'Leer Agregar colaboradores', realizada: false },
        { texto: 'Dividir puntos', realizada: false },
        { texto: 'Integrar los puntos al main', realizada: false }
    ]);
    const [nuevaTarea, setNuevaTarea] = useState('');

    // Agregar nueva tarea
    const agregarTarea = () => {
        if (nuevaTarea.trim() !== '') {
            setTareas([...tareas, { texto: nuevaTarea, realizada: false }]);
            setNuevaTarea('');
        }
    };

    // Marcar como realizada
    const marcarRealizada = (index) => {
        const nuevasTareas = [...tareas];
        nuevasTareas[index].realizada = !nuevasTareas[index].realizada;
        setTareas(nuevasTareas);
    };

    // Eliminar tarea
    const eliminarTarea = (index) => {
        const nuevasTareas = tareas.filter((_, i) => i !== index);
        setTareas(nuevasTareas);
    };

    return (
        <div>
            <h2>Lista de tareas</h2>

            <input
                type="text"
                value={nuevaTarea}
                onChange={(e) => setNuevaTarea(e.target.value)}
                placeholder="Nueva tarea"
            />
            <button onClick={agregarTarea}>Agregar</button>

            <ul>
                {tareas.map((tarea, index) => (
                    <li key={index}>
                        <span style={{ textDecoration: tarea.realizada ? 'line-through' : 'none' }}>
                            {tarea.texto}
                        </span>
                        {' '}
                        <button onClick={() => marcarRealizada(index)}> Realizada </button>
                        <button onClick={() => eliminarTarea(index)}> Eliminar </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Tarea;
