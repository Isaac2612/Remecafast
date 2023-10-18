import React from "react";
import { RiGlobalFill } from 'react-icons/ri';
import { BsGithub } from 'react-icons/bs';
import { IoLogoTwitter } from 'react-icons/io';
import { BsInstagram }  from 'react-icons/bs';
import { BsFacebook } from 'react-icons/bs';

function Profile(){

  return(
    <section style={{backgroundColor:"#eee"}}>
      <div className="container py-4">
        <div className="row">
          <div className="col-lg-4">
            <div className="card mb-4">
              <div className="card-body text-center">
                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp" alt="avatar" className="rounded-circle img-fluid" style={{ with:"150px" }}/>
                <h5 className="my-3">Isaac Montoya</h5>
                <p className="text-muted mb-1">Somos lindos</p>
                <p className="text-muted mb-4">El Bolo-Medellin</p>
                <div className="d-flex justify-content-center mb-3 ">
                  <button type="button" className="btn btn-primary">Editar perfil</button>
                </div>           
              </div>
            </div>
            <div className="card mb-4 mb-lg-0">
              <div className="card-body p-0">
                <ul className="list-group list-group-flush rounded-3">
                  <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                    <RiGlobalFill/>
                    <p className="mb-0">@97_montoya</p>
                  </li>
                     <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                    <BsGithub/>
                    <p className="mb-0">Pagina Personal</p>
                  </li>
                     <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                    <IoLogoTwitter/>
                    <p className="mb-0">Twitter</p>
                  </li>
                     <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                    <BsInstagram/>
                    <p className="mb-0">Instagram</p>
                  </li>
                     <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                    <BsFacebook/>
                    <p className="mb-0">Facebook</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="card mb-4">
              <div className="card-body">

                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Nombre Completo</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">Isaac M V</p>
                  </div>
                </div>
              <hr/>

                <div className="row">
                  <div className="col-sm-3">
                    <p className= "mb-0">Email</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-o">Isaac@gmail.com</p>
                  </div>
                </div>
                <hr/>

                <div className="row">
                  <div className="col-sm-3">
                    <p className= "mb-0">Direccion</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-o">Calle 43 c sur #88-01</p>
                  </div>
                </div>
                <hr/>

                <div className="row">
                  <div className="col-sm-3">
                    <p className= "mb-0">Numero</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-o">3053291733</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="cold-md-6">
                <div className="card mb-4 mb-mb-0">
                  <div className="card-body">
                    <p className="mb-4"><span className="texte-primary font-italic me-1">Habilidades</span>Proyecto PPI</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
  
}

export default Profile;