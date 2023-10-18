import React from "react";
import { Link } from "react-router-dom";
import Remecafast from  "../Imagenes/Remecafast.png";

function Init() {
  return (
    <div className="container"  style={{backgroundColor:"#DA8EBB"}}>
      
      <div className="row">
        
        <img src={Remecafast} alt="Remedios" className="mx-auto" style={{maxWidth:"500px"}}/>

        <div className="container" >
          <div className="mx-auto">
            <div class="card" style={{backgroundColor:"#E5B9E5"}}>
              <div class="card-header">
                Registrate
              </div>
            <div class="card-body">

              <form action="/HomeL" method="get">
               <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Correo electronico</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" class="form-text">Puedes usar Gmail,Hotmail,etc.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Contraseña</label>
    <input type="password" class="form-control" id="exampleInputPassword1"/>
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Introduce tu contraseña </label>
  </div>
  <button type="submit" class="btn btn-primary">Registrarme</button>
              
              </form>
          </div>
        </div>
      </div>
    </div>
</div>
    </div>  
    );
}

export default Init;