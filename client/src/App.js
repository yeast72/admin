import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import LoginPage from "./pages/LoginPage";
import AdminPage from "./pages/AdminPage";
import Container from "@material-ui/core/Container";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Container maxWidth="sm">
            <Route path="/" exact component={AdminPage} />
            <Route path="/login" component={LoginPage} />
          </Container>
        </Router>
      </div>
    );
  }
}

export default App;
