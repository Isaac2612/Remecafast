import React from "react";
import Menu from "../Componentes/Menu";
import IniciarSesion from "../Componentes/iniciarsesion";



function Iniciar(){
  return (
    <div className="container">
      <Menu/>
      <IniciarSesion/>
    </div>
  );
}

export default Iniciar;