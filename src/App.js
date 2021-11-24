import "./App.css";

import {
  Button,
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React , { useEffect, useState, Component } from "react";
import CustomCard from "./customCard";
import axios from "axios";
import Detalles from "./modalDetalles";
import { Link } from "react-router-dom";


export const App=()=> {
    
  const [propiedades, setPropiedades] = useState([]);
  const [Tablapropiedades, setTablaPropiedades] = useState([]);
  const [busqueda, setBusqueda] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  
  
  
  
  const [tipoSeleccionado, setTipoSeleccionado] = useState(0);
  const [ubicacionSeleccionada, setUbicacionSeleccionada] = useState(0);
  const [precioSeleccionado, setPrecioSeleccionado] = useState(0);
  const [estadoSeleccionado, setEstadoSeleccionado] = useState(0);
  const [propiedadSeleccionada, setPropiedadSeleccionado] = useState();

  const onCloseModal = ()=>{
    setModalOpen(false);
  }  
  const visualizarInfo = (unaPropiedad)=>{
    setPropiedadSeleccionado(unaPropiedad)
    setModalOpen(true);
    console.log("Una propiedad", unaPropiedad);
    };

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
    filtroSelect(tipoSeleccionado,ubicacionSeleccionada,precioSeleccionado,e);

  };

  const handleChangeBusqueda = (e) => {
    setBusqueda(e);
    filtrar(e);
  };

  const filtrar =(terminoBusqueda) =>{
      var ResultadoBusqueda=Tablapropiedades.filter((elemento)=>{
          if(elemento.cod_propiedad.toString().includes(terminoBusqueda)){
              return elemento;
          }
      });
      setPropiedades(ResultadoBusqueda);
  } 





  const filtroSelect =(terminoTipo,terminoUbi,terminoPrecio,terminoEstado) =>{
      
    
    Resultado=Tablapropiedades;
    if (terminoTipo!=0){

        var Resultado=Tablapropiedades.filter((elemento)=>{
            if((elemento.tipo_prop.toString().includes(terminoTipo))){
                return elemento;
            }
          });
    }


    if (terminoUbi!=0){

        var Resultado=Resultado.filter((elemento)=>{
            if((elemento.ubicacion.toString().includes(terminoUbi))){
                return elemento;
            }
          });
    }

    if (terminoPrecio!=0){

        if (terminoPrecio==1){
        var Resultado=Resultado.filter((elemento)=>{
            if((elemento.precio > 0) && (elemento.precio <= 1000000)){
                return elemento;
            }
          })
        }else if(terminoPrecio==2){
            var Resultado=Resultado.filter((elemento)=>{
                if((elemento.precio > 1000001) && (elemento.precio <= 2000000)){
                    return elemento;
                }
              })
        }else if(terminoPrecio==3){
            var Resultado=Resultado.filter((elemento)=>{
                if((elemento.precio > 2000001) && (elemento.precio <= 4000000)){
                    return elemento;
                }
                })
        }else {
            var Resultado=Resultado.filter((elemento)=>{
                if(elemento.precio > 4000000) {
                    return elemento;
                }
                })
        };
    }

    if (terminoEstado!=0){

        var Resultado=Resultado.filter((elemento)=>{
            if((elemento.tipo.toString().includes(terminoEstado))){
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
                    
                <Link className="navbar-brand ml-3 mt-2 " to="/Comercializar">
                    <img  src={"./img/LOGO3.png"} width="200" alt="Logo Domus"  id="img-logo"/>
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
                    label="Buscar por Codigo propiedad"
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
                <InputLabel style={{color: "black",fontFamily: 'DM Sans'}} id="demo-simple-select-label">Tipo</InputLabel>
                <Select
                style={{backgroundColor:"#ffffff88", fontFamily: 'DM Sans'}}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Tipo"
                value={tipoSeleccionado}
                onChange={(e) => handleChangeTipo(e.target.value)}
                >
                <MenuItem value={0} style={{fontFamily: 'DM Sans'}}>-TIPO DE PROPIEDAD-</MenuItem>
                <MenuItem value={'Casa'} style={{fontFamily: 'DM Sans'}}>Casa</MenuItem>
                <MenuItem value={'Chalet'} style={{fontFamily: 'DM Sans'}}>Chalet</MenuItem>
                <MenuItem value={'Departamento'} style={{fontFamily: 'DM Sans'}}>Departamento</MenuItem>
                <MenuItem value={'Monoambiente'} style={{fontFamily: 'DM Sans'}}>Monoambiente</MenuItem>
                </Select>
            </FormControl>




            <FormControl
                size="small"
                style={{ width: "15rem", marginTop: "2rem" }}
            >
                <InputLabel id="demo-simple-select-label" style={{color: "black",fontFamily: 'DM Sans'}}>Ubicacion</InputLabel>
                <Select
                style={{backgroundColor:"#ffffff88", fontFamily: 'DM Sans'}}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Ubicacion"
                value={ubicacionSeleccionada}
                onChange={(e) => handleChangeUbicacion(e.target.value)}
                >
                <MenuItem value={0} style={{fontFamily: 'DM Sans'}}>-UBICACION-</MenuItem>
                <MenuItem value={'Chaco'} style={{fontFamily: 'DM Sans'}}>Chaco</MenuItem>
                <MenuItem value={'Corrientes'} style={{fontFamily: 'DM Sans'}}>Corrientes</MenuItem>
                <MenuItem value={'Mendoza'} style={{fontFamily: 'DM Sans'}}>Mendoza</MenuItem>
                <MenuItem value={'San Luis'} style={{fontFamily: 'DM Sans'}}>San Luis</MenuItem>
                <MenuItem value={'Misiones'} style={{fontFamily: 'DM Sans'}}>Misiones</MenuItem>
                <MenuItem value={'Formosa'} style={{fontFamily: 'DM Sans'}}>Formosa</MenuItem>


                </Select>
            </FormControl>
                
            <FormControl
                size="small"
                style={{ width: "15rem", marginTop: "2rem" }}
            >
                <InputLabel style={{color: "black",fontFamily: 'DM Sans'}} id="demo-simple-select-label">Precio</InputLabel>
                <Select
                style={{backgroundColor:"#ffffff88", fontFamily: 'DM Sans'}}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Precio"
                value={precioSeleccionado}
                onChange={(e) => handleChangePrecio(e.target.value)}
                >
                <MenuItem value={0} style={{fontFamily: 'DM Sans'}}>-PRECIO-</MenuItem>
                <MenuItem value={1} style={{fontFamily: 'DM Sans'}}>0 - 1.000.000 ARS </MenuItem>
                <MenuItem value={2} style={{fontFamily: 'DM Sans'}}>1.000.001 - 2.000.000 ARS</MenuItem>
                <MenuItem value={3} style={{fontFamily: 'DM Sans'}}>2.000.001 - 4.000.000 ARS</MenuItem>
                <MenuItem value={4} style={{fontFamily: 'DM Sans'}}>4.000.001 - 9.000.000 ARS</MenuItem>
                </Select>
            </FormControl>

            <FormControl
                size="small"
                style={{ width: "15rem", marginTop: "2rem" }}
            >
                <InputLabel style={{color: "black", fontFamily: 'DM Sans'}} id="demo-simple-select-label">Estado</InputLabel>
                <Select
                style={{backgroundColor:"#ffffff88", fontFamily: 'DM Sans'}}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Estado"
                value={estadoSeleccionado}
                onChange={(e) => handleChangeEstado(e.target.value)}
                >
                <MenuItem value={0} style={{fontFamily: 'DM Sans'}}>-ESTADO-</MenuItem>
                <MenuItem value={'Alquiler'} style={{fontFamily: 'DM Sans'}}>Alquiler</MenuItem>
                <MenuItem value={'Venta'} style={{fontFamily: 'DM Sans'}}>Venta</MenuItem>
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
                <CustomCard propiedad={propiedad} visibilizar={visualizarInfo}/>
                </>
            ))
            ) : (
            <Typography style={{color: "white"}}>No se encontraron propiedades .-</Typography>
            )}
        </Grid>





        </div>






    
    
           
    </body>
     
    <Modal
        open={modalOpen}
        onClose={onCloseModal}
    
    
    >


        <Detalles propiedad={propiedadSeleccionada && propiedadSeleccionada} />
    </Modal>
    
    </div>);
}

export default App;
