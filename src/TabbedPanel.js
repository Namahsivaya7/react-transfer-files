import { Box, Grid, Paper, Checkbox } from "@mui/material";
import * as React from "react";

const HOME1 = "HOME";
const PROFILE1 = "PROFILE";
const CONTACTS1 = "CONTACTS";

export default class TabedPanel extends React.Component {
  constructor() {
    super();
    this.state = {
      active: HOME1,
    };
  }

  render() {
    return (
      <Box>
        <Grid container>
          <Grid item>
            <Checkbox />
            <button onClick={() => this.setState({ active: HOME1 })}>
              home
            </button>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item>
            <Checkbox />
            <button onClick={() => this.setState({ active: PROFILE1 })}>
              Profile
            </button>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item>
            <Checkbox />
            <button onClick={() => this.setState({ active: CONTACTS1 })}>
              contacts
            </button>
          </Grid>
        </Grid>
      </Box>
    );
  }
}