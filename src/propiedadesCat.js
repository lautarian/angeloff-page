import "./css/Catalogo_clientes.css";

import {BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
    Link,
    Oulet
   } from 'react-router-dom'


export const PropiedadesCatalogo = () =>{
    return(
        <div>
            <nav className="navbar sticky-top navbar-light navbar-expand-lg"> 
          
                    
                <Link className="navbar-brand ml-3 mt-2 " to="/Home ">
                    <img  src=".\img\LOGO3.png" width="200" alt="Logo Domus"  id="img-logo"/>
                </Link>
                <button className="navbar-toggler btn-menu ml-auto" type="button" data-toggle="collapse" 
                data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" 
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <div className="navbar-nav ml-auto align-items-center">
                        <Link className="nav-link text-dark ml-3 mr-3 font-weight-bold" to="/PropiedadesCatalogo">Propiedades</Link>
                        <Link className="nav-link text-dark ml-3 mr-3 font-weight-bold" to="/ReservarCita">Ofrece tu propiedad</Link>
                        <Link className="nav-link text-dark ml-3 mr-3 font-weight-bold" to="/ReservarCita">Contactanos</Link>
                        <Link className="nav-link text-dark ml-3 mr-3 font-weight-bold" to="/conocenos">Nosotros</Link>
                        <Link className="btn  text-uppercase font-weight-bold btn-outline-info  btn-lg" to="/Login">soy empleado</Link>
                        
                    </div>
                </div>
            </nav>
        <div className="titulos">
            <h1 id="cat_prop"><b>Catálogo de Propiedades</b></h1><hr className="solid"/>
            <h2 id="sub_prop">Encontrá tu proximo lugar para vivir</h2>
        </div>
    
        <div id="options-row" className="row d-flex justify-content-around">
            <div className="col-sm">
                <div className="form-group">
                    <br/>
                    <select className="form-control shadow" id="exampleFormControlSelect1">
                    <option>-TIPO DE PROPIEDAD-</option>
                    <option>Casa</option>
                    <option>Chalet</option>
                    <option>Departamento</option>
                    <option>Monoambiente</option>
                    </select>
                </div>
                
            </div>
            <div className="col-sm">
                <div className="form-group ">
                    <br/>
                    <select className="form-control shadow " id="exampleFormControlSelect1">
                    <option>-UBICACION-</option>
                    <option>Chaco</option>
                    <option>Cordoba</option>
                    <option>Santa Fe</option>
                    <option>Buenos Aires</option>
                    <option>CABA</option>
                    <option>Formosa</option>
                    <option>Misiones</option>
                    <option>Salta</option>
                    <option>Jujuy</option>
                    <option>Mendoza</option>

                    </select>
                </div>
            </div>
            <div className="col-sm">
                <div className="form-group">
                    <br/>
                    <select className="form-control shadow" id="exampleFormControlSelect1">
                    <option>-PRECIO-</option>
                    <option> 0 - 1.000.000 ARS </option>
                    <option> 1.000.001 - 2.000.000 ARS</option>
                    <option> 2.000.001 - 4.000.000 ARS</option>
                    <option> 4.000.001 - 9.000.000 ARS</option>
                    </select>
                </div>
        
            </div>
            <div className="col-sm">
                <div className="form-group">
                    <br/>
                    <select className="form-control shadow " id="exampleFormControlSelect1">
                    <option>-ESTADO-</option>
                    <option>Nueva-Alquiler</option>
                    <option>Remodelada-Alquiler</option>
                    <option>Nueva-Venta</option>
                    <option>Remodelada-Venta</option>
                    </select>
                </div>
            </div>
            
        </div>


        <div className="cartas text-center">
        <div className="card col-lg-3 col-sm-6 mr-4 ml-4" style={{width:"18rem"}}>
            <a href="detalles-Propiedad.html" className="clase_a">
                <img src=".\img\house_example_3.png" className="card-img-top d-flex" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Casa</h5>
                    <p className="card-text"></p>
                </div>
                <div className="container ">
                    <hr/>
                    <ul className="list-unstyled text-small d-flex justify-content-around">
                        <div className="d-flex align-items-center">
                            <i className="fas fa-bed fa-2x  ml-1 " style={{color:"black"}}></i>
                            <div className=" font-weight-bold" style={{'margin-left': "10px", color: "black;"}}>4</div>
                        </div>
          
                        <div className="d-flex align-items-center">
                            <i className="fas fa-bath fa-2x  ml-1 "  style={{color: "black"}}></i>
                            <div className=" font-weight-bold" style={{'margin-left': "10px", color: "black"}}>2</div>
                        </div>
    
                        <div className="d-flex align-items-center">
                            <i className="fas fa-th-large fa-2x  ml-1 "  style={{color: "black"}}></i>
                            <div className=" font-weight-bold" style={{'margin-left': "10px", color: "black"}}>2</div>
                        </div>
                         
                    </ul>
                </div>
            </a>
            
        </div>
        <div className="card col-lg-3 col-sm-6 mr-4 ml-4" style={{width: "18rem"}}>
            <a href="#" className="clase_a">
                <img src="./img/city-apartment-design-wallpaper-preview.jpg" className="card-img-top " alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Pent-House</h5>
                    <p className="card-text"></p>
                </div>
                <div className="container ">
                    <hr/>
                    <ul className="list-unstyled text-small d-flex justify-content-around">
                        <div className="d-flex align-items-center">
                            <i className="fas fa-bed fa-2x  ml-1 " style={{color:"black"}}></i>
                            <div className=" font-weight-bold" style={{'margin-left': "10px",color: "black"}}>2</div>
                        </div>
          
                        <div className="d-flex align-items-center">
                            <i className="fas fa-bath fa-2x  ml-1 "  style={{color:"black"}}></i>
                            <div className=" font-weight-bold" style={{'margin-left': "10px",color: "black"}}>1</div>
                        </div>
    
                        <div className="d-flex align-items-center">
                            <i className="fas fa-th-large fa-2x  ml-1 "  style={{color:"black"}}></i>
                            <div className=" font-weight-bold" style={{'margin-left': "10px",color: "black"}}>2</div>
                        </div>
                         
                    </ul>
                </div>
            </a>
        </div>
        <div className="card col-lg-3 col-sm-6 mr-4 ml-4" style={{width: "18rem"}}>
            <a href="#" className="clase_a">
                <img src="./img/Chalet.jpg" className="card-img-top " alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Chalet</h5>
                    <p className="card-text"></p>
                </div>
                <div className="container ">
                    <hr/>
                    <ul className="list-unstyled text-small d-flex justify-content-around">
                        <div className="d-flex align-items-center">
                            <i className="fas fa-bed fa-2x  ml-1 " style={{color:"black"}}></i>
                            <div className=" font-weight-bold" style={{'margin-left': "10px", color: "black"}}>5</div>
                        </div>
          
                        <div className="d-flex align-items-center">
                            <i className="fas fa-bath fa-2x  ml-1 "  style={{color:"black"}}></i>
                            <div className=" font-weight-bold" style={{'margin-left': "10px", color: "black"}}>3</div>
                        </div>
    
                        <div className="d-flex align-items-center">
                            <i className="fas fa-th-large fa-2x  ml-1 "  style={{color:"black"}}></i>
                            <div className=" font-weight-bold" style={{'margin-left': "10px", color: "black"}}>2</div>
                        </div>
                         
                    </ul>
                </div>
            </a>
        </div>
        <div className="card col-lg-3 col-sm-6 mr-4 ml-4" style={{width: "18rem"}}>
            <a href="#" className="clase_a">
                <img src="./img/Dpto.jpg" className="card-img-top " alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Departamento</h5>
                    <p className="card-text"></p>
                </div>
                <div className="container ">
                    <hr/>
                    <ul className="list-unstyled text-small d-flex justify-content-around">
                        <div className="d-flex align-items-center">
                            <i className="fas fa-bed fa-2x  ml-1 " style={{color:"black"}}></i>
                            <div className=" font-weight-bold" style={{'margin-left': "10px", color: "black"}}>2</div>
                        </div>
          
                        <div className="d-flex align-items-center">
                            <i className="fas fa-bath fa-2x  ml-1 "  style={{color:"black"}}></i>
                            <div className=" font-weight-bold" style={{'margin-left': "10px", color: "black"}}>1</div>
                        </div>
    
                        <div className="d-flex align-items-center">
                            <i className="fas fa-th-large fa-2x  ml-1 "  style={{color:"black"}}></i>
                            <div className=" font-weight-bold" style={{'margin-left': "10px", color: "black"}}>1</div>
                        </div>
                         
                    </ul>
                </div>
            </a>
        </div>
        </div>

        <div className="cartas text-center">
        <div className="card col-lg-3 col-sm-6 mr-4 ml-4" style={{width: "18rem"}}>
            <a href="#" className="clase_a">
                <img src="./img/casaresidencial.jpeg" className="card-img-top " alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Casa Residencial</h5>
                    <p className="card-text"></p>
                </div>
                <div className="container ">
                    <hr/>
                    <ul className="list-unstyled text-small d-flex justify-content-around">
                        <div className="d-flex align-items-center">
                            <i className="fas fa-bed fa-2x  ml-1 " style={{color:"black"}}></i>
                            <div className=" font-weight-bold" style={{'margin-left': "10px", color: "black"}}>4</div>
                        </div>
          
                        <div className="d-flex align-items-center">
                            <i className="fas fa-bath fa-2x  ml-1 "  style={{color:"black"}}></i>
                            <div className=" font-weight-bold" style={{'margin-left': "10px", color: "black"}}>2</div>
                        </div>
    
                        <div className="d-flex align-items-center">
                            <i className="fas fa-th-large fa-2x  ml-1 "  style={{color:"black"}}></i>
                            <div className=" font-weight-bold" style={{'margin-left': "10px", color: "black"}}>2</div>
                        </div>
                         
                    </ul>
                </div>
            </a>
            
        </div>
        <div className="card col-lg-3 col-sm-6 mr-4 ml-4" style={{width: "18rem"}}>
            <a href="#" className="clase_a">
                <img src="./img/mono.jpg" className="card-img-top " alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Monoambiente</h5>
                    <p className="card-text"></p>
                </div>
                <div className="container ">
                    <hr/>
                    <ul className="list-unstyled text-small d-flex justify-content-around">
                        <div className="d-flex align-items-center">
                            <i className="fas fa-bed fa-2x  ml-1 " style={{color:"black"}}></i>
                            <div className=" font-weight-bold" style={{'margin-left': "10px", color: "black"}}>1</div>
                        </div>
          
                        <div className="d-flex align-items-center">
                            <i className="fas fa-bath fa-2x  ml-1 "  style={{color:"black"}}></i>
                            <div className=" font-weight-bold" style={{'margin-left': "10px", color: "black"}}>1</div>
                        </div>
    
                        <div className="d-flex align-items-center">
                            <i className="fas fa-th-large fa-2x  ml-1 "  style={{color:"black"}}></i>
                            <div className=" font-weight-bold" style={{'margin-left': "10px", color: "black"}}>1</div>
                        </div>
                         
                    </ul>
                </div>
            </a>
        </div>
        <div className="card col-lg-3 col-sm-6 mr-4 ml-4" style={{width: "18rem"}}>
            <a href="#" className="clase_a">
                <img src="./img/dpto6to.jpg" className="card-img-top " alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Departamento</h5>
                    <p className="card-text"></p>
                </div>
                <div className="container ">
                    <hr/>
                    <ul className="list-unstyled text-small d-flex justify-content-around">
                        <div className="d-flex align-items-center">
                            <i className="fas fa-bed fa-2x  ml-1 " style={{color:"black"}}></i>
                            <div className=" font-weight-bold" style={{'margin-left': "10px", color: "black"}}>1</div>
                        </div>
          
                        <div className="d-flex align-items-center">
                            <i className="fas fa-bath fa-2x  ml-1 " style={{color:"black"}}></i>
                            <div className=" font-weight-bold" style={{'margin-left': "10px", color: "black"}}>1</div>
                        </div>
    
                        <div className="d-flex align-items-center">
                            <i className="fas fa-th-large fa-2x  ml-1 "  style={{color:"black"}}></i>
                            <div className=" font-weight-bold" style={{'margin-left': "10px", color: "black"}}>1</div>
                        </div>
                         
                    </ul>
                </div>
            </a>
        </div>
        <div className="card col-lg-3 col-sm-6 mr-4 ml-4" style={{width: "18rem"}}>
            <a href="#" className="clase_a">
                <img src="./img/casar.jpg" className="card-img-top " alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Casa Residencial</h5>
                    <p className="card-text"></p>
                </div>
                <div className="container ">
                    <hr/>
                    <ul className="list-unstyled text-small d-flex justify-content-around">
                        <div className="d-flex align-items-center">
                            <i className="fas fa-bed fa-2x  ml-1 " style={{color:"black"}}></i>
                            <div className=" font-weight-bold" style={{'margin-left': "10px", color: "black"}}>4</div>
                        </div>
          
                        <div className="d-flex align-items-center">
                            <i className="fas fa-bath fa-2x  ml-1 "  style={{color:"black"}}></i>
                            <div className=" font-weight-bold" style={{'margin-left': "10px", color: "black"}}>2</div>
                        </div>
    
                        <div className="d-flex align-items-center">
                            <i className="fas fa-th-large fa-2x  ml-1 "  style={{color:"black"}}></i>
                            <div className=" font-weight-bold" style={{'margin-left': "10px", color: "black"}}>2</div>
                        </div>
                         
                    </ul>
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