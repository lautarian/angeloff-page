import "./css/ReservarCita.css";

import {BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
    Link,
    Oulet
   } from 'react-router-dom'



export const ReservarCita = () =>{
    return (
        <div>
            <nav class="navbar sticky-top navbar-light navbar-expand-lg"> 
         
                    
                <Link class="navbar-brand ml-3 mt-2 " to="/Home">
                    <img  src=".\img\LOGO3.png" width="200" alt="Logo Domus"  id="img-logo"/>
                </Link>
                <button class="navbar-toggler btn-menu ml-auto" type="button" data-bs-toggle="collapse" 
                data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" 
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <div class="navbar-nav ml-auto align-items-center">
                        
                            <Link className="nav-link text-dark ml-3 mr-3 font-weight-bold" to="/PropiedadesCatalogo">Propiedades</Link>
                            <Link className="nav-link text-dark ml-3 mr-3 font-weight-bold" to="/ReservarCita">Ofrece tu propiedad</Link>
                            <Link className="nav-link text-dark ml-3 mr-3 font-weight-bold" to="/ReservarCita">Contactanos</Link>
                            <Link className="nav-link text-dark ml-3 mr-3 font-weight-bold" to="/conocenos">Nosotros</Link>
                            <Link className="btn  text-uppercase font-weight-bold btn-outline-info  btn-lg" to="/Login">soy empleado</Link>
 
                    </div>
                </div>
           
        </nav>
        <div class="titulos">
            <h1 id="cat_prop"><b>Contactanos</b></h1><hr class="solid"/>        
        </div>
        



        <section class="ftco-section">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-md-12">
                        <div class="wrapper">
                            <div class="row no-gutters">
                                <div class="col-lg-8 col-md-7 order-md-last d-flex align-items-stretch">
                                    <div class="contact-wrap w-100 p-md-5 p-4">
                                        <h3 class="mb-4">Reservar Cita</h3>
                                        <div id="form-message-warning" class="mb-4"></div> 
                                  <div id="form-message-success" class="mb-4">
                                Reserva una cita y uno de nuestros agentes se pondra en contacto contigo.
                                  </div>
                                        <form method="POST" id="contactForm" name="contactForm" class="contactForm">
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <div class="form-group">
                                                        <label class="label" for="name"><b>Apellido y Nombre</b></label>
                                                        <input type="text" class="form-control" name="name" id="name" placeholder="Name"/>
                                                    </div>
                                                </div>
                                                <div class="col-md-6"> 
                                                    <div class="form-group">
                                                        <label class="label" for="email"><b>Email</b></label>
                                                        <input type="email" class="form-control" name="email" id="email" placeholder="Email"/>
                                                    </div>
                                                </div>
                                                <div class="col-md-12">
                                                    <div class="form-group">
                                                        <label class="label" for="subject"><b>Asunto</b></label>
                                                        <input type="text" class="form-control" name="subject" id="subject" placeholder="Subject"/>
                                                    </div>
                                                </div>
                                                <div class="col-md-12">
                                                    <div class="form-group">
                                                        <label class="label" for="#"><b>Mensaje</b></label>
                                                        <div id="form-message-success" class="mb-4">
                                                            Si ya tenes vista una de nuestras propiedades dejanos su ID o su Dirección.
                                                        </div>
                                                        <textarea name="message" class="form-control" id="message" cols="30" rows="4" placeholder="Escribe tu mensaje aquí"></textarea>
                                                    </div>
                                                </div>
                                                <div class="col-md-12">
                                                    <div class="form-group">
                                                        <input type="submit" value="Enviar Mensaje" class="btn btn-info"/>
                                                        <div class="submitting"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-5 d-flex align-items-stretch">
                                    <div class="info-wrap  w-100 p-md-5 p-4">
                                        <h3>Ponte en Contacto con Nosotros</h3><br/><br/>
                                <div class="dbox w-100 d-flex align-items-start">
                                    <div class="icon d-flex align-items-center justify-content-center">
                                        <span class="fa fa-map-marker"></span>
                                    </div>
                                    <div class="text pl-3">
                                    <p><span>Direccion:</span> French 450, Resistencia, Chaco</p>
                                  </div>
                              </div>
                                <div class="dbox w-100 d-flex align-items-center">
                                    <div class="icon d-flex align-items-center justify-content-center">
                                        <span class="fa fa-phone"></span>
                                    </div>
                                    <div class="text pl-3">
                                    <p><span>Teléfono:</span> 362 4 0303456</p>
                                  </div>
                              </div>
                                <div class="dbox w-100 d-flex align-items-center">
                                    <div class="icon d-flex align-items-center justify-content-center">
                                        <span class="fa fa-paper-plane"></span>
                                    </div>
                                    <div class="text pl-3">
                                    <p><span>Email:</span> info@inmobiliariadomus.com</p>
                                  </div>
                              </div>
                                <div class="dbox w-100 d-flex align-items-center">
                                    <div class="icon d-flex align-items-center justify-content-center">
                                        <span class="fa fa-globe"></span>
                                    </div>
                                    <div class="text pl-3">
                                    <p><span>Horario de Atención</span> Lunes a Viernes  8 a 18hs</p>
                                  </div>
                              </div>
                          </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        </div>
    )
}