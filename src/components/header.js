import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const Header = ({ mostrarCompletadas, cambiarMostrarCompletadas }) => {
  const toggleMostrar = () => {
    // funcion para hacer toogle del mostrar tareas
    cambiarMostrarCompletadas(!mostrarCompletadas);
  };

  return (
    <header className="header">
      <h1 className="header-title">lista de tareas</h1>
      {mostrarCompletadas ? (
        <button
          className="header-button"
          // cada que hacemos click mmadamos llamar esta funcion:
          onClick={() => toggleMostrar()}
        >
          no mostrar tareas compledatadas
          <FontAwesomeIcon className="header-iconButton" icon={faEyeSlash} />
        </button>
      ) : (
        <button className="header-button" onClick={() => toggleMostrar()}>
          {" "}
          mostrar tareas compledatadas
          <FontAwesomeIcon className="header-iconButton" icon={faEye} />
        </button>
      )}
    </header>
  );
};

export default Header;
