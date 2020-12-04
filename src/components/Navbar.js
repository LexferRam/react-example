import { Button, IconButton, makeStyles } from "@material-ui/core";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import React from "react";
import ListIcon from "@material-ui/icons/List";

const useStyles = makeStyles((theme) => ({
  menuButton: {
    //por defecto en spacing son 8px, al pasar 2 se multipplica por 2
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${240}px)`,
      display: "none",
    },
  },
  title: {
    flexGrow: 1,
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${240}px)`,
      marginLeft: 240,
    },
  },
}));

function Navbar(props) {
  const classes = useStyles();

  return (
    <AppBar className={classes.appBar}>
      <Toolbar>
        <IconButton
          aria-label="menu"
          color="inherit"
          className={classes.menuButton}
          onClick={() => props.accionAbrir()}
        >
          <ListIcon />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          Lexfer
        </Typography>
        <Button variant="text" color="inherit">
          Login
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
