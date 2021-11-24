import "./css/index.css";


import {BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
    Link,
    Oulet
   } from 'react-router-dom'



export const Home = () =>{
    return(
    <div>
        <body>
            
            <nav className="navbar sticky-top navbar-light navbar-expand-lg"> 
                                        
                    <Link className="navbar-brand ml-3 mt-2 " to="/Home">
                        <img  src=".\img\LOGO3.png" width="200" alt="Logo Domus"  id="img-logo"/>
                    </Link>
                    <button className="navbar-toggler btn-menu ml-auto" type="button" data-bs-toggle="collapse" 
                    data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" 
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                        <div className="navbar-nav ml-auto align-items-center">
                            <Link className="nav-link text-dark ml-3 mr-3 font-weight-bold" to="/#">Propiedades</Link>
                            <Link className="nav-link text-dark ml-3 mr-3 font-weight-bold" to="/#">Ofrece tu propiedad</Link>
                            <Link className="nav-link text-dark ml-3 mr-3 font-weight-bold" to="/#">Contactanos</Link>
                            <Link className="nav-link text-dark ml-3 mr-3 font-weight-bold" to="/#">Nosotros</Link>
                            <Link className="btn  text-uppercase font-weight-bold btn-outline-info  btn-lg" to="/Login">soy empleado</Link>
                            
                        </div>
                    </div>
                
            </nav>
            
        
            <div className="container-fluid  justify-content-center mr-auto ml-auto mt-2">
                <div className="card mb-3">
                    
                    <div className="container-anexo">
                        
                        <div className="row d-flex justify-content-end">
                            <div className="col-sm-6 ">
                                <div className="text-start d-flex align-items-center">
                                    <div className="card-block px-3">
                                        <h4 className="card-title text-white  mt-3 mb-3">Encontrá tu proximo hogar </h4>
                                        <br/>
    
                                        <h3 className="card-title text-black text2 font-weight-bold mt-3 ml-2 mb-3">¿ Cómo saber si estoy eligiendo la casa correcta? </h3>
                                        <br/>
    
                                        <h5 className="card-title text-white  mt-3 ml-3 mb-3">Podemos ayudarte a encontrar de manera sencilla la casa de tus sueños, el departamento para comprar o alquilar.</h5>
                                        <br/>
                                        <h5 className="card-title text-black  mt-2 ml-3">Encuentre lo que desea</h5>
                                        <p className="card-text text-light mt-3 ml-3 mb-3">Necesitara saber acerca de una casa o departamento el cual desea alquilar o comprar. puede explorar todas las propiedades que actualmente existen en nuestro catálogo.</p>
                                        <br/>
    
                                        <h5 className="card-title text-black  mt-2 ml-3">Vende tu casa</h5>
                                        <p className="card-text text-light mt-3 ml-3 mb-3">Vender la casa o propiedad en la que actualmente vivis es una gran transición, pero no tiene porque ser una experiencia estresante.</p>
                                        <br/>
    
                                        <h5 className="card-title text-black  mt-2 ml-3">Coloca en alquiler</h5>
                                        <p className="card-text text-light mt-3 ml-3 mb-3">Si es dueño de una casa que no puede vender y está pensando en alquilarla, encontrar buenos inquilinos que se encarguen de su casa es un desafío, pero esencial.</p>
    
                                        
                                        
                                    </div>
                                </div>  
                            </div>
                            <div className="col-sm-6 d-flex align-items-center  ">
                                <img className="mb-3 mt-3 mr-3 ml-3 img-fluid" id="casita" src="./img/casaresidencial2.png" className="img-thumbnail" width=""/>
                            </div>
                            
                            
                        </div>
                    </div>
                   
                </div>
            </div>
    
            <div className="container-fluid mt-3">
                
                <div className="row slide-promotions d-flex justify-content-around ">
                    <div className="col-3  mt-3">
                        <div className="ml-auto mr-auto">
                            <h3 className=" mb-3 text-white  font-weight-bold text-center size-text1"> Nuestros Socios</h3>
                        </div>
                        <hr className="solid "/>
                        <div className="ml-auto mr-auto">
                            <h4 className=" mb-3 text-white  font-weight-light text-center size-text2"> Nos Avalan</h4>
                            
                        </div>
                    </div>
                    <div className="col-9 container content-iconos d-flex align-items-center">
                        <ul className="row">
                            <li className="col-6 col-sm-6 col-md-4 col-lg-4">
                                <img className="img-fluid" src="./img/logo-gpi@2x-2820b3f64af629cff0ebd4a05f6ba2a0.png" alt="" width="200"/>
                            </li>
                            <li className="col-6 col-sm-6 col-md-4 col-lg-4">
                                <img className="img-fluid" src="./img/mercado-libre-logo.png" alt="" width="200"/>
                            </li>
                            <li className="col-6 col-sm-6 col-md-4 col-lg-4">
                                <img className="img-fluid" src="./img/isologo-properati.png" alt="" width="200"/>
                            </li>
                            <li className="col-6 col-sm-6 col-md-4 col-lg-4">
                                <img className="img-fluid" src="./img/inmobusqueda.png" alt="" width="200" />
                            </li>
                            <li className="col-6 col-sm-6 col-md-4 col-lg-4">
                                <img className="img-fluid" src="./img/zonaprop.png" alt="" width="200" />
                            </li>
                            <li className="col-6 col-sm-6 col-md-4 col-lg-4">
                                <img className="img-fluid" src="./img/Buscainmuebles.png" alt="" width="200"/>
                            </li>
    
                        </ul>
                    </div>
    
                </div>
    
            </div>
                
            <div className="container content-container">
                        
                <div className="card mb-3 mt-3  " id="cartita-left">
                    <div className="row d-flex justify-content-start">
                        <div className="col-sm-7 d-flex align-items-center pr-0 pb-0">
                          <img className="image-card img-fluid" src="./img/2.jpg" className="img-thumbnail" width=""/>
                        </div>
                        <div className="col-sm-5 d-flex align-items-center pl-0 pt-0">
                            <div className="container-text text-center">
                              <div className="card-block px-3">
                                <h4 className="card-title text-white text-uppercase mt-3">Encontra tu proximo hogar</h4>
                                <p className="card-text text-light">Podes explorar el catalogo de propiedades disponibles, buscar lo que mas se ajusta a tus necesidades y especificaciones. Filtrá por tipo de propiedades, por la localidad y cercania que mas prefieras, por el rango de precio que gustes y la antigüedad de la estructura. 
                                </p>
                                <a href="Catalogo_clientes.html" className="btn  text-uppercase mb-3 font-weight-bold btn-outline-info ">ver propiedades</a>
                              </div>
                            </div>  
                        </div>
              
                      
                    </div>
                </div>
    
                <div className="card mb-3 mt-3 " style={{'align-items': "flex-end"}} id="cartita-right"> 
                    <div className="row d-flex justify-content-end">
                        <div className="col-sm-5 d-flex align-items-center pr-0  pb-0">
                            <div className="container-text text-center">
                                <div className="card-block px-3">
                                    <h4 className="card-title text-white text-uppercase mt-3">estamos a tu disposicion</h4>
                                    <p className="card-text text-light">Nuestros mejores asesores inmobiliarios estan a la espera de resolver tus dudas y acompañarte en el proceso de conseguir tu nueva vivienda. 
                                        Si deseas vender o poner en alquiler tu propiedad, estamos disponibles para buscar la mejor opcion y convertirla en una oportunidad de resolver tus necesidades.
                                    </p>
                                    <a href="#" className="btn  text-uppercase mb-3 font-weight-bold btn-outline-info ">reservar cita</a>
                                </div>
                            </div>  
                        </div>
                        <div className="col-sm-7 d-flex align-items-center  pl-0 pt-0">
                          <img className="image-card img-fluid" src="./img/elegir-un-agente-inmobiliario.jpg" className="img-thumbnail" width=""/>
                        </div>
                        
                      
                    </div>
                </div>
    
    
                <div className="card mb-3 mt-3 " id="cartita-left">
                    <div className="row d-flex justify-content-start">
                        <div className="col-sm-7 d-flex align-items-center pr-0 pb-0 ">
                          <img className="image-card img-fluid" src="./img/real-estate-agent.jpg" className="img-thumbnail" width=""/>
                        </div>
                        <div className="col-sm-5 d-flex align-items-center pl-0 pt-0">
                            <div className="container-text text-center">
                              <div className="card-block px-3">
                                <h4 className="card-title text-white text-uppercase mt-3">NOS QUEREMOS PRESENTAR </h4>
                                <p className="card-text text-light">Queremos ayudarte a tomar la decisión más adecuada en tus operaciones inmobiliarias, facilitando la compra, venta o alquiler de inmuebles en el menor tiempo posible, al mejor precio de mercado, protegiendo legalmente el patrimonio de las partes, con transparencia y confiabilidad.
                                </p>
                                <a href="Conocenos.html" className="btn  text-uppercase mb-3 font-weight-bold btn-outline-info ">conocenos</a>
                              </div>
                            </div>  
                        </div>
              
                      
                    </div>
                </div>
            </div>
    
            <hr className="linea2"/>
            <hr className="linea3 "/>
    
    
            <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
                
            
            <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossorigin="anonymous"></script>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.min.js" integrity="sha384-lpyLfhYuitXl2zRZ5Bn2fqnhNAKOAaM/0Kr9laMspuaMiZfGmfwRNFh8HlMy49eQ" crossorigin="anonymous"></script>
    
    
    
    
            
        </body>
    </div>
        
       
    );
}