import React, { Component } from "react";
import Card from "../driverCommon/card";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import profileImage from "../assests/avatar.png";

class Index extends Component {
  render() {
    return (
      <React.Fragment>
        <Grid container spacing={3}>
          <Grid item xs={3}>
            <img src={profileImage} width="50%" />
          </Grid>
          <Grid item xs={3}>
            <Typography align="center" variant="h5" component="h2">
              First Last Name
            </Typography>
          </Grid>
          <Grid item xs={3}></Grid>
          <Grid item xs={3}></Grid>
          <Grid item xs={6}></Grid>
          <Grid item xs={6}>
            aaaaaa
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}

export default Index;
