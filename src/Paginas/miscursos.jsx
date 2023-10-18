import React from "react";
import CursosL from "../Componentes/cursosL";
import MenuL from "../Componentes/menuL";


function Miscursos(){

  return(

  

    <div className="miscursos">
      <MenuL/>
      <h1 className="text-center">Tus Cursos</h1>
      <CursosL/>
    </div>
    
  );
}

export default Miscursos;