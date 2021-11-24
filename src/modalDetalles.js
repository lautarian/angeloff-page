import { Grid, Typography } from "@mui/material";
import { borderRadius } from "@mui/system";


const Detalles=({propiedad})=>{ 
    console.log("asdf");
    return(
        
        <Grid
            container
            style={{height:"35rem", width:"30rem" ,backgroundColor:"#ffffff",position:"absolute",left:"35%",top:"30%",borderRadius:10, padding:"1rem"}}
    

        >
            <div class="modal-content">
                <Grid
                    container
                    item
                    justifyContent="between"
                    alignItems="center"
                    justifyContent="start"
                    >
                    <img  style={{display:"inline"}} src={propiedad.imagen}  width="120px" height="120px" alt="imagen-casa" />
                    
                    
                    <div style={{marginLeft:'2rem'}}>
                    <h3 class="modal-title" id="pop-up-informacion" > {propiedad?.tipo_prop} </h3>
                    <h3 class="modal-title" id="pop-up-informacion" ># {propiedad?.cod_propiedad} </h3>
                    </div>
                   
                </Grid>
               
                <div class="modal-body">
                    <p>Av. Italia 905</p>
                    <p>Piso: -</p>
                    <p>Barrio: -</p>
                    <p>Direccion: {propiedad?.direccion}</p>
                    <p>Ubicacion: {propiedad?.ubicacion}</p>
                    <p>Costo de Venta: ${propiedad?.precio}</p>
                    <p>Tipo: {propiedad?.tipo}</p>
                </div>

                {
                    propiedad?.disponibilidad ? (

                        <div >
                            <button style={{backgroundColor:"#30BB3A88", borderColor:"#ffffff"}} class="btn btn-success " data-dismiss="modal">DISPONIBLE</button>
                        </div>
                    ):(
                        <div >
                            <button style={{backgroundColor:"#EE361D88", borderColor:"#ffffff"}} class="btn btn-success " data-dismiss="modal">NO DISPONIBLE</button>
                        </div>
                    )
                }
            </div>



           
            

        </Grid>
    )
}

export default Detalles;