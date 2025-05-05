import React, { useState } from 'react'; // Asegúrate de que la ruta sea correcta
import '../../styles/Tarea.css'; // Asegúrate de que la ruta sea correcta

function Tarea() {
    
    const [tareas, setTareas] = useState([
      
        { texto: 'Crear proyecto', realizada: false },
        { texto: 'Instalar dependencias', realizada: false },
        { texto: 'Crear componentes', realizada: false },
        { texto: 'Crear estilos', realizada: false },
        
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
        <div className="textoo">
             <h2 className='Lista' >Lista de tareas</h2>

            <input
                type="text"
                value={nuevaTarea}
                onChange={(e) => setNuevaTarea(e.target.value)}
                placeholder="Nueva tarea"
            />
            <button className= "Boton" onClick={agregarTarea}>Agregar</button>

            <ul>
                {tareas.map((tarea, index) => (
                  <li key={index}>
                        <span style={{ textDecoration: tarea.realizada ? 'line-through' : 'none' }}>
                            {tarea.texto}
                        </span>
                        {' '}
                        <button  className="B1" onClick={() => marcarRealizada(index)}> Realizada </button>
                        <button className="B2" onClick={() => eliminarTarea(index)}> Eliminar </button>
                   </li>
                ))}
            </ul>
        </div>

    );
}

export default Tarea;
