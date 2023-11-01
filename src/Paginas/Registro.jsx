import React from "react";
import Menu from "../Componentes/Menu";
import Singin from '../Componentes/singin';
import FormularioRegisro from "../Componentes/FormularioRegistro";

function Registro(){
  return (
    <div className="Registro">
      <Menu/>
      <FormularioRegisro/>
    </div>
  );
}

export default Registro;