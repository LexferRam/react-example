import React from "react";
// import { Button, IconButton, Typography } from "@material-ui/core";
// import DeleteIcon from "@material-ui/icons/Delete";
// import AddAlarmIcon from "@material-ui/icons/AddAlarm";
import { makeStyles } from "@material-ui/core/styles";
// import Listas from "./components/Listas";
//Components
import NavBar from "./components/Navbar";
// import del tema de la app
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./temaConfig";
// import Oculto from "./components/Oculto";
import Contenedor from "./components/Contenedor";

const useStyle = makeStyles({
  btn_personalizado: {
    background: "#5f2c82",
    background: "-webkit-linear-gradient(to right, #5f2c82, #49a09d)",
    background: "linear-gradient(to right, #5f2c82, #49a09d)",
    // background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 48,
    padding: "0 30px",
  },
});

function App() {
  const classes = useStyle();

  return (
    <ThemeProvider theme={theme}>
      <Contenedor />
    </ThemeProvider>
  );
}

export default App;
