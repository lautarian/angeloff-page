import { Button, Grid, Typography } from "@mui/material";

export default function CustomCard({ propiedad }) {
  return (
    <Grid
      container
      direction="row"
      flexDirection="row"
      style={{
        height: "5rem",
        borderRadius: 10,
        backgroundColor: "#ffffff",
        marginTop: "1rem",
      }}
    >
      <Grid
        container
        item
        alignItems="center"
        justifyContent="center"
        style={{ width: "20%" }}
      >
        {" "}
        <Typography>{propiedad.cod_propiedad}</Typography>
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
        <Typography>{propiedad.disponibilidad}</Typography>
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
        <Typography>{propiedad.telefono}</Typography>
      </Grid>

      {/* <Grid container item>
        {" "}
        <Button>Ver</Button> <Button>Info</Button>
      </Grid> */}
    </Grid>
  );
}
