import React from "react";
import { Link } from "react-router-dom";
import Remecafast from  "../Imagenes/Remecafast.png";

function Portada() {
  return (
    <div className="container"  style={{backgroundColor:"#DA8EBB"}}>
      
      <div className="row">
        <img src={Remecafast} alt="Remedios" className="mx-auto" style={{maxWidth:"500px"}}/>  
        <div className="mx-auto" >
          <p className="text-center">Registrate para poder acceder a informacion de los remedios</p>
        </div>

         <Link to="/Iniciar">
          <div className="d-grid gap-2 mx-auto pb-1">
            <button className="btn btn-primary" type="button">Iniciar Sesion</button>
          </div>
        </Link>

        <Link to="/Login">
          <div className="d-grid gap-2 mx-auto pb-1">
            <button className="btn btn-primary" type="button">Registrarse</button>
          </div>
        </Link>
        
      </div>
      
    </div>
  );
}

export default Portada;