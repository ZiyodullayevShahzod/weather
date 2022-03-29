import React from "react";
import { Grid } from "@mui/material";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";

function Home(props) {
  const { currentLocation, setCurrentLocation, select } = props;

  return (
    <Grid container>
      <LeftSide currentLocation={currentLocation} />
      <RightSide select={select} setCurrentLocation={setCurrentLocation} />
    </Grid>
  );
}

export default Home;
