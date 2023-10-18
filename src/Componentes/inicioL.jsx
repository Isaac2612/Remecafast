import React from 'react';
import { Link } from 'react-router-dom';
import '../Estilos/Estilos.css';
import Remedios from "../Imagenes/Remedios.png";
import {FcLike} from "react-icons/fc";
import { BsFillSendFill } from "react-icons/bs";
import { AiOutlineStar } from "react-icons/ai";

function InicioL() {
  return (
    <div className="row" style={{backgroundColor:"#DA8EBB"}}>
      <div className="container" style = {{ backgroundColor: '#EBAC9F'}}>
        <div className='p-3'>
          <h1 className="encabezado text fw-bold">Obtener descuento por usar app</h1>
          <div class="card">
            <div class="card-header encabezado">
              <small>Avance</small>
            </div>
            <div class="card-body">
              <h5 class="card-title encabezado">Descuento</h5>
              <div class="progress" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                <div class="progress-bar progress-bar-striped progress-bar-animated" style={{width: "30%"}}>
                  75%
                </div>
              </div>
              <p class="card-text pt-2">¡Llega al 100% para ganar tu descuento!</p>
              <hr/>
              <Link to="#" class="btn btn-primary">Reclama cuando este en 100%</Link>
            </div>
          </div>
        </div>
      </div>

      {/* codigo actual */}
      <div className="container mx-auto text-center">
        <h2 className="pt-3">Remedios Destacados</h2>
      </div>
      
      <div className="container px-5">
        <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              
              <div class="card">
                <img src={Remedios} class="card-img-top" alt="..."/>
                <div class="card-body">
                  <h5 class="card-title">Te de manzanilla</h5>
                  <p class="card-text">se aconseja beber después de cada comida para facilitar la digestión. Es posible tomar una taza de té de manzanilla. Para prepararla hay que poner 10 gramos de hojas de manzanilla en medio litro de agua, se cocina durante 10 minutos y se sirve.</p>
                  <div className="row pb-3">
                    <div className="col px-5"><p><small><FcLike/></small></p></div>
                    <div className="col"><p><small><AiOutlineStar/></small></p></div>
                    <div className="col"><p><small><BsFillSendFill/></small></p></div>
                  </div>
                  <Link href="#" class="btn btn-primary">Go somewhere</Link>
                </div>
              </div>
            
            </div>
            <div class="carousel-item">
              <div class="card">
                <img src={Remedios} class="card-img-top" alt="..."/>
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <div className="row pb-3">
                    <div className="col"><p><small>120 horas</small></p></div>
                    <div className="col"><p><small>3 modulos</small></p></div>
                    <div className="col"><p><small>100% online</small></p></div>
                  </div>
                  <Link href="#" class="btn btn-primary">Go somewhere</Link>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="card">
                <img src={Remedios} class="card-img-top" alt="..."/>
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <div className="row pb-3">
                    <div className="col"><p><small>120 horas</small></p></div>
                    <div className="col"><p><small>3 modulos</small></p></div>
                    <div className="col"><p><small>100% online</small></p></div>
                  </div>
                  <Link href="#" class="btn btn-primary">Go somewhere</Link>
                </div>
              </div>
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>        
      </div>
      
    </div>
  );
}

export default InicioL;