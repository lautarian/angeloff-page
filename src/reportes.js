import "./css/Reportes.css"

import{ BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
    Link,
    Oulet

}from 'react-router-dom'


export const Reportes = () =>{
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
                    <Link class="nav-link text-dark ml-3 mr-3 font-weight-bold" to="/App">Archivo de Propiedades</Link>
                    <Link class="nav-link text-dark ml-3 mr-3 font-weight-bold" to="#">Archivo de Clientes</Link>
                    <Link class="nav-link text-dark ml-3 mr-3 font-weight-bold" to="/Home">Cerrar Sesion</Link>


                    
                </div>
            </div>
        
    </nav>
    

    <main class="bg-image">
        <div class="image-style">
            <div class="container-fluid mb-5 py-5"></div>
            <div class="container pt-5">
                <h1 class="fw-bold fs-2 text-light">REPORTES</h1>

                <hr class="my-3 bg-light"/>

                <h2 class="fs-6 text-light">GENERADOR DE REPORTES POR PERIODO</h2>

                <form action="" class="bg-light reportes">
                    <button type="button" data-bs-toggle="collapse" data-bs-target="#collapsePropiedades"
                        aria-expanded="false" aria-controls="collapsePropiedades" class="btn-info d-lg-none w-100">
                        <span class="dropdown-toggle">Propiedades</span>
                    </button>
                    <div class="collapse d-lg-block" id="collapsePropiedades">
                        <div class="row g-0 border-top border-bottom border-secondary reportes mr-auto ml-auto">
                            <div
                                class="col-md d-none d-sm-none d-md-none d-lg-block ps-1 border-start border-secondary reportes">
                                <div class="py-3">
                                    <img src="./img/resultado-de-imagem-para-casa-di-legno-moderna-home-decoration.jpg"
                                        alt="" width="60" height="60"/>
                                    Propiedades
                                </div>
                            </div>
                            <div class="col-md px-1 border-start border-end border-secondary">
                                <label for="tipo" class="form-label">Tipo</label>
                                <select class="form-select" id="tipo" name="tipo" required>
                                    <option value="diario" selected>Diario</option>
                                    <option value="mensual">Mensual</option>
                                    <option value="anual">Anual</option>
                                </select>
                            </div>
                            <div class="col-md px-1 border-start border-end border-secondary hide-border">
                                <label for="fecha" class="form-label">Fecha</label>
                                <input type="date" id="fecha" name="reporte-fecha" value="2021-05-19" class="form-control" required/>
                            </div>
                            <div class="col-md py-4 px-1 border-start border-end border-secondary hide-border reportes">
                                <Link to="#" class="btn w-100 btn-info">
                                        Generar
                                </Link>
                            </div>
                        </div>
                    </div>
                </form>

                <form action="" class="mt-3 bg-light reportes">
                    <button type="button" data-bs-toggle="collapse" data-bs-target="#collapseVentas"
                        aria-expanded="false" aria-controls="collapseVentas" class="btn-info d-lg-none w-100">
                        <span class="dropdown-toggle">Ventas</span>
                    </button>
                    <div class="collapse d-lg-block" id="collapseVentas">
                        <div class="row g-0 border-top border-bottom border-secondary reportes mr-auto ml-auto">
                            <div
                                class="col-md d-none d-sm-none d-md-none d-lg-block ps-1 border-start border-secondary reportes">
                                <div class="py-3">
                                    <img src="./img/unknown.jpg" alt="" width="60" height="60"/>
                                    Ventas
                                </div>
                            </div>
                            <div class="col-md px-1 border-start border-end border-secondary">
                                <label for="tipo" class="form-label">Tipo</label>
                                <select class="form-select" id="tipo" name="tipo" required>
                                    <option value="diario" selected>Diario</option>
                                    <option value="mensual">Mensual</option>
                                    <option value="anual">Anual</option>
                                </select>
                            </div>
                            <div class="col-md px-1 border-start border-end border-secondary hide-border">
                                <label for="fecha" class="form-label">Fecha</label>
                                <input type="date" id="fecha" name="reporte-fecha" value="2021-05-19" class="form-control" required/>
                            </div>
                            <div class="col-md py-4 px-1 border-start border-end border-secondary hide-border reportes">
                                <Link to="#" class="btn w-100 btn-info">
                                    Generar
                                </Link>
                            </div>
                        </div>
                    </div>
                </form>

                <form action="" class="mt-3 bg-light reportes">
                    <button type="button" data-bs-toggle="collapse" data-bs-target="#collapseAlquileres"
                        aria-expanded="false" aria-controls="collapseAlquileres" class="btn-info d-lg-none w-100">
                        <span class="dropdown-toggle">Alquileres</span>
                    </button>
                    <div class="collapse d-lg-block" id="collapseAlquileres">
                        <div class="row g-0 border-top border-bottom border-secondary reportes mr-auto ml-auto">
                            <div
                                class="col-md d-none d-sm-none d-md-none d-lg-block ps-1 border-start border-secondary reportes">
                                <div class="py-3">
                                    <img src="./img/dpto6to.jpg" alt="" width="60" height="60"/>
                                    Alquileres
                                </div>
                            </div>
                            <div class="col-md px-1 border-start border-end border-secondary">
                                <label for="tipo" class="form-label">Tipo</label>
                                <select class="form-select" id="tipo" name="tipo" required>
                                    <option value="diario" selected>Diario</option>
                                    <option value="mensual">Mensual</option>
                                    <option value="anual">Anual</option>
                                </select>
                            </div>
                            <div class="col-md px-1 border-start border-end border-secondary hide-border">
                                <label for="fecha" class="form-label">Fecha</label>
                                <input type="date" id="fecha" name="reporte-fecha" value="2021-05-19" class="form-control" required/>
                            </div>
                            <div class="col-md py-4 px-1 border-start border-end border-secondary hide-border reportes">
                                <Link to="#" class="btn w-100 btn-info">
                                    Generar
                                </Link>
                            </div>
                        </div>
                    </div>
                </form>

                <form action="" class="mt-3 bg-light reportes">
                    <button type="button" data-bs-toggle="collapse" data-bs-target="#collapseClientes"
                        aria-expanded="false" aria-controls="collapseClientes" class="btn-info d-lg-none w-100">
                        <span class="dropdown-toggle">Clientes</span>
                    </button>
                    <div class="collapse d-lg-block" id="collapseClientes">
                        <div class="row g-0 border-top border-bottom border-secondary reportes mr-auto ml-auto">
                            <div
                                class="col-md d-none d-sm-none d-md-none d-lg-block ps-1 border-start border-secondary reportes">
                                <div class="py-3">
                                    <img src="./img/5_Key_Characteristics_of_Real_Estate_Agents@2x.jpg" alt=""
                                        width="60" height="60"/>
                                    Clientes
                                </div>
                            </div>
                            <div class="col-md px-1 border-start border-end border-secondary">
                                <label for="tipo" class="form-label">Tipo</label>
                                <select class="form-select" id="tipo" name="tipo" required>
                                    <option value="diario">Diario</option>
                                    <option value="mensual" selected>Mensual</option>
                                    <option value="anual">Anual</option>
                                </select>
                            </div>
                            <div class="col-md px-1 border-start border-end border-secondary hide-border">
                                <label for="fecha" class="form-label">Fecha</label>
                                <input type="date" id="fecha" name="reporte-fecha" value="2021-05-01" class="form-control" required/>
                            </div>
                            <div class="col-md py-4 px-1 border-start border-end border-secondary hide-border reportes">
                                <a href="ReportesVista.html" class="btn w-100 btn-info">
                                    Generar
                                </a>
                            </div>
                        </div>
                    </div>
                </form>
                <div class="container py-5 mt-5"></div>
            </div>
        </div>
    </main>

        </div>
    );
}