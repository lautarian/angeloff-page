import "./css/index.css";


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

            <nav className="navbar sticky-top navbar-light navbar-expand-lg"> 
            
                        
                <Link className="navbar-brand ml-3 mt-2 " to="/Comercializar">
                    <img  src=".\img\LOGO3.png" width="200" alt="Logo Domus"  id="img-logo"/>
                </Link>
                <button className="navbar-toggler btn-menu ml-auto" type="button" data-bs-toggle="collapse" 
                data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" 
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <div className="navbar-nav ml-auto align-items-center">
                        
                        <Link className="nav-link text-dark ml-3 mr-3 font-weight-bold" to="/Reportes">Generar Reportes</Link>
                        <Link className="nav-link text-dark ml-3 mr-3 font-weight-bold" to="/App">Archivo de Propiedades</Link>
                        <Link className="nav-link text-dark ml-3 mr-3 font-weight-bold" to="#">Archivo de Clientes</Link>
                        <Link className="nav-link text-dark ml-3 mr-3 font-weight-bold" to="/Home">Cerrar Sesion</Link>


                        
                    </div>
                </div>
    
            </nav>
            <div className="titulos">
                <h1 className=" text-white" id="cat_prop" style={{fontSize:"2.5rem"}} ><b>Portal Comercialización</b></h1>

                <hr className="solid"/>
                <h2 className=" text-white" id="sub_prop">Operaciones Disponibles</h2>
            </div>




            <div className="cartas text-center">
            
                <div className="card col-lg-3 col-sm-6 mr-4 ml-4 cardsita" style={{width: "18rem", color: "white"}}>
                    <Link to="/Reportes" className="clase_a">
                        <img src="./img/reportes.jpg" className="card-img-top " alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">GENERAR REPORTES </h5>
                            <p className="card-text">Generar reportes de ventas, alquileres, clientes, propiedades.</p>
                        </div>
                    </Link>
                </div>

                <div className="card col-lg-3 col-sm-6 mr-4 ml-4 cardsita" style={{width: "18rem"}}>
                    <Link to="/App" className="clase_a">
                        <img src="./img/catalogo.jpg" className="card-img-top " alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">CONSULTAR ARCHIVO DE PROPIEDADES</h5>
                            <p className="card-text">Consultar el historico de las distintas propiedades.</p>
                        </div>
                    </Link>
                </div>
                <div className="card col-lg-3 col-sm-6 mr-4 ml-4 cardsita" style={{width: "18rem"}}>
                    <Link to="#" className="clase_a">
                        <img src="./img/archivocliente.jpg" className="card-img-top " alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">CONSULTAR ARCHIVO CLIENTES</h5>
                            <p className="card-text">Consultar el archivo de los distintas clientes.</p>
                        </div>
                    </Link>
                </div>

            </div>
            <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
                
            
            <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossorigin="anonymous"></script>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.min.js" integrity="sha384-lpyLfhYuitXl2zRZ5Bn2fqnhNAKOAaM/0Kr9laMspuaMiZfGmfwRNFh8HlMy49eQ" crossorigin="anonymous"></script>



        </div>
    );

}  