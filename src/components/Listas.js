import React from "react";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@material-ui/core";
import AdbIcon from "@material-ui/icons/Adb";
import AppleIcon from "@material-ui/icons/Apple";

function Listas() {
  return (
    <div>
      <List compoenents="nav">
        <ListItem button>
          <ListItemIcon>
            <AdbIcon />
          </ListItemIcon>
          <ListItemText primary="Mi 1er elemento" />
        </ListItem>

        <ListItem button>
          <ListItemIcon>
            <AppleIcon />
          </ListItemIcon>
          <ListItemText primary="Mi 2do elemento" />
        </ListItem>
      </List>

      <Divider />
    </div>
  );
}

export default Listas;
