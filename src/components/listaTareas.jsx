import React from 'react'

import Tarea from './tarea';
const ListaTareas = ({tareas, cambiarTareas, mostrarCompletadas}) => {

    const toggleCompletada = (id) =>{               // funcion para marcar o desmarcar como completada
       cambiarTareas(tareas.map( (tarea) => {       // recorremos el arreglo de tareas
        if (tarea.id === id){                       // comparamos el id de las tareas con el que queremos modificar
            return {...tarea, completada: !tarea.completada }   // si coincide retornamos el mismo arreglo pero le modificamos el parametro 

        }
        return tarea
       } ));
    }
     
    const editarTarea = (id , nuevaTarea) =>{
        cambiarTareas(tareas.map((tarea) =>{
            if (tarea.id === id){
                return {...tarea , texto : nuevaTarea}
            }

            return tarea;
        }));
    }

    const borrarTarea = (id) =>{
        cambiarTareas(tareas.filter((tarea) =>{
            if (tarea.id !== id){
                return tarea
            }

            return;
        })); 
    }



    return ( 
        <ul className='lista-tareas'>
            { tareas.length > 0 ?     tareas.map((tarea)=>{
                if (mostrarCompletadas){
                return  <Tarea 
                key={tarea.id} 
                tarea={tarea}
                toggleCompletada ={toggleCompletada}
                editarTarea = {editarTarea}
                borrarTarea = {borrarTarea}
                />}
                else if (!tarea.completada){
                    return  <Tarea 
                    key={tarea.id} 
                    tarea={tarea}
                    toggleCompletada ={toggleCompletada}
                    editarTarea = {editarTarea}
                    borrarTarea = {borrarTarea}
                    />  
                }
                    return
            })
        : <h1>No Hay Tareas</h1>
        }

        </ul>
     );
}
 
export default ListaTareas;