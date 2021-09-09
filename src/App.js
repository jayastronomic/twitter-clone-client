import React, { Component } from "react";
import { connect } from "react-redux";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Trends from "./components/Trends";

import {
  fetchAuthUserSuccess,
  loggedIn,
  removeAuthUser,
} from "./actions/userActions";

const API = "http://localhost:3002/api/v1/logged_in";

const NavRoute = ({ exact, path, component: Component, handleLogout }) => (
  <Route
    exact={exact}
    path={path}
    render={(props) => (
      <div className="flex">
        <Nav handleLogout={handleLogout} history={props.history} />
        <Component {...props} />
        <Trends />
      </div>
    )}
  />
);

class App extends Component {
  handleLogin = (obj) => {
    this.props.fetchAuthUserSuccess(obj.user);
    this.props.loggedIn(obj.logged_in);
  };

  handleLogout = (obj) => {
    this.props.removeAuthUser(obj.user);
    this.props.loggedIn(obj.logged_in);
  };

  loginStatus = () => {
    fetch(API, { credentials: "include" })
      .then((resp) => resp.json())
      .then((resObj) => {
        if (resObj.logged_in) {
          this.handleLogin(resObj);
        } else {
          this.handleLogout(resObj);
        }
      });
  };

  componentDidMount() {
    this.loginStatus();
  }

  render() {
    return (
      <Router>
        <NavRoute
          exact
          path="/"
          component={Home}
          handleLogout={this.handleLogout}
        />
        <Route
          exact
          path="/signup"
          render={(props) => (
            <SignUp history={props.history} handleLogin={this.handleLogin} />
          )}
        />
        <Route
          exact
          path="/login"
          render={(props) => (
            <Login history={props.history} handleLogin={this.handleLogin} />
          )}
        />
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
