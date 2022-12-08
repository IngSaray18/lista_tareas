import "./App.css";
import React, { useState } from "react";

import Header from "./components/header";
import Tareas from "./components/tareas";
import ListaTareas from "./components/listaTareas";
import { useEffect } from "react";

function App() {

  // configuramos el mostrar o no las tareas completadas 
 let configCompletadas = '';
 if ( localStorage.getItem('mostrarcompletadas')=== null){
  configCompletadas = true
 } else {
  configCompletadas = localStorage.getItem('mostrarcompletadas') === 'true'
 }

  const tareasGuardadas = localStorage.getItem("tareas")
    ? JSON.parse(localStorage.getItem("tareas"))
    : [];
  const [tareas, cambiarTareas] = useState(tareasGuardadas);
  useEffect(() => {
    localStorage.setItem("tareas", JSON.stringify(tareas));
  }, [tareas]);

  const [mostrarCompletadas, cambiarMostrarCompletadas] = useState(configCompletadas);

  useEffect(() => {
    localStorage.setItem("mostrarCompletadas", mostrarCompletadas.toString());
  }, [mostrarCompletadas]);

  return (
    <div className="contenedor">
      <Header
        mostrarCompletadas={mostrarCompletadas}
        cambiarMostrarCompletadas={cambiarMostrarCompletadas}
      />{" "}
      {/* componente header */}
      <Tareas tareas={tareas} cambiarTareas={cambiarTareas} />{" "}
      {/* Componente agregar tarea */}
      <ListaTareas
        tareas={tareas}
        cambiarTareas={cambiarTareas}
        mostrarCompletadas={mostrarCompletadas}
      />{" "}
      {/* lista de tareas*/}
    </div>
  );
}

export default App;
