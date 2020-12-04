import React from "react";
import { Hidden, makeStyles } from "@material-ui/core";
import Navbar from "./Navbar";
import Cajon from "./Cajon";
import Cajita from "./Cajita";

const estilos = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
}));

function Contenedor() {
  const clases = estilos();
  const [abrir, setAbrir] = React.useState(false);

  const accionAbrir = () => {
    setAbrir(!abrir);
  };

  return (
    <div className={clases.root}>
      <Navbar accionAbrir={accionAbrir} />

      <Hidden xsDown>
        <Cajon variant="permanent" open={true} />
      </Hidden>

      <Hidden smUp>
        <Cajon variant="temporary" open={abrir} onClose={accionAbrir} />
      </Hidden>

      <div className={clases.content}>
        <div className={clases.toolbar}></div>
        <Cajita />
      </div>
    </div>
  );
}

export default Contenedor;

// <NavBar />
// {/* Boton material ui */}
// <Button
//   color="primary"
//   variant="outlined"
//   size="small"
//   startIcon={<DeleteIcon />}
// >
//   Delete
// </Button>
// {/* icono Boton */}
// <IconButton aria-label="alarm">
//   <AddAlarmIcon />
// </IconButton>
// {/* tipografia con material UI */}
// <Typography variant="body1" color="primary" align="center">
//   hello world
// </Typography>

// {/* Boton personalizado con material UI */}
// <Button className={classes.btn_personalizado}>Btn Personalizado</Button>
// <Listas />

// <Oculto />
