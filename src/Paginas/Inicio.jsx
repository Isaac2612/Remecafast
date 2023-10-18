import React from "react";
import Menu from "../Componentes/Menu";
import Portada from "../Componentes/Portada";


function Inicio(){
  return (
    <div className="container">
      <Menu/>
      <Portada/>
    </div>
  );
}

export default Inicio;