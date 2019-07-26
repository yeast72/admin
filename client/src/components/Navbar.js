import React from "react";
import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  title: {
    flexGrow: 1
  },
  button: {
    float: "rigth"
  },
  link: {
    color: "inherit",
    textDecoration: "none"
  }
}));

const Navbar = () => {
  const classes = useStyles();
  return (
    <AppBar className={classes.root} position="static">
      <Toolbar>
        <Typography variant="h6" color="inherit" className={classes.title}>
          Admin store
        </Typography>
        <Button className={classes.button} color="inherit">
          <Link className={classes.link} to="/">
            Admin
          </Link>
        </Button>
        <Button className={classes.button} color="inherit">
          <Link className={classes.link} to="/login">
            Login
          </Link>
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
