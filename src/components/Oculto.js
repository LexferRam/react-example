import React from "react";
import { Typography, withWidth, Hidden, Button } from "@material-ui/core";

function Oculto(props) {
  return (
    <div>
      <Typography variant="h6">Ancho{props.width}</Typography>

      {/* xsDown: Oculta cuando en la pantalla sea menor igual a xs */}
      {/* mdUp: Oculta cuando en la pantalla sea mayor igual a md */}
      {/* only="lg": Oculta cuando en la pantalla en lg */}
      {/* only="["lg","xs"]" Oculta cuando la pantalla sea xs o lg */}
      <Hidden xsDown>
        <Button variant="text" color="primary">
          BTN
        </Button>
      </Hidden>
    </div>
  );
}

export default withWidth()(Oculto);
