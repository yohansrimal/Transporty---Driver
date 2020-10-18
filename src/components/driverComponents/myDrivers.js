import React, { Component } from "react";
import Card from "../driverCommon/driverCard";
import Grid from "@material-ui/core/Grid";
import LaunchIcon from "@material-ui/icons/Launch";
import Button from "@material-ui/core/Button";
import AddToPhotos from "@material-ui/icons/AddToPhotos";
import Typography from "@material-ui/core/Typography";

class Index extends Component {
  render() {
    return (
      <React.Fragment>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography align="right">
              <Button variant="contained" color="default">
                Add Driver &nbsp;
                <AddToPhotos />
              </Button>
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <Card
              name="Kamal"
              phoneNumber="012-3456789"
              busNumber="134"
              launch={LaunchIcon}
            />
          </Grid>
          <Grid item xs={3}>
            <Card
              name="Nimal"
              phoneNumber="012-3456789"
              busNumber="134"
              launch={LaunchIcon}
            />
          </Grid>
          <Grid item xs={3}>
            <Card
              name="Laxman"
              phoneNumber="012-3456789"
              busNumber="134"
              launch={LaunchIcon}
            />
          </Grid>
          <Grid item xs={3}>
            <Card
              name="Nipun"
              phoneNumber="012-3456789"
              busNumber="134"
              launch={LaunchIcon}
            />
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}

export default Index;
