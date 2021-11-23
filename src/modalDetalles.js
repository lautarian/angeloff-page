import { Grid, Typography } from "@mui/material";
import { borderRadius } from "@mui/system";


const Detalles=({propiedad})=>{ 
    console.log("asdf");
    return(
        
        <Grid
            container
            style={{height:"40rem", width:"35rem" ,backgroundColor:"#ffffff",position:"absolute",left:"35%",top:"30%",borderRadius:10, padding:"1rem"}}
    

        >
            <div class="modal-content">
                <div class="modal-header">
                    <img class="imagen-prod" src={propiedad.imagen} alt="imagen-casa" />
                    <h3 class="modal-title" id="pop-up-informacion" >Casa Residencial #35206
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
                    <div class="d-flex justify-content-end" >
                        <button class="btn btn-success " data-dismiss="modal">DISPONIBLE</button>
                    </div>
                </div>
                <div class="modal-body" >
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



            <Typography>
                {propiedad?.cod_propiedad}
            </Typography>

            

        </Grid>
    )
}

export default Detalles;