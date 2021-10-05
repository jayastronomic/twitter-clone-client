import React, { Component } from "react";
import { connect } from "react-redux";

import { BrowserRouter as Router, Route } from "react-router-dom";
import {
  HomeNavRoute,
  ProfileNavRoute,
  ConnectNavRoute,
} from "./components/NavRoutes/NavRoutes";

import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Logout from "./components/Logout";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Connect from "./components/Connect";

import {
  fetchAuthUserSuccess,
  loggedIn,
  removeAuthUser,
} from "./actions/userActions";

const API = "http://localhost:3002/api/v1/logged_in";

class App extends Component {
  handleLogin = (obj) => {
    this.props.fetchAuthUserSuccess(obj);
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
        <HomeNavRoute
          exact
          path="/"
          component={Home}
          handleLogout={this.handleLogout}
          authUser={this.props.authUser}
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
        <Route
          exact
          path="/logout"
          render={(props) => (
            <Logout history={props.history} handleLogout={this.handleLogout} />
          )}
        />

        <ProfileNavRoute
          path={`/${this.props.authUser.username}`}
          component={Profile}
          handleLogout={this.handleLogout}
          authUser={this.props.authUser}
        />

        <ConnectNavRoute
          path={"/connect"}
          component={Connect}
          handleLogout={this.handleLogout}
          authUser={this.props.authUser}
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
