import "./App.css";
import React, { useState } from "react";

import Header from "./components/header";
import Tareas from "./components/tareas";
import ListaTareas from "./components/listaTareas";
import { useEffect } from "react";

function App() {


  // usamos el local storage para guardar las tareas
  const tareasGuardadas = localStorage.getItem("tareas")
    ? JSON.parse(localStorage.getItem("tareas"))
    : [];

    // usamos el stado para mostrar las tareas
  const [tareas, cambiarTareas] = useState(tareasGuardadas);
  useEffect(() => {
    localStorage.setItem("tareas", JSON.stringify(tareas));
  }, [tareas]);



  // configuramos el mostrar o no las tareas completadas 
  let configCompletadas = '';
  if ( localStorage.getItem('mostrarCompletadas')=== null){
   configCompletadas = true;
  } else {
   configCompletadas = localStorage.getItem('mostrarCompletadas') === 'true'
  }
   //  usamos el  estado para mostrar o no las tareas completadas
  const [mostrarCompletadas, cambiarMostrarCompletadas] = useState(configCompletadas);

  // este  codigo se ejecuta cada que modificamos el estado de mostrarCompletadas
  useEffect(() => {
    localStorage.setItem("mostrarCompletadas", mostrarCompletadas.toString());
  }, [mostrarCompletadas]);



  return (
    <div className="contenedor">
      <Header 
      //props del header
        mostrarCompletadas={mostrarCompletadas}
        cambiarMostrarCompletadas={cambiarMostrarCompletadas}
      />
      
      <Tareas 
      tareas={tareas} 
      cambiarTareas={cambiarTareas}/>
    
      <ListaTareas
        tareas={tareas}
        cambiarTareas={cambiarTareas}
        mostrarCompletadas={mostrarCompletadas}
      />
    </div>
  );
}

export default App;
