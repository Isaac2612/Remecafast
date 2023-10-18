import React from "react";
import Remedios from "../Imagenes/Remedios.png";
import { LuSchool } from "react-icons/lu";

function CursosInit() {
  return (
    <div className="container">
      <h1 className="text-center">Contenido de cursos</h1>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="col">
          <div className="card h-100">
            <img
              src={Remedios}
              className="card-img-top"
              alt="Course 1"
            />
            <div className="card-body">
              <p>
                <small>
                  <LuSchool/> LA SALLE
                </small>
              </p>
              <h5 className="card-title">Curso 1</h5>
              <p className="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img
              src={Remedios}
              className="card-img-top"
              alt="Course 2"
            />
            <div className="card-body">
              <h5 className="card-title">Curso 2</h5>
              <p className="card-text">This is a short card.</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img
              src={Remedios}
              className="card-img-top"
              alt="Course 3"
            />
            <div className="card-body">
              <h5 className="card-title">Curso 3</h5>
              <p className="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img
              src={Remedios}
              className="card-img-top"
              alt="Course 4"
            />
            <div className="card-body">
              <h5 className="card-title">Curso 4</h5>
              <p className="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CursosInit;