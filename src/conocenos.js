import "./css/conocenos.css";

import { BrowserRouter as Router,
    Route,
    Routes,
    Navigate,
    Link,
    Oulet
} from 'react-router-dom'

export const Conocenos = () =>{
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
        
        


        <div class="container-fluid  justify-content-center mr-auto ml-auto mt-3">
            <div class="card mb-3">
                
                <div class="container-anexo">
                    
                    <div class="row d-flex justify-content-end">
                        <div class="col-sm-6 d-flex align-items-center  ">
                            <img class="mb-3 mt-3 mr-3 ml-3 img-fluid" id="casita" src="./img/5_Key_Characteristics_of_Real_Estate_Agents@2x.jpg" class="img-thumbnail" width=""/>
                        </div>
                        <div class="col-sm-6 ">
                            <div class="text-start d-flex align-items-center">
                                <div class="card-block px-3 test-justify">
                                    <hr class="solid"/>
                                    <h2 class="card-title text-white  mt-3 mb-3">¿Quienes sómos? </h2>
                                                                        
                                    <br/>
                                    <p class="card-title text-black font-weight-bold mt-2 ml-3 test-justify fuente">Inmobiliaria Domus es una empresa dedicada al servicio de bienes raíces basada en la honestidad, integridad, ética y profesionalismo que busca lograr en el cliente una imagen de compromiso con su búsqueda.</p>
                                    
                                    <br/>

                                    <p class="card-title text-black font-weight-bold  ml-3 test-justify fuente">Hemos desarrollado una visión estrategica y empática para con nuestros clientes, para asi lograr que todos y cada uno, encuentre el hogar que mas desea, se sienta contenido y asesorado al momento de poner en alquiler o vender su propiedad, 
                                        y por ultimo, brindar soluciones integrales a cada desafio planteado con agilidad y creatividad comercial; pero tambien con solidez técnica, en busca de un mayor confort para quien confie en nosotros.</p>
                                    <br/>

                                    <p class="card-title text-black font-weight-bold  ml-3 test-justify fuente">La cobertura de nuestros servicios abarca departamentos, casas, chalet, el cual podra elegir segun sus intereses , plantearnos la necesidad y nosotros encargarnos del resto.</p>

                                    
                                    
                                </div>
                            </div>  
                        </div>
                        
                        
                    </div>
                </div>
               
            </div>
        </div>

        <br/>
        <br/>
        <br/>

        <div class=" container-fluid text-center mr-auto ml-auto enlace-team">
           
            <h1><Link to="/Nosotros">Conoce Nuestro Equipo </Link></h1>
            
        </div>

        <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
            
        
        <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.min.js" integrity="sha384-lpyLfhYuitXl2zRZ5Bn2fqnhNAKOAaM/0Kr9laMspuaMiZfGmfwRNFh8HlMy49eQ" crossorigin="anonymous"></script>

        </div>
    )
}