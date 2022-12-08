import React, {useState} from "react";
import { v4 as uuidv4 } from 'uuid';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare } from "@fortawesome/free-solid-svg-icons";

const Tareas = ({tareas, cambiarTareas}) => {

  // usamos el estado para agregar una tarea nueva
const [inputTarea, cambiarInputTareas] = useState('');

// funcion para obtener la info del input  
const handleInput = (e) =>{
cambiarInputTareas(e.target.value);
}
// funcion para agregar al arreglo tareas el valor del input 
    const handleSubmit = (e) =>{
        e.preventDefault();

        cambiarTareas(
            [
                ...tareas,
                {
                    id:uuidv4(),
                    texto: inputTarea,
                    completada: false
                }
            ]
        );
        cambiarInputTareas("")
    }

  return (
    <form action="" className="formulario-tareas" onSubmit={handleSubmit} >
      <label htmlFor=""></label>
      <input
        type="text"
        className="formulario-tareas__input"
        placeholder="Escribe una tarea"
        value={inputTarea}
        onChange={(e) => handleInput(e)}
      />
      <button type="submit" className="formulario-tareas__btn">
        <FontAwesomeIcon
          
          icon={faPlusSquare}
          className="formulario-tareas__icono-btn"
        />
      </button>
    </form>
  );
};

export default Tareas;
