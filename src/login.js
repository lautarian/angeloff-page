import "./css/Login.css";



import {BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
    Link,
    Oulet
   } from 'react-router-dom'



export const Login = () =>{
    return(
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

    <div class="modal-dialog text-center" >
        <div class="col-sm-12 main-section">
            <div class=" modal-content">
                <div class="col-12 user-img">
                    <img class="logous" src=".\img\Portrait_Placeholder.png" />
                </div>
                <h1>Ingresá a tu cuenta</h1>
                <form class="col-12" onsubmit="checkUser(); return false;">
                    <div class="form-gruop" id="user-gruop">
                        <h2 class="Nombre_Usuario">Nombre de Usuario</h2>
                        <input type="text" class="form-control" id="user" placeholder="nuñez2021"/>
                    </div>
                    <div class="form-gruop" id="contraseña-gruop">
                        <h2 class="Contraseña">Contraseña</h2>
                        <input type="password" class="form-control" placeholder="*********"/>
                    </div>
                    <div class="col-12 forgot">
                        <a href="#">¿Olvidaste la contraseña?</a>
                    </div>
                    {/* <button type="submit" class="btn btn-outline-info button-login"  ><i class="fas fa-sign-in-alt"></i>
                        ENTRAR</button> */}

                    <Link className="btn  text-uppercase font-weight-bold btn-outline-info  btn-lg" to="/Comercializar">ENTRAR</Link>


                </form>

            </div>
        </div>
    </div>
    
        </div>
    )
}