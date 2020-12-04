import { createMuiTheme } from "@material-ui/core/styles";
//Usando los colores de material en =>> customization =>> color
import purple from "@material-ui/core/colors/purple";

const theme = createMuiTheme({
  palette: {
    //ahora el color del primary es el orange
    primary: {
      main: purple[700],
      contrastText: "#fff",
    },
  },
});

export default theme;
