import "./css/nuestroteam.css";


import {BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
    Link,
    Oulet
   } from 'react-router-dom'


export const Nosotros = () => {
    return(
        <div>
            <nav class="navbar sticky-top navbar-light navbar-expand-lg"> 
                                
                <Link class="navbar-brand ml-3 mt-2 " to="/Home">
                    <img  src=".\img\LOGO3.png" width="200" alt="Logo Domus"  id="img-logo"/>
                </Link>
                <button class="navbar-toggler btn-menu ml-auto" type="button" data-toggle="collapse" 
                data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" 
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
            <h1 id="cat_prop"><b>Nuestro Equipo</b></h1><hr class="solid"/>
            <h2 id="sub_prop">Tu hogar , nuestro objetivo</h2>
        </div>
        <br/>




        <section class="our-webcoderskull padding-lg">

       
            <div class=" container-fluid d-flex justify-content-center">
                

                <ul class="row">
                    <li class="col-12 col-md-6 col-lg-3">
                        <div class="cnt-block equal-hight" style={{height: "349px"}}>
                        <figure><img src="./img/cesar.png" class="img-responsive" alt=""/></figure>
                        <h3><a href="http://www.webcoderskull.com/">Cesar Lautaro Angeloff</a></h3>
                        <p>Jefe de Administracion</p>
                        <ul class="follow-us clearfix">
                            <li><a href="#"><i class="fab fa-facebook-f fa-2x" aria-hidden="true"></i></a></li>
                            <li><a href="#"><i class="fab fa-twitter fa-2x" aria-hidden="true"></i></a></li>
                            <li><a href="#"><i class="fab fa-linkedin-in fa-2x" aria-hidden="true"></i></a></li>
                        </ul>
                        </div>
                    </li>
                    <li class="col-12 col-md-6 col-lg-3">
                        <div class="cnt-block equal-hight" style={{height: "349px"}}>
                        <figure><img src="./img/juanlucas.png" class="img-responsive" alt=""/></figure>
                        <h3><a href="#">Juan Lucas Biain </a></h3>
                        <p>Agente Inmobiliario</p>
                        <ul class="follow-us clearfix">
                            <li><a href="#"><i class="fab fa-facebook-f fa-2x" aria-hidden="true"></i></a></li>
                            <li><a href="#"><i class="fab fa-twitter fa-2x" aria-hidden="true"></i></a></li>
                            <li><a href="#"><i class="fab fa-linkedin-in fa-2x" aria-hidden="true"></i></a></li>
                        </ul>
                        </div>
                    </li>
                    <li class="col-12 col-md-6 col-lg-3">
                        <div class="cnt-block equal-hight" style={{height: "349px"}}>
                        <figure><img src="./img/guille.png" class="img-responsive" alt=""/></figure>
                        <h3><a href="http://www.webcoderskull.com/">Guillermo Falcón </a></h3>
                        <p>Gerente General</p>
                        <ul class="follow-us clearfix">
                            <li><a href="#"><i class="fab fa-facebook-f fa-2x" aria-hidden="true"></i></a></li>
                            <li><a href="#"><i class="fab fa-twitter fa-2x" aria-hidden="true"></i></a></li>
                            <li><a href="#"><i class="fab fa-linkedin-in fa-2x" aria-hidden="true"></i></a></li>
                        </ul>
                        </div>
                    </li>
                    <li class="col-12 col-md-6 col-lg-3">
                        <div class="cnt-block equal-hight" style={{height: "349px"}}>
                        <figure><img src="./img/amin.png" class="img-responsive" alt=""/></figure>
                        <h3><a href="http://www.webcoderskull.com/">Sebastian Amin Fariña</a></h3>
                        <p>Jefe de Comercializacion</p>
                        <ul class="follow-us clearfix">
                            <li><a href="#"><i class="fab fa-facebook-f fa-2x" aria-hidden="true"></i></a></li>
                            <li><a href="#"><i class="fab fa-twitter fa-2x" aria-hidden="true"></i></a></li>
                            <li><a href="#"><i class="fab fa-linkedin-in fa-2x" aria-hidden="true"></i></a></li>
                        </ul>
                        </div>
                    </li>
                    <li class="col-12 col-md-6 col-lg-3">
                        <div class="cnt-block equal-hight" style={{height: "349px"}}>
                        <figure><img src="./img/yamil.png" class="img-responsive" alt=""/></figure>
                        <h3><a href="http://www.webcoderskull.com/">Edgar Yamil Luque Acosta </a></h3>
                        <p>Jefe de Marketing</p>
                        <ul class="follow-us clearfix">
                            <li><a href="#"><i class="fab fa-facebook-f fa-2x" aria-hidden="true"></i></a></li>
                            <li><a href="#"><i class="fab fa-twitter fa-2x" aria-hidden="true"></i></a></li>
                            <li><a href="#"><i class="fab fa-linkedin-in fa-2x" aria-hidden="true"></i></a></li>
                        </ul>
                        </div>
                    </li>
                    <li class="col-12 col-md-6 col-lg-3">
                        <div class="cnt-block equal-hight" style={{height: "349px"}}>
                        <figure><img src="./img/guido.png" class="img-responsive" alt=""/></figure>
                        <h3><a href="http://www.webcoderskull.com/">Guido Leonardo Stangaferro </a></h3>
                        <p>Administrador del Sitio</p>
                        <ul class="follow-us clearfix">
                            <li><a href="#"><i class="fab fa-facebook-f fa-2x" aria-hidden="true"></i></a></li>
                            <li><a href="#"><i class="fab fa-twitter fa-2x" aria-hidden="true"></i></a></li>
                            <li><a href="#"><i class="fab fa-linkedin-in fa-2x" aria-hidden="true"></i></a></li>
                        </ul>
                        </div>
                    </li>
                    <li class="col-12 col-md-6 col-lg-3">
                        <div class="cnt-block equal-hight" style={{height: "349px"}}>
                        <figure><img src="./img/rodrigo.png" class="img-responsive" alt=""/></figure>
                        <h3><a href="http://www.webcoderskull.com/">Rodrigo Zapata </a></h3>
                        <p>Agente Inmobiliario</p>
                        <ul class="follow-us clearfix">
                            <li><a href="#"><i class="fab fa-facebook-f fa-2x" aria-hidden="true"></i></a></li>
                            <li><a href="#"><i class="fab fa-twitter fa-2x" aria-hidden="true"></i></a></li>
                            <li><a href="#"><i class="fab fa-linkedin-in fa-2x" aria-hidden="true"></i></a></li>
                        </ul>
                        </div>
                    </li>
                </ul>

            
                

                

            </div>
        </section>


        <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
            
        
        <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.min.js" integrity="sha384-lpyLfhYuitXl2zRZ5Bn2fqnhNAKOAaM/0Kr9laMspuaMiZfGmfwRNFh8HlMy49eQ" crossorigin="anonymous"></script>

        </div>
    )
} 
