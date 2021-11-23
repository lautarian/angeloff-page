import "./App.css";
import {
  Button,
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React , { useEffect, useState, Component } from "react";
import CustomCard from "./customCard";
import axios from "axios";


function App() {
  const [propiedades, setPropiedades] = useState([]);
  const [Tablapropiedades, setTablaPropiedades] = useState([]);
  const [busqueda, setBusqueda] = useState([]);


  const [tipoSeleccionado, setTipoSeleccionado] = useState(0);
  const [ubicacionSeleccionada, setUbicacionSeleccionada] = useState(0);
  const [precioSeleccionado, setPrecioSeleccionado] = useState(0);
  const [estadoSeleccionado, setEstadoSeleccionado] = useState(0);

  const handleChangeTipo = (e) => {
    setTipoSeleccionado(e);

    filtroSelect(e,ubicacionSeleccionada,precioSeleccionado,estadoSeleccionado);
  };

  const handleChangeUbicacion = (e) => {
    setUbicacionSeleccionada(e);
    filtroSelect(tipoSeleccionado,e,precioSeleccionado,estadoSeleccionado);

  };

  const handleChangePrecio = (e) => {
    setPrecioSeleccionado(e);
    filtroSelect(tipoSeleccionado,ubicacionSeleccionada,e,estadoSeleccionado);

  };

  const handleChangeEstado = (e) => {
    setEstadoSeleccionado(e);
/*     filtroSelect(tipoSeleccionado,ubicacionSeleccionada,precioSeleccionado,e);
 */
  };

  const handleChangeBusqueda = (e) => {
    setBusqueda(e);
    filtrar(e);
  };

  const filtrar =(terminoBusqueda) =>{
      var ResultadoBusqueda=Tablapropiedades.filter((elemento)=>{
          if(elemento.id.toString().includes(terminoBusqueda)){
              return elemento;
          }
      });
      setPropiedades(ResultadoBusqueda);
  } 





  const filtroSelect =(terminoTipo,terminoUbi,terminoPrecio,terminoEstado) =>{
      
    
    Resultado=Tablapropiedades;
    if (terminoTipo!=0){

        var Resultado=Tablapropiedades.filter((elemento)=>{
            if((elemento.gender.toString().includes(terminoTipo))){
                return elemento;
            }
          });
    }


    if (terminoUbi!=0){

        var Resultado=Resultado.filter((elemento)=>{
            if((elemento.species.toString().includes(terminoUbi))){
                return elemento;
            }
          });
    }

    if (terminoPrecio!=0){

        var Resultado=Resultado.filter((elemento)=>{
            if((elemento.type.toString().includes(terminoPrecio))){
                return elemento;
            }
          });
    }

    if (terminoEstado!=0){

        var Resultado=Resultado.filter((elemento)=>{
            if((elemento.gender.toString().includes(terminoEstado))){
                return elemento;
            }
          });
    }





      console.log(terminoTipo,terminoUbi,terminoPrecio,terminoEstado);
      setPropiedades(Resultado);

  }







  const cargarDatos = async () => {
    try {
      const res = await axios.get(
          "http://localhost:8080/api/propiedad/"
        /* "https://rickandmortyapi.com/api/character/?page=20" */
/*         "https://juanluucas.com.ar" */
      );
      if (res.status === 200) {
        console.log(res.data);
        setPropiedades(res.data);
        setTablaPropiedades(res.data);

      }
    } catch (error) {
      console.log(error);
    }
  };



  useEffect(() => {
    // se ejecuta cuando una variable de las de abajo cambia y en la primer carga de la pagina
    cargarDatos();


  }, []);
  // aca arriba se lsitan las variables que controla

  return (
    <div>
 
    
    <div>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta http-equiv="content-type" content="text/html" charset="utf-8" />
        <title>Inmobiliaria Domus - Comercial</title>
        <link rel="icon" type="image/png" href="./img/favicon.ico" />
    
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
            integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"/>
        <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
            integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
            crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
            integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
            crossorigin="anonymous"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"
            integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
            crossorigin="anonymous"></script>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link
            href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap"
            rel="stylesheet"/>
    
        <link rel="StyleSheet" href="LOGIN/static/css/historico-propiedades.css" />
    
        <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"
            integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p"
            crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.min.js"
            integrity="sha384-lpyLfhYuitXl2zRZ5Bn2fqnhNAKOAaM/0Kr9laMspuaMiZfGmfwRNFh8HlMy49eQ"
            crossorigin="anonymous"></script>
    
    </div>
    
    
    
    <body>
        <nav className="navbar sticky-top navbar-light navbar-expand-lg"> 
                    
                <a className="navbar-brand ml-3 mt-2 " href="">
                    <img  src={"./img/LOGO3.png"} width="200" alt="Logo Domus"  id="img-logo"/>
                </a>
                <button className="navbar-toggler btn-menu ml-auto" type="button" data-bs-toggle="collapse" 
                data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" 
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <div className="navbar-nav ml-auto align-items-center">
                        <a className="nav-link text-dark ml-3 mr-3 font-weight-bold" href="Reportes.html">Generar Reportes</a>
                        <a className="nav-link text-dark ml-3 mr-3 font-weight-bold" href="Mov.historicos.html">Archivo de Propiedades</a>
                        <a className="nav-link text-dark ml-3 mr-3 font-weight-bold" href="Consultar-cliente.html">Archivo de Clientes</a>
                        <a className="nav-link text-dark ml-3 mr-3 font-weight-bold" href="index.html">Cerrar Sesion</a>
    
    
                        
                    </div>
                </div>
        </nav>
    




        <div className="titulos">
            <h1 className=" text-white" id="cat_prop"><b>Histórico Propiedades</b></h1>
            <hr className="solid"/>
            <h2 className=" text-white"  id="sub_prop" >Listado del archivo historico de propiedades</h2>
        </div>
    



        {/*ACA EMPIEZA LA PARTE DE REACT, BUSCAR Y FILTROS Y GRILLA  */}



        <div className="container">
    

            <Grid container direction="column" justifyContent="flex-start">
        

           <Grid
           container
           direction="row"
           justifyContent="end">

               
               <TextField 
                    size="small"
                    label="Buscar por ID"
                    style={{width: "10 rem", borderRadius:5,backgroundColor: "#ffffff88"}}
                    variant="outlined"
                    onChange={(e) => handleChangeBusqueda(e.target.value)}
               />


            </Grid>



            <Grid container item justifyContent="space-between">
            <FormControl
                variant= "outlined"
                size="small"
                style={{ width: "15rem", marginTop: "2rem" }}
            >
                <InputLabel style={{color: "black"}} id="demo-simple-select-label">Tipo</InputLabel>
                <Select
                style={{backgroundColor:"#ffffff88"}}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Tipo"
                value={tipoSeleccionado}
                onChange={(e) => handleChangeTipo(e.target.value)}
                >
                <MenuItem value={0}>-TIPO DE PROPIEDAD-</MenuItem>
                <MenuItem value={'Female'}>Female</MenuItem>
                <MenuItem value={'Male'}>Male</MenuItem>
                <MenuItem value={'Departamento'}>Departamento</MenuItem>
                <MenuItem value={'Monoambiente'}>Monoambiente</MenuItem>
                </Select>
            </FormControl>




            <FormControl
                size="small"
                style={{ width: "15rem", marginTop: "2rem" }}
            >
                <InputLabel id="demo-simple-select-label" style={{color: "black"}}>Ubicacion</InputLabel>
                <Select
                style={{backgroundColor:"#ffffff88"}}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Ubicacion"
                value={ubicacionSeleccionada}
                onChange={(e) => handleChangeUbicacion(e.target.value)}
                >
                <MenuItem value={0}>-UBICACION-</MenuItem>
                <MenuItem value={'Alien'}>Alien</MenuItem>
                <MenuItem value={'Human'}>Human</MenuItem>
                <MenuItem value={'Humanoid'}>Humanoid</MenuItem>
                <MenuItem value={'Monoambiente'}>Monoambiente</MenuItem>
                </Select>
            </FormControl>
                
            <FormControl
                size="small"
                style={{ width: "15rem", marginTop: "2rem" }}
            >
                <InputLabel style={{color: "black"}} id="demo-simple-select-label">Precio</InputLabel>
                <Select
                style={{backgroundColor:"#ffffff88"}}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Precio"
                value={precioSeleccionado}
                onChange={(e) => handleChangePrecio(e.target.value)}
                >
                <MenuItem value={0}>-PRECIO-</MenuItem>
                <MenuItem value={'Dog'}>Dog </MenuItem>
                <MenuItem value={'Giant'}>Giant</MenuItem>
                <MenuItem value={3}>2.000.001 - 4.000.000 ARS</MenuItem>
                <MenuItem value={4}>4.000.001 - 9.000.000 ARS</MenuItem>
                </Select>
            </FormControl>

            <FormControl
                size="small"
                style={{ width: "15rem", marginTop: "2rem" }}
            >
                <InputLabel style={{color: "black"}} id="demo-simple-select-label">Estado</InputLabel>
                <Select
                style={{backgroundColor:"#ffffff88"}}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Estado"
                value={estadoSeleccionado}
                onChange={(e) => handleChangeEstado(e.target.value)}
                >
                <MenuItem value={0}>-ESTADO-</MenuItem>
                <MenuItem value={1}>Nueva-Alquiler</MenuItem>
                <MenuItem value={2}>Nueva-Venta</MenuItem>
                <MenuItem value={3}>Remodelada-Alquiler</MenuItem>
                <MenuItem value={4}>Remodelada-Venta</MenuItem>
                </Select>
            </FormControl>
            </Grid>
        </Grid>


            
        <Grid
            container
            style={{
            backgroundColor: "#ffffff00",
            marginTop: "3rem",
            maxHeight: "30rem",
            overflow: "scroll",
            padding: "1rem",
            minHeight:"10rem",
            }}
        >
            {propiedades?.length > 0 ? (
            propiedades.map((propiedad) => (
                <>
                <CustomCard propiedad={propiedad} />
                </>
            ))
            ) : (
            <Typography style={{color: "white"}}>No se encontraron propiedades .-</Typography>
            )}
        </Grid>










        {/*ACA EMPIEZA EL FOOTERSS  */}




    
        
    
        </div>
    
       
        <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="pop-up-informacion"
            aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <img className="imagen-prod" src="./img/house_example_3.png" alt="imagen-casa" />
                        <h3 className="modal-title" id="pop-up-informacion" >Casa Residencial #35206
                        </h3>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <p>Av. Italia 905</p>
                        <p>Piso: -</p>
                        <p>Barrio: A.Mu.Doch</p>
                        <p>Resistencia</p>
                        <p>Chaco</p>
                        <div className="d-flex justify-content-end" >
                            <button className="btn btn-success " data-dismiss="modal">DISPONIBLE</button>
                        </div>
                    </div>
                    <div className="modal-body" >
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
    
        <div className="modal fade" id="reporte" tabindex="-1" role="dialog" aria-labelledby="pop-up-informacion"
            aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <img className="imagen-prod" src="./img/house_example_3.png" alt="imagen-casa" />
                        <h3 className="modal-title" id="pop-up-informacion" >Casa Residencial #35206
                        </h3>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <p>Av. Italia 905</p>
                        <p>Piso: -</p>
                        <p>Barrio: A.Mu.Doch</p>
                        <p>Resistencia</p>
                        <p>Chaco</p>
                        <div className="d-flex justify-content-end" >
                            <button className="btn btn-success " data-dismiss="modal">DISPONIBLE</button>
                        </div>
                    </div>
                    <div className="modal-body" >
                        <h4>Informacion de Locatario</h4>
                        <p>Nombre Cliente: Matias</p>
                        <p>Apellido Cliente: Sanchez -</p>
                        <p>Tipo de Cliente: Propietario</p>
                        <p>Fecha de Inicio: 15/01/2018</p>
                        <p>Fecha de Finalizacion: 20/09/2019</p>
                        <p>Costo de Venta: $45.000,00</p>
                        <p>Tipo: ALQUILER</p>
                    </div>
    
                    <div className="modal-body" >
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
     

    <Grid xl='12' lg='12' md='12' sm='12' xs='12'>
        <footer className="   border-top">
            <div className="container-fluid">
                <div className="row foot-top"></div>
            </div>
            <div className="container-fluid">

                <div className="row mt-3 ">
                    <div className="col-12 col-md text-center">
                        <img className="ml-3 mb-2 img-fluid" src="images/logo3_2.png" alt="" width="300"/>
                        <br/>

                        <div className="col-10  ml-auto mr-auto">
                            <p className=" mb-3 text-white font-italic font-weight-bold text-md"> Nos comprometemos a
                                materializar el hogar de sus sueños</p>

                        </div>

                        <div>
                            <i className="fab fa-cc-paypal fa-3x mr-3 ml-3"></i>
                            <i className="fab fa-cc-visa fa-3x mr-3 ml-3"></i>
                            <i className="fab fa-cc-mastercard fa-3x mr-3 ml-3"></i>
                        </div>
                    </div>
                    <div className="col-6 col-md">
                        <h5>Sobre Nosotros</h5>
                        <ul className="list-unstyled text-small">
                            <li className="mb-3"><a className="link-secondary text-decoration-none text-white" href="#">Métodos
                                    de
                                    Pago</a></li>
                            <li className="mb-3"><a className="link-secondary text-decoration-none text-white" href="#">Términos
                                    y
                                    Condiciones</a></li>
                            <li className="mb-3"><a className="link-secondary text-decoration-none text-white"
                                    href="NuestroTeam.html">Nuestro Equipo</a></li>
                        </ul>
                    </div>
                    <div className="col-6 col-md">
                        <h5>Contacto</h5>
                        <ul className="list-unstyled text-small">
                            <li className="mb-3"><a className="link-secondary text-decoration-none text-white"
                                    href="#">Contactanos
                                    Via Web</a></li>
                            <li className="mb-3"><a className="link-secondary text-decoration-none text-white" href="#">TEL:
                                    3624-665582</a></li>
                            <li className="mb-3">EMAIL:<a
                                    className="link-secondary text-decoration-none text-white text-break-all"
                                    href="mailto:info@inmobiliariadomus.com">info@inmobiliariadomus.com </a></li>
                        </ul>
                    </div>
                    <div className="col-6 col-md">
                        <h5>Nuestra Direccion</h5>
                        <ul className="list-unstyled text-small">
                            <li className="mb-3"><a className="link-secondary text-decoration-none text-white" href="#">French
                                    450</a></li>
                            <li className="mb-3"><a className="link-secondary text-decoration-none text-white"
                                    href="#">Resistencia,
                                    Chaco - Argentina</a></li>
                            <li className="mb-3 "> <i className="fab fa-facebook fa-3x  mr-3  "></i>

                                <i className="fab fa-instagram fa-3x mr-3 ml-1"></i>

                                <i className="fab fa-twitter-square fa-3x mr-3 ml-1"></i>

                                <i className="fab fa-youtube-square fa-3x mr-3 ml-1"></i>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="row footer-total mt-3">
                    <div className="col-md-12 text-center linea1 mt-3 mb-3">
                        <div className="copyright">
                            <p className="text-light ">© <span>2021</span> <a href="#" className="transition text-white ">Domus
                                    Inc.
                                    - Grupo 3 </a>- All rights reserved .-</p>
                        </div>
                    </div>
                </div>

            </div>
        </footer>


    </Grid>


    
    
           
    </body>
     
    
    
    </div>);
}

export default App;
