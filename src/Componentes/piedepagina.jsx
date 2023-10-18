import React from "react";
import Remecafast from "../Imagenes/Remecafast.png";
import { PiCopyrightFill } from "react-icons/pi";

function Piedepagina(){
  return(

    <div className="container-fluid"style={{backgroundColor:"#DA8EBB"}}>
      <div className="row mx-auto">
        <div className="text-center pt-5 mx-auto">
           <h2 className="encabezado">Remecafast</h2>
           <img src={Remecafast} alt="pdg" width="100"/>
           <h5 className="encabezado px-5">Intala la aplicacion movil para poder tener remecafast a la mano.</h5>
           <p className="px-3"><small>Ven ahora</small></p>
           <section>
            <button to="" className="btn btn-success">Instalar Remecafast</button>
           </section>
          <div id="copyright">
             <hr/>
             <p><small>Remecafast <PiCopyrightFill/></small></p>
          </div>
        </div>
      </div>
    </div>
  );
  
}

export default Piedepagina;