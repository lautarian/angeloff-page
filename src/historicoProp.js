import "./css/historico-propiedades.css"

import { BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
    Link,
    Oulet

}from 'react-router-dom'

export const historicoPropiedad = () =>{
    return(
        <div>
                   
    <nav class="navbar sticky-top navbar-light navbar-expand-lg"> 
      
                
            <Link class="navbar-brand ml-3 mt-2 " href="/Comercializar">
                <img  src=".\img\LOGO3.png" width="200" alt="Logo Domus"  id="img-logo"/>
            </Link>
            <button class="navbar-toggler btn-menu ml-auto" type="button" data-bs-toggle="collapse" 
            data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" 
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
                <div class="navbar-nav ml-auto align-items-center">
                   
                    <a class="nav-link text-dark ml-3 mr-3 font-weight-bold" href="Reportes.html">Generar Reportes</a>
                    <a class="nav-link text-dark ml-3 mr-3 font-weight-bold" href="Mov.historicos.html">Archivo de Propiedades</a>
                    <a class="nav-link text-dark ml-3 mr-3 font-weight-bold" href="Consultar-cliente.html">Archivo de Clientes</a>
                    <a class="nav-link text-dark ml-3 mr-3 font-weight-bold" href="index.html">Cerrar Sesion</a>


                    
                </div>
            </div>
        
    </nav>

    <div class="titulos">
        <h1 class=" text-white" id="cat_prop"><b>Histórico Propiedades</b></h1>
        <hr class="solid"/>
        <h2 class=" text-white" id="sub_prop" class="mb-3">Listado del archivo historico de propiedades</h2>
    </div>

    <div class="container">

        <div class="d-flex justify-content-end">
            <input type="text" class="mr-3" placeholder="Casa, barrio, ciudad"/>
            <a href="#" class="btn btn-info">Buscar</a>
        </div>

        <div class="row my-5">
            <div class="col-md">
                <select class="form-control shadow" id="exampleFormControlSelect1">
                    <option>-TIPO DE PROPIEDAD-</option>
                    <option>Casa</option>
                    <option>Chalet</option>
                    <option>Departamento</option>
                    <option>Monoambiente</option>
                </select>
            </div>
            <div class="col-md">
                <select class="form-control shadow " id="exampleFormControlSelect1">
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
            <div class="col-md">
                <select class="form-control shadow" id="exampleFormControlSelect1">
                    <option>-PRECIO-</option>
                    <option> 0 - 1.000.000 ARS </option>
                    <option> 1.000.001 - 2.000.000 ARS</option>
                    <option> 2.000.001 - 4.000.000 ARS</option>
                    <option> 4.000.001 - 9.000.000 ARS</option>
                </select>
            </div>
            <div class="col-md">
                <select class="form-control shadow " id="exampleFormControlSelect1">
                    <option>-ESTADO-</option>
                    <option>Nueva-Alquiler</option>
                    <option>Remodelada-Alquiler</option>
                    <option>Nueva-Venta</option>
                    <option>Remodelada-Venta</option>
                </select>
            </div>
        </div>

        <div class="row bg-white text-center mb-3" style="border-radius: 20px;" >
            <div class="col-lg bordes pad">
                <img class="img-fluid" src="./img/house_example_3.png" alt="imagen-casa" width="50px" height="50px"/>
                <h5>Casa Residencial #35206</h5>
            </div>
            <div class="col-lg bordes text-center pad justify-content-center align-items-center d-flex">
                <div class="margen">
                    <h5>Resistencia, Chaco</h5>
                </div>
            </div>
            <div class="col-lg bordes pad justify-content-center align-items-center d-flex">
                <div class="margen ">
                    <h5>$4.450.000,00</h5>
                </div>
            </div>
            <div class="col-lg bordes pad justify-content-center align-items-center d-flex">
                <div class="margen ">
                    <h5>Remodelada, Venta</h5>
                </div>
            </div>
            <div class="col-lg justify-content-center align-items-center d-flex">
                <div class="margen">
                    <a class="btn" data-toggle="modal" data-target="#exampleModal">
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor"
                            style={{color: "#70C6DB"}} class="bi bi-eye-fill" viewBox="0 0 16 16">
                            <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                            <path
                                d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
                        </svg>
                    </a>

                    <a href="" class="btn" data-toggle="modal" data-target="#reporte">
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor"
                            class="bi bi-file-earmark-text" viewBox="0 0 16 16" style={{color: "#70C6DB"}}>
                            <path
                                d="M5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z" />
                            <path
                                d="M9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.5L9.5 0zm0 1v2A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z" />
                        </svg>
                    </a>
                </div>
            </div>
        </div>

        <div class="row bg-white text-center mb-3" style={{'border-radius': "20px"}}>
            <div class="col-lg bordes pad">
                <img class="img-fluid" src="./img/city-apartment-design-wallpaper-preview.jpg" alt="imagen-prod"
                    width="50px" height="60px"/>
                <h5>Depto. Penthouse #35220</h5>
            </div>
            <div class="col-lg bordes pad justify-content-center align-items-center d-flex">
                <div class="margen ">
                    <h5>Goya, Corrientes</h5>
                </div>
            </div>
            <div class="col-lg bordes pad justify-content-center align-items-center d-flex">
                <div class="margen ">
                    <h5>$150.000,00</h5>
                </div>
            </div>
            <div class="col-lg bordes pad justify-content-center align-items-center d-flex">
                <div class="margen">
                    <h5>Remodelada, Alquiler</h5>
                </div>
            </div>
            <div class="col-lg justify-content-center align-items-center d-flex">
                <div class="margen ">
                    <a class="btn" data-toggle="modal" data-target="#exampleModal">
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor"
                            style={{color: "#70C6DB"}} class="bi bi-eye-fill" viewBox="0 0 16 16">
                            <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                            <path
                                d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
                        </svg>
                    </a>

                    <a href="" class="btn" data-toggle="modal" data-target="#reporte">
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor"
                            class="bi bi-file-earmark-text" viewBox="0 0 16 16" style="color: #70C6DB;">
                            <path
                                d="M5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z" />
                            <path
                                d="M9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.5L9.5 0zm0 1v2A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z" />
                        </svg>
                    </a>
                </div>
            </div>
        </div>

        <div class="row bg-white text-center mb-3" style="border-radius: 20px;">
            <div class="col-lg bordes pad">
                <img class="img-fluid" src="images/6926f3bc39a48d542e1da880741a1862.jpg" alt="imagen-casa" width="50px"
                    height="50px">
                <h5>Chalet #34256</h5>
            </div>
            <div class="col-lg bordes pad justify-content-center align-items-center d-flex">
                <div class="margen ">
                    <h5>Paso de la Patria, Corrientes</h5>
                </div>
            </div>
            <div class="col-lg bordes pad justify-content-center align-items-center d-flex">
                <div class="margen ">
                    <h5>$7.300.000,00</h5>
                </div>
            </div>
            <div class="col-lg bordes pad justify-content-center align-items-center d-flex">
                <div class="margen ">
                    <h5>Nueva, Venta</h5>
                </div>
            </div>
            <div class="col-lg justify-content-center align-items-center d-flex">
                <div class="margen ">
                    <a class="btn" data-toggle="modal" data-target="#exampleModal">
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor"
                            style="color: #70C6DB;" class="bi bi-eye-fill" viewBox="0 0 16 16">
                            <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                            <path
                                d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
                        </svg>
                    </a>

                    <a href="" class="btn" data-toggle="modal" data-target="#reporte">
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor"
                            class="bi bi-file-earmark-text" viewBox="0 0 16 16" style="color: #70C6DB;">
                            <path
                                d="M5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z" />
                            <path
                                d="M9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.5L9.5 0zm0 1v2A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z" />
                        </svg>
                    </a>
                </div>
            </div>
        </div>

        <div class="row bg-white text-center mb-3" style="border-radius: 20px;">
            <div class="col-lg bordes pad">
                <img class="img-fluid" src="images/apartma-3-balkon.jpg" alt="imagen-casa" width="50px" height="50px">
                <h5>Departamento #35207</h5>
            </div>
            <div class="col-lg bordes pad justify-content-center align-items-center d-flex">
                <div class="margen">
                    <h5>Resistencia, Chaco</h5>
                </div>
            </div>
            <div class="col-lg bordes pad justify-content-center align-items-center d-flex">
                <div class="margen">
                    <h5>$45.000,00</h5>
                </div>
            </div>
            <div class="col-lg bordes pad justify-content-center align-items-center d-flex">
                <div class="margen">
                    <h5>Remodelada, Alquiler</h5>
                </div>
            </div>
            <div class="col-lg justify-content-center align-items-center d-flex">
                <div class="margen">
                    <a class="btn" data-toggle="modal" data-target="#exampleModal">
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor"
                            style="color: #70C6DB;" class="bi bi-eye-fill" viewBox="0 0 16 16">
                            <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                            <path
                                d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
                        </svg>
                    </a>

                    <a href="" class="btn" data-toggle="modal" data-target="#reporte">
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor"
                            class="bi bi-file-earmark-text" viewBox="0 0 16 16" style="color: #70C6DB;">
                            <path
                                d="M5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z" />
                            <path
                                d="M9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.5L9.5 0zm0 1v2A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z" />
                        </svg>
                    </a>
                </div>
            </div>
        </div>

        <div class="row bg-white text-center mb-3" style="border-radius: 20px;">
            <div class="col-lg bordes pad">
                <img class="img-fluid" src="images/pexels-photo-3958958.jpeg" alt="imagen-casa" width="50px"
                    height="50px">
                <h5>Casa c/Garage #35656</h5>
            </div>
            <div class="col-lg bordes pad justify-content-center align-items-center d-flex">
                <div class="margen ">
                    <h5>Colonia Benitez, Chaco</h5>
                </div>
            </div>
            <div class="col-lg bordes pad justify-content-center align-items-center d-flex">
                <div class="margen ">
                    <h5>$55.000,00</h5>
                </div>
            </div>
            <div class="col-lg bordes pad justify-content-center align-items-center d-flex">
                <div class="margen ">
                    <h5>Remodelada, Alquiler</h5>
                </div>
            </div>
            <div class="col-lg justify-content-center align-items-center d-flex">
                <div class="margen ">
                    <a class="btn" data-toggle="modal" data-target="#exampleModal">
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor"
                            style="color: #70C6DB;" class="bi bi-eye-fill" viewBox="0 0 16 16">
                            <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                            <path
                                d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
                        </svg>
                    </a>

                    <a href="" class="btn" data-toggle="modal" data-target="#reporte">
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor"
                            class="bi bi-file-earmark-text" viewBox="0 0 16 16" style="color: #70C6DB;">
                            <path
                                d="M5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z" />
                            <path
                                d="M9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.5L9.5 0zm0 1v2A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z" />
                        </svg>
                    </a>
                </div>
            </div>
        </div>

        <div class="row bg-white text-center mb-3" style="border-radius: 20px;">
            <div class="col-lg bordes pad">
                <img class="img-fluid" src="images/ab.jpg" alt="imagen-casa" width="50px" height="50px">
                <h5>Monoambiente #36256</h5>
            </div>
            <div class="col-lg bordes pad justify-content-center align-items-center d-flex">
                <div class="margen">
                    <h5>Capital, Corrientes</h5>
                </div>
            </div>
            <div class="col-lg bordes pad justify-content-center align-items-center d-flex">
                <div class="margen ">
                    <h5>$33.000,00</h5>
                </div>
            </div>
            <div class="col-lg bordes pad justify-content-center align-items-center d-flex">
                <div class="margen ">
                    <h5>Nuevo, Alquiler</h5>
                </div>
            </div>
            <div class="col-lg justify-content-center align-items-center d-flex">
                <div class="margen">
                    <a class="btn" data-toggle="modal" data-target="#exampleModal">
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor"
                            style="color: #70C6DB;" class="bi bi-eye-fill" viewBox="0 0 16 16">
                            <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                            <path
                                d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
                        </svg>
                    </a>

                    <a href="" class="btn" data-toggle="modal" data-target="#reporte">
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor"
                            class="bi bi-file-earmark-text" viewBox="0 0 16 16" style="color: #70C6DB;">
                            <path
                                d="M5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z" />
                            <path
                                d="M9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.5L9.5 0zm0 1v2A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z" />
                        </svg>
                    </a>
                </div>
            </div>
        </div>

        <div class="row bg-white text-center mb-3" style="border-radius: 20px;">
            <div class="col-lg bordes pad">
                <img class="" src="images/photo-1560347876-aeef00ee58a1.jpg" alt="imagen-casa" width="50px"
                    height="50px">
                <h5>Depto. 6to Piso #33265</h5>
            </div>
            <div class="col-lg bordes pad justify-content-center align-items-center d-flex">
                <div class="margen ">
                    <h5>Fontana, Chaco</h5>
                </div>
            </div>
            <div class="col-lg bordes pad justify-content-center align-items-center d-flex">
                <div class="margen">
                    <h5>$22.000,00</h5>
                </div>
            </div>
            <div class="col-lg bordes pad justify-content-center align-items-center d-flex">
                <div class="margen">
                    <h5>Remodelada, Alquiler</h5>
                </div>
            </div>
            <div class="col-lg justify-content-center align-items-center d-flex">
                <div class="margen ">
                    <a class="btn" data-toggle="modal" data-target="#exampleModal">
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor"
                            style="color: #70C6DB;" class="bi bi-eye-fill" viewBox="0 0 16 16">
                            <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                            <path
                                d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
                        </svg>
                    </a>

                    <a href="" class="btn" data-toggle="modal" data-target="#reporte">
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor"
                            class="bi bi-file-earmark-text" viewBox="0 0 16 16" style="color: #70C6DB;">
                            <path
                                d="M5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z" />
                            <path
                                d="M9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.5L9.5 0zm0 1v2A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z" />
                        </svg>
                    </a>
                </div>
            </div>
        </div>

        <div class="row bg-white text-center" style="border-radius: 20px;">
            <div class="col-lg bordes pad">
                <img class="img-fluid" src="images/3kSAXE.jpg" alt="imagen-casa" width="50px" height="50px">
                <h5>Casa s/ Garage #35699</h5>
            </div>
            <div class="col-lg bordes pad justify-content-center align-items-center d-flex">
                <div class="margen ">
                    <h5>Resistencia, Chaco</h5>
                </div>
            </div>
            <div class="col-lg bordes pad justify-content-center align-items-center d-flex">
                <div class="margen ">
                    <h5>$6.335.000,00</h5>
                </div>
            </div>
            <div class="col-lg bordes pad justify-content-center align-items-center d-flex">
                <div class="margen ">
                    <h5>Remodelada, Venta</h5>
                </div>
            </div>
            <div class="col-lg justify-content-center align-items-center d-flex">
                <div class="margen ">
                    <a class="btn" data-toggle="modal" data-target="#exampleModal">
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor"
                            style="color: #70C6DB;" class="bi bi-eye-fill" viewBox="0 0 16 16">
                            <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                            <path
                                d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
                        </svg>
                    </a>

                    <a href="" class="btn" data-toggle="modal" data-target="#reporte">
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor"
                            class="bi bi-file-earmark-text" viewBox="0 0 16 16" style="color: #70C6DB;">
                            <path
                                d="M5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z" />
                            <path
                                d="M9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.5L9.5 0zm0 1v2A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z" />
                        </svg>
                    </a>
                </div>
            </div>
        </div>

        <div class="d-flex justify-content-center">
            <nav aria-label="Page navigation">
                <ul class="pagination mt-4">
                    <li class="page-item"><a class="page-link" href="#">Anterior</a></li>
                    <li class="page-item"><a class="page-link" href="#">1</a></li>
                    <li class="page-item"><a class="page-link" href="#">2</a></li>
                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                    <li class="page-item"><a class="page-link" href="#">Siguiente</a></li>
                </ul>
            </nav>
        </div>

    </div>

    <!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="pop-up-informacion"
        aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <img class="imagen-prod" src="skins/house_example_3.png" alt="imagen-casa" style="margin: 0;">
                    <h3 class="modal-title" id="pop-up-informacion" style="margin: 5% 0 0 2%;">Casa Residencial #35206
                    </h3>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <p>Av. Italia 905</p>
                    <p>Piso: -</p>
                    <p>Barrio: A.Mu.Doch</p>
                    <p>Resistencia</p>
                    <p>Chaco</p>
                    <div class="d-flex justify-content-end" style="margin-top: -10%;">
                        <button class="btn btn-success " data-dismiss="modal">DISPONIBLE</button>
                    </div>
                </div>
                <div class="modal-body" style="border-top: 1px solid #e9ecef;">
                    <h4>Informacion Locatario Actual</h4>
                    <p>Nombre Cliente: Oscar</p>
                    <p>Apellido Cliente: Fernandez -</p>
                    <p>Tipo de Cliente: Propietario</p>
                    <p>Fecha de Inicio: 01/10/2019</p>
                    <p>Fecha de Finalizacion: --</p>
                    <p>Costo de Venta: $4.450.000,00</p>
                    <p>Tipo: VENTA</p>
                </div>
            </div>
        </div>
    </div>

    <!-- Modal -->
    <div class="modal fade" id="reporte" tabindex="-1" role="dialog" aria-labelledby="pop-up-informacion"
        aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <img class="imagen-prod" src="skins/house_example_3.png" alt="imagen-casa" style="margin: 0;">
                    <h3 class="modal-title" id="pop-up-informacion" style="margin: 5% 0 0 2%;">Casa Residencial #35206
                    </h3>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <p>Av. Italia 905</p>
                    <p>Piso: -</p>
                    <p>Barrio: A.Mu.Doch</p>
                    <p>Resistencia</p>
                    <p>Chaco</p>
                    <div class="d-flex justify-content-end" style="margin-top: -10%;">
                        <button class="btn btn-success " data-dismiss="modal">DISPONIBLE</button>
                    </div>
                </div>
                <div class="modal-body" style="border-top: 1px solid #e9ecef;">
                    <h4>Informacion de Locatario</h4>
                    <p>Nombre Cliente: Matias</p>
                    <p>Apellido Cliente: Sanchez -</p>
                    <p>Tipo de Cliente: Propietario</p>
                    <p>Fecha de Inicio: 15/01/2018</p>
                    <p>Fecha de Finalizacion: 20/09/2019</p>
                    <p>Costo de Venta: $45.000,00</p>
                    <p>Tipo: ALQUILER</p>
                </div>

                <div class="modal-body" style="border-top: 1px solid #e9ecef;">
                    <p>Nombre Cliente: Julian</p>
                    <p>Apellido Cliente: García -</p>
                    <p>Tipo de Cliente: Propietario</p>
                    <p>Fecha de Inicio: 01/15/2018</p>
                    <p>Fecha de Finalizacion: 09/01/2018</p>
                    <p>Costo de Venta: $30.000,00</p>
                    <p>Tipo: ALQUILER</p>
                </div>


            </div>
        </div>
    </div>

    <!-- Script para que muestre los numeros en el listado de precios-->
    <script>
        addEventListener('load', inicio, false);

        function inicio() {
            document.getElementById('precio').addEventListener('change', cambioPrecio, false);
        }

        function cambioPrecio() {
            document.getElementById('pre').innerHTML = document.getElementById('precio').value;
        }
    </script>
        </div>
    );

} 