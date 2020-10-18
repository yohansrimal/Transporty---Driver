import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import firebase from "../../firebase/firebase";
import Swal from "sweetalert2";

const styles = (theme) => ({
  paper: {
    marginTop: theme.spacing(6),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  formControl: {
    margin: theme.spacing(1),
    display: "flex",
    flexDirection: "column",
  },
});

class SignUp extends Component {
  state = {
    vehicleNo: "",
    routeID: "",
    routes: [],
  };

  componentDidMount = () => {
    firebase
      .database()
      .ref("routes")
      .on("value", (snapshot) => {
        snapshot.forEach((data) => {
          const dataVal = data.val();
          this.state.routes.push({
            id: data.key,
            routeNo: dataVal.routeNo,
          });
        });
      });
  };

  formSubmit = (e) => {
    e.preventDefault();

    const data = this.state;
    const ownerID = localStorage.getItem("userID");
    const response = firebase.database().ref("Vehicles").push({
      vehicleNo: data.vehicleNo,
      routeID: data.routeID,
      ownerID: ownerID,
    });

    Swal.fire({
      position: "center",
      icon: "success",
      title: "Vehicle Added Successfully",
      showConfirmButton: false,
      timer: 1500,
    }).then(() => {
      this.props.closeForm();
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            Add Vehicle
          </Typography>
          <form
            className={classes.form}
            noValidate
            onSubmit={(e) => this.formSubmit(e)}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="vehicleNo"
                  label="Vehicle Registration No"
                  name="email"
                  autoFocus
                  onChange={(e) => this.setState({ vehicleNo: e.target.value })}
                />
              </Grid>

              <Grid item xs={12}>
                <FormControl className={classes.formControl}>
                  <InputLabel id="routeNo">Route No</InputLabel>
                  <Select
                    labelId="routeNo"
                    id="routeNo"
                    onChange={(e) => {
                      console.log(e.target);
                      this.setState({
                        routeID: e.target.value,
                      });
                    }}
                  >
                    <MenuItem value="" key="" default disabled>
                      Select Route
                    </MenuItem>
                    {this.state.routes.map((route) => (
                      <MenuItem value={route.id} key={route.id}>
                        {route.routeNo}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <Button
                  onClick={this.props.closeForm}
                  fullWidth
                  variant="contained"
                  className={classes.submit}
                >
                  Cancel
                </Button>
              </Grid>
              <Grid item xs={6}>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                >
                  Add Vehicle
                </Button>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    );
  }
}

export default withStyles(styles, { withTheme: true })(SignUp);
