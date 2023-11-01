import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div className="header"style={{backgroundColor:"#DA8EBB"}}>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid" style={{backgroundColor:"#E5B9E5"}}>
          <Link className="nav-link active" to="/">
            Remecafast
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link active" aria-current="page">
                 Inicio
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/link" className="nav-link active" to="Registro">
                 Registro
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/Cursos">
                 Cursos
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-disabled="true" to="/Iniciar">
                  Iniciar Sesion
                </Link>
              </li>
            </ul>
           
          </div>
        </div>
      </nav>
      <div className="container">
       <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-outline-success" type="submit">
                <font color="black">Search</font>
              </button>
            </form>
      </div>
      <div className="p-3">
        <div class="card">
  <div class="card-header" style={{backgroundColor:"#D2D1D1"}}>
    Bienvenido
  </div>
  <div class="card-body">
    <h5 class="card-title">Remecafast</h5>
    <p class="card-text"><strong>Esta pagina trata de una pagina de remedios caseros en donde puedes ver remedios con productos que puedes encontrar en tu hogar para economizar gastos para remedios</strong> </p>
  </div>
</div>
      </div>
     </div>
  );
};

export default Menu;
