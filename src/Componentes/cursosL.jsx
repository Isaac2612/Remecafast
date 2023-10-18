import React from "react";
import { Link } from 'react-router-dom';

function CursosL() {
  return (
    <div className="row">
      <div className="container" style={{ backgroundColor: '#EBAC9F' }}>
        <div className='p-3'>
          <h1 className="encabezado text fw-bold">Idiomas</h1>
          <div className="card">
            <div className="card-header encabezado">
              <small>Avance</small>
            </div>
            <div className="card-body">
              <h5 className="card-title encabezado">Tu Avance</h5>
              <div className="progress" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                <div className="progress-bar progress-bar-striped progress-bar-animated" style={{ width: "30%" }}>
                  30%
                </div>
              </div>
              <p className="card-text pt-2">Acaba este curso para obtener un titulo en Idiomas</p>
              <hr />
              <Link to="#" className="btn btn-primary">Continuar Curso</Link>
            </div>
          </div>
        </div>
      </div>
       <div className="container" style={{ backgroundColor: '#EBAC9F' }}>
        <div className='p-3'>
          <h1 className="encabezado text fw-bold">Matematicas</h1>
          <div className="card">
            <div className="card-header encabezado">
              <small>Avance</small>
            </div>
            <div className="card-body">
              <h5 className="card-title encabezado">Tu Avance</h5>
              <div className="progress" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                <div className="progress-bar progress-bar-striped progress-bar-animated" style={{ width: "45%" }}>
                  45%
                </div>
              </div>
              <p className="card-text pt-2">Acaba este curso para obtener tu titulo en Matematicas</p>
              <hr />
              <Link to="#" className="btn btn-primary">Continuar Curso</Link>
            </div>
          </div>
        </div>
      </div>
       <div className="container" style={{ backgroundColor: '#EBAC9F' }}>
        <div className='p-3'>
          <h1 className="encabezado text fw-bold">Profesional en deportes</h1>
          <div className="card">
            <div className="card-header encabezado">
              <small>Avance</small>
            </div>
            <div className="card-body">
              <h5 className="card-title encabezado">Tu avance</h5>
              <div className="progress" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                <div className="progress-bar progress-bar-striped progress-bar-animated" style={{ width: "89%" }}>
                  89%
                </div>
              </div>
              <p className="card-text pt-2">Acaba este curso para obtener tu titulo en Profesional en deportes</p>
              <hr />
              <Link to="#" className="btn btn-primary">Continuar Curso</Link>
            </div>
          </div>
        </div>
      </div>
       <div className="container" style={{ backgroundColor: '#EBAC9F' }}>
        <div className='p-3'>
          <h1 className="encabezado text fw-bold">Ingeniero Mecatronica</h1>
          <div className="card">
            <div className="card-header encabezado">
              <small>Avance</small>
            </div>
            <div className="card-body">
              <h5 className="card-title encabezado">Tu avance</h5>
              <div className="progress" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                <div className="progress-bar progress-bar-striped progress-bar-animated" style={{ width: "77%" }}>
                  77%
                </div>
              </div>
              <p className="card-text pt-2">Acaba este curso para obtener tu titulo de Ingenieria Mecatronica</p>
              <hr />
              <Link to="#" className="btn btn-primary">Continuar Curso</Link>
            </div>
          </div>
        </div>
      </div>
       <div className="container" style={{ backgroundColor: '#EBAC9F' }}>
        <div className='p-3'>
          <h1 className="encabezado text fw-bold">Medicina</h1>
          <div className="card">
            <div className="card-header encabezado">
              <small>Avance</small>
            </div>
            <div className="card-body">
              <h5 className="card-title encabezado">Tu avance</h5>
              <div className="progress" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                <div className="progress-bar progress-bar-striped progress-bar-animated" style={{ width: "99%" }}>
                  99%
                </div>
              </div>
              <p className="card-text pt-2">Acaba este curso para obtener tu titulo en medicina </p>
              <hr />
              <Link to="#" className="btn btn-primary">Continuar Curso</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    


    );
  }

export default CursosL;