import React, { Component } from "react";
import Card from "../driverCommon/vehicleCard";
import Grid from "@material-ui/core/Grid";
import LaunchIcon from "@material-ui/icons/Launch";
import Button from "@material-ui/core/Button";
import AddToPhotos from "@material-ui/icons/AddToPhotos";
import Typography from "@material-ui/core/Typography";
import AddVehicle from "../driverComponents/addVehicle";

class Index extends Component {
  state = {
    renderAddVehicleForm: false,
  };

  showAddVehicleForm = (e) => {
    e.preventDefault();
    this.setState({
      renderAddVehicleForm: true,
    });
  };

  closeAddVehicleForm = (e) => {
    this.setState({
      renderAddVehicleForm: false,
    });
  };

  render() {
    return (
      <React.Fragment>
        {this.state.renderAddVehicleForm ? (
          <AddVehicle closeForm={this.closeAddVehicleForm} />
        ) : (
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Typography align="right">
                <Button
                  variant="contained"
                  color="default"
                  onClick={this.showAddVehicleForm}
                >
                  Add Vehicle &nbsp;
                  <AddToPhotos />
                </Button>
              </Typography>
            </Grid>
            <Grid item xs={3}>
              <Card
                title="NB 1234"
                earnings="$132"
                tickets="134"
                launch={LaunchIcon}
              />
            </Grid>
            <Grid item xs={3}>
              <Card
                title="NB 1234"
                earnings="$202"
                tickets="134"
                launch={LaunchIcon}
              />
            </Grid>
            <Grid item xs={3}>
              <Card
                title="NB 1234"
                earnings="$300"
                tickets="134"
                launch={LaunchIcon}
              />
            </Grid>
            <Grid item xs={3}>
              <Card
                title="NB 1234"
                earnings="$420"
                tickets="134"
                launch={LaunchIcon}
              />
            </Grid>
          </Grid>
        )}
      </React.Fragment>
    );
  }
}

export default Index;
