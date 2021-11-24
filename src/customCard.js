import { Button, Grid, IconButton, Typography } from "@mui/material";
import Visibility from "@material-ui/icons/Visibility";
import { borderRight } from "@mui/system";
import { borders } from '@mui/system';


export default function CustomCard({ propiedad,visibilizar }) {
  return (
    <Grid
      container
      direction="row"
      flexDirection="row"
      style={{
        height: "6rem",
        borderRadius: 10,
        backgroundColor: "#ffffff",
        marginTop: "1rem",
      }}
    >
      <Grid
        container
        direction="column"
        item
        alignItems="center"
        justifyContent="center"
        style={{ width: "20%" }}
        
      >
        
      
        <img className="" width="60px" height="50px" src={propiedad.imagen} />
        
    
        
     

          <Typography color="#000000" >{propiedad.tipo_prop}</Typography>

          <Typography># {propiedad.cod_propiedad}</Typography>

     

        
      
      </Grid>




      <Grid
        container
        item
        alignItems="center"
        justifyContent="center"
        style={{ width: "20%" }}
      >
        <Typography>{propiedad.ubicacion}</Typography>
      </Grid>
      <Grid
        container
        item
        alignItems="center"
        justifyContent="center"
        style={{ width: "20%" }}
      >
        <Typography>$ {propiedad.precio}</Typography>
      </Grid>
      <Grid
        container
        item
        alignItems="center"
        justifyContent="center"
        style={{ width: "20%" }}
      >
        <Typography>{propiedad.tipo}</Typography>
      </Grid>
      <Grid
        container
        item
        alignItems="center"
        justifyContent="center"
        style={{ width: "20%" }}
      >
          <IconButton onClick={()=> visibilizar(propiedad) }> <Visibility style={{color:"#70C6DB"}} /> </IconButton>
      </Grid>

      {/* <Grid container item>
        {" "}
        <Button>Ver</Button> <Button>Info</Button>
      </Grid> */}
    </Grid>
  );
}
