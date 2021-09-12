import React from "react";
import { Route } from "react-router-dom";
import Nav from "../Nav";
import Trends from "../Trends";

export const HomeNavRoute = ({
  exact,
  path,
  component: Component,
  handleLogout,
}) => (
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

export const ProfileNavRoute = ({
  exact,
  path,
  component: Component,
  handleLogout,
  authUser,
}) => (
  <Route
    exact={exact}
    path={path}
    render={(props) => (
      <div className="flex">
        <Nav handleLogout={handleLogout} history={props.history} />
        <Component {...props} authUser={authUser} />
        <Trends />
      </div>
    )}
  />
);
