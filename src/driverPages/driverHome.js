import React, { Component } from "react";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import withStyles from "@material-ui/core/styles/withStyles";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import Swal from "sweetalert2";
import HomeIcon from "@material-ui/icons/Home";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import DirectionsBus from "@material-ui/icons/DirectionsBus";
import PaymentIcon from "@material-ui/icons/Payment";
import BarChartIcon from "@material-ui/icons/BarChart";
import CircularProgress from "@material-ui/core/CircularProgress";
import Home from "../components/driverComponents/home";
import DriverAccount from "../components/driverComponents/account";
import MyVehicles from "../components/driverComponents/myVehicles";

// import Account from "./../account/Account";
// import Statistics from "./../statistics/Statistics";
// import Journey from "./../journey/Journey";
// import TopUpAccount from "./../payment/TopUpAccount";

const drawerWidth = 240;

const styles = (theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },

  drawerContainer: {
    overflow: "auto",
  },

  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },

  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  avatar: {
    height: 110,
    width: 100,
    flexShrink: 0,
    flexGrow: 0,
    marginTop: 20,
  },
  uiProgess: {
    position: "fixed",
    zIndex: "1000",
    height: "31px",
    width: "31px",
    left: "50%",
    top: "35%",
  },
  toolbar: theme.mixins.toolbar,
});

class Dashboard extends Component {
  state = {
    renderHome: false,
    renderMyVehicles: false,
    renderAccount: false,
    renderTopUpAccount: false,
  };

  loadtopUpaccountPage = (event) => {
    this.setState({
      renderTopUpAccount: true,
      renderAccount: false,
      renderMyVehicles: false,
      renderHome: false,
    });
  };

  loadAccountPage = (event) => {
    this.setState({
      renderAccount: true,
      renderHome: false,
      renderMyVehicles: false,
      renderTopUpAccount: false,
    });
  };

  loadHomePage = (event) => {
    this.setState({
      renderHome: true,
      renderAccount: false,
      renderMyVehicles: false,
      renderTopUpAccount: false,
    });
  };

  loadMyVehiclesPages = (event) => {
    this.setState({
      renderMyVehicles: true,
      renderAccount: false,
      renderHome: false,
      renderTopUpAccount: false,
    });
  };

  logoutHandler = (event) => {
    localStorage.removeItem("userID");
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Logout Successful",
      showConfirmButton: false,
      timer: 1500,
    }).then(() => {
      this.props.history.push("/");
    });
  };

  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      profilePicture: "",
      uiLoading: true,
      imageLoading: false,
    };
  }

  componentWillMount = () => {
    this.setState({ uiLoading: false });
    this.loadHomePage();
  };

  render() {
    const { classes } = this.props;
    if (this.state.uiLoading === true) {
      return (
        <div className={classes.root}>
          {this.state.uiLoading && (
            <CircularProgress size={150} className={classes.uiProgess} />
          )}
        </div>
      );
    } else {
      return (
        <div className={classes.root}>
          <CssBaseline />
          <AppBar position="fixed" className={classes.appBar}>
            <Toolbar>
              <Typography variant="h6" noWrap>
                Transporty
              </Typography>
            </Toolbar>
          </AppBar>
          <Drawer
            className={classes.drawer}
            variant="permanent"
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            <div className={classes.toolbar} />

            <Divider />
            <List>
              <ListItem button key="Home" onClick={this.loadHomePage}>
                <ListItemIcon>
                  <HomeIcon
                    style={
                      this.state.renderHome === true ? { color: "black" } : {}
                    }
                  />
                </ListItemIcon>
                <ListItemText
                  primary="Home"
                  style={
                    this.state.renderHome === true ? { color: "black" } : {}
                  }
                />
              </ListItem>

              <ListItem button key="Account" onClick={this.loadAccountPage}>
                <ListItemIcon>
                  <AccountBoxIcon
                    style={
                      this.state.renderAccount === true
                        ? { color: "black" }
                        : {}
                    }
                  />
                </ListItemIcon>
                <ListItemText
                  primary="Account"
                  style={
                    this.state.renderAccount === true ? { color: "black" } : {}
                  }
                />
              </ListItem>
              <ListItem
                button
                key="MyVehicles"
                onClick={this.loadMyVehiclesPages}
              >
                <ListItemIcon
                  style={
                    this.state.renderMyVehicles === true
                      ? { color: "black" }
                      : {}
                  }
                >
                  <DirectionsBus />
                </ListItemIcon>
                <ListItemText
                  primary="My Vehicles"
                  style={
                    this.state.renderMyVehicles === true
                      ? { color: "black" }
                      : {}
                  }
                />
              </ListItem>
            </List>
            <Divider />
            <List>
              <ListItem
                button
                key="Recharge Account"
                onClick={this.loadtopUpaccountPage}
              >
                <ListItemIcon>
                  <PaymentIcon />
                </ListItemIcon>
                <ListItemText primary="Recharge Account" />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <BarChartIcon />
                </ListItemIcon>
                <ListItemText primary="Reports" />
              </ListItem>

              <ListItem button key="Logout" onClick={this.logoutHandler}>
                <ListItemIcon>
                  <ExitToAppIcon />
                </ListItemIcon>
                <ListItemText primary="Logout" />
              </ListItem>
            </List>
          </Drawer>

          <main className={classes.content}>
            <Toolbar />
            {this.state.renderHome && <Home />}
            {this.state.renderAccount && <DriverAccount />}
            {this.state.renderMyVehicles && <MyVehicles />}

            {/* {this.state.renderAccount && <Account />}
          {this.state.renderJourney && <Journey />}
          {this.state.renderTopUpAccount && <TopUpAccount />} */}
          </main>
        </div>
      );
    }
  }
}

export default withStyles(styles)(Dashboard);
