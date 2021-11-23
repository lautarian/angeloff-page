import { Grid, Typography } from "@mui/material";
import { borderRadius } from "@mui/system";


const Detalles=({propiedad})=>{ 
    console.log("asdf");
    return(
        
        <Grid
            container
            style={{height:"40rem", width:"35rem" ,backgroundColor:"#ffffff",position:"absolute",left:"35%",top:"30%",borderRadius:10, padding:"1rem"}}
    

        >
            



            <Typography>
                {propiedad?.cod_propiedad}
            </Typography>

            

        </Grid>
    )
}

export default Detalles;