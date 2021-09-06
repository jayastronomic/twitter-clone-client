import React, { Component } from "react";
import { connect } from "react-redux";

import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import SignUp from "./components/SignUp";
import Login from "./components/Login";

import {
  fetchAuthUserSuccess,
  loggedIn,
  removeAuthUser,
} from "./actions/userActions";

const API = "http://localhost:3002/api/v1/logged_in";

class App extends Component {
  handleLogin = (obj) => {
    this.props.fetchAuthUserSuccess(obj);
    if (obj) {
      this.props.loggedIn(true);
    }
  };

  handleLogout = (obj) => {
    this.props.removeAuthUser(obj.user);
    this.props.loggedIn(obj.logged_in);
  };

  loginStatus = () => {
    fetch(API, { credentials: "include" })
      .then((resp) => resp.json())
      .then((obj) => {
        if (obj) {
          this.handleLogin(obj);
        } else {
          this.handleLogout(obj);
        }
      });
  };

  componentDidMount() {
    this.loginStatus();
  }

  render() {
    return (
      <Router>
        <Route exact path="/signup" render={() => <SignUp />} />
        <Route exact path="/login" render={() => <Login />} />
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    authUser: state.authUser,
    isLoggedIn: state.isLoggedIn,
  };
};

const mapDispatchToProps = {
  fetchAuthUserSuccess,
  loggedIn,
  removeAuthUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
