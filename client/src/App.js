import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from "react-redux";
import Navbar from "./components/Navbar";
import LoginPage from "./pages/LoginPage";
import AdminPage from "./pages/AdminPage";
import SignUpPage from "./pages/SignUpPage";
import Container from "@material-ui/core/Container";
import { fetchUser } from "./actions/user";
import { fetchProducts } from "./actions/product";

import "./App.css";

class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchProducts());
    dispatch(fetchUser());
  }
  render() {
    const { auth, products } = this.props;
    return (
      <div>
        <Router>
          <Navbar auth={auth} />
          <Container maxWidth="sm">
            <Route path="/" exact component={AdminPage} />
            <Route path="/login" exact component={LoginPage} />
            <Route path="/signup" exact component={SignUpPage} />
          </Container>
        </Router>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps)(App);
