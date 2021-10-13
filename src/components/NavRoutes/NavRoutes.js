import React, { Component } from "react";
import { Route } from "react-router-dom";
import Nav from "../Nav";
import Trends2 from "../Trends2";

export const HomeNavRoute = ({
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
        <Nav
          handleLogout={handleLogout}
          history={props.history}
          authUser={authUser}
        />
        <Component authUser={authUser} {...props} />
        <Trends2 />
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
    path={path}
    render={(props) => (
      <div className="flex">
        <Nav
          handleLogout={handleLogout}
          history={props.history}
          authUser={authUser}
        />
        <Component {...props} authUser={authUser} />
        <Trends2 />
      </div>
    )}
  />
);

export const ConnectNavRoute = ({
  exact,
  path,
  component: Component,
  handleLogout,
  authUser,
}) => (
  <Route
    path={path}
    render={(props) => (
      <div className="flex">
        <Nav
          handleLogout={handleLogout}
          history={props.history}
          authUser={authUser}
        />
        <Component {...props} authUser={authUser} />
        <Trends2 />
      </div>
    )}
  />
);
