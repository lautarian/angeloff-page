import "./css/Comercializar.css"

import {BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
    Link,
    Oulet
   } from 'react-router-dom'


export const Comercializar = () =>{
    return(
        <div>

            <nav class="navbar sticky-top navbar-light navbar-expand-lg"> 
            
                        
                <Link class="navbar-brand ml-3 mt-2 " to="/Comercializar">
                    <img  src=".\img\LOGO3.png" width="200" alt="Logo Domus"  id="img-logo"/>
                </Link>
                <button class="navbar-toggler btn-menu ml-auto" type="button" data-bs-toggle="collapse" 
                data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" 
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <div class="navbar-nav ml-auto align-items-center">
                        
                        <Link class="nav-link text-dark ml-3 mr-3 font-weight-bold" to="/Reportes">Generar Reportes</Link>
                        <a class="nav-link text-dark ml-3 mr-3 font-weight-bold" href="Mov.historicos.html">Archivo de Propiedades</a>
                        <a class="nav-link text-dark ml-3 mr-3 font-weight-bold" href="Consultar-cliente.html">Archivo de Clientes</a>
                        <a class="nav-link text-dark ml-3 mr-3 font-weight-bold" href="index.html">Cerrar Sesion</a>


                        
                    </div>
                </div>
    
            </nav>
            <div class="titulos">
                <h1 id="cat_prop"><b>Portal Comercialización</b></h1><hr class="solid"/>
                <h2 id="sub_prop">Operaciones Disponibles</h2>
            </div>




            <div class="cartas text-center">
            
                <div class="card col-lg-3 col-sm-6 mr-4 ml-4" style={{width: "18rem", color: "white"}}>
                    <Link to="/Reportes" class="clase_a">
                        <img src="./img/reportes.jpg" class="card-img-top " alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">GENERAR REPORTES </h5>
                            <p class="card-text">Generar reportes de ventas, alquileres, clientes, propiedades.</p>
                        </div>
                    </Link>
                </div>

                <div class="card col-lg-3 col-sm-6 mr-4 ml-4" style={{width: "18rem"}}>
                    <a href="Mov.historicos.html" class="clase_a">
                        <img src="./img/catalogo.jpg" class="card-img-top " alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">CONSULTAR ARCHIVO DE PROPIEDADES</h5>
                            <p class="card-text">Consultar el historico de las distintas propiedades.</p>
                        </div>
                    </a>
                </div>
                <div class="card col-lg-3 col-sm-6 mr-4 ml-4" style={{width: "18rem"}}>
                    <a href="Consultar-cliente.html" class="clase_a">
                        <img src="./img/archivocliente.jpg" class="card-img-top " alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">CONSULTAR ARCHIVO CLIENTES</h5>
                            <p class="card-text">Consultar el archivo de los distintas clientes.</p>
                        </div>
                    </a>
                </div>

            </div>
            <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
                
            
            <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossorigin="anonymous"></script>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.min.js" integrity="sha384-lpyLfhYuitXl2zRZ5Bn2fqnhNAKOAaM/0Kr9laMspuaMiZfGmfwRNFh8HlMy49eQ" crossorigin="anonymous"></script>



        </div>
    );

}  