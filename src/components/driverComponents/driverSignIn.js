import React, { Component } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Swal from "sweetalert2";
import firebase from "../../firebase/firebase";

const styles = (theme) => ({
  paper: {
    marginTop: theme.spacing(8),
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
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
});

class SignIn extends Component {
  state = {
    email: "",
    password: "",
    invalid: false,
    userData: "",
    key: "",
  };

  checkLogin = async (e) => {
    e.preventDefault();

    await firebase
      .database()
      .ref()
      .child("Drivers")
      .orderByChild("email")
      .equalTo(this.state.email)
      .limitToFirst(1)
      .once("value", (snap) => {
        if (snap.exists()) {
          this.setState({
            userData: Object.values(snap.val())[0],
            key: Object.keys(snap.val())[0],
          });
        } else {
          this.setState({
            invalid: true,
            password: null,
          });
        }
      });

    if (this.state.userData.password === this.state.password) {
      localStorage.setItem("userID", this.state.key);
      this.setState({
        invalid: false,
      });
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Login Successful",
        showConfirmButton: false,
        timer: 1500,
      }).then(() => {
        window.location.replace("/driverhome");
      });
    } else {
      this.setState({
        invalid: true,
      });
    }

    this.setState({
      email: "",
      password: "",
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form
            className={classes.form}
            noValidate
            onSubmit={(e) => this.checkLogin(e)}
          >
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              value={this.state.email}
              onChange={(e) => this.setState({ email: e.target.value })}
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              value={this.state.password}
              autoComplete="current-password"
              onChange={(e) => this.setState({ password: e.target.value })}
            />
            {this.state.invalid && "Invalid"}
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign In
            </Button>

            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  <span onClick={this.props.signUp}>
                    {" "}
                    {"Don't have an account? Sign Up"}
                  </span>
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    );
  }
}

export default withStyles(styles, { withTheme: true })(SignIn);
