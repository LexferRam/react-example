import React from "react";
import { Box, Grid } from "@material-ui/core";

function Cajita() {
  return (
    <div>
      <Grid container>
        <Grid item xs={12} sm={6} md={4}>
          <Box border={2}>x12</Box>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Box border={2}>x12</Box>
        </Grid>
      </Grid>
    </div>
  );
}

export default Cajita;

{
  /* <Box color="primary.main">caja</Box>
<Box color="primary.main">caja</Box>
<Box
  color="primary.contrastText"
  bgcolor="primary.main"
  m={2}
  p={5}
  border={2}
  borderColor="error.main"
>
  caja
</Box> */
}
