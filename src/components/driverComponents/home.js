import React, { Component } from "react";
import Card from "../driverCommon/card";
import Grid from "@material-ui/core/Grid";
import LaunchIcon from "@material-ui/icons/Launch";
import VehicleTable from "../driverCommon/table";
import Chart from "../driverCommon/chart";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

class DriverHome extends Component {
  render() {
    return (
      <React.Fragment>
        <Grid container spacing={3}>
          <Grid item xs={3}>
            {" "}
            <Card title="Account Balance" data="$1000" launch={LaunchIcon} />
          </Grid>
          <Grid item xs={3}>
            {" "}
            <Card title="Total Tickets" data="1354" launch={LaunchIcon} />
          </Grid>
          <Grid item xs={3}>
            <Card title="My Vehicles" data="10" launch={LaunchIcon} />
          </Grid>
          <Grid item xs={3}>
            <Card title="Today Tickets" data="32" launch={LaunchIcon} />
          </Grid>

          <Grid item xs={6}>
            <Paper>
              <Typography align="center" variant="h5">
                Earnings by vehicles
              </Typography>
              <VehicleTable />
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper>
              <Typography align="center" variant="h5">
                Last 7 Days Earnings
              </Typography>
              <Chart />
            </Paper>
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}

export default DriverHome;
