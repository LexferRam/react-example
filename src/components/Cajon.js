import React from "react";
import { makeStyles, Drawer, Divider } from "@material-ui/core";
import Listas from "./Listas";

const drawerWidth = 240;

const estilos = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: 240,
  },
  toolbar: theme.mixins.toolbar,
}));

function Cajon(props) {
  const clases = estilos();

  return (
    <div>
      <Drawer
        className={clases.drawer}
        classes={{ paper: clases.drawerPaper }}
        anchor="left"
        variant={props.variant}
        open={props.open}
        onClose={props.onClose ? props.onClose : null}
      >
        <div className={clases.toolbar}></div>
        <Divider />
        <Listas />
      </Drawer>
    </div>
  );
}

export default Cajon;
