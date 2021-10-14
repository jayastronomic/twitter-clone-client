import React from "react";
import "../styles/AuthUserConnects.css";
import { Link, Route, Switch } from "react-router-dom";

import ArrowLeft from "./icons/ArrowLeft";
import AuthUserFollowers from "./AuthUserFollowers";
import AuthUserFollowings from "./AuthUserFollowings";

const AuthUserConnects = (props) => {
  return (
    <div className="auth-user-connects flex flex-col">
      <div className="flex items-center p-2">
        <button className="p-2 transition hover:bg-gray-200 rounded-full">
          <ArrowLeft className="" />
        </button>
        <div className="flex flex-col pl-6 -space-y-1">
          <p className="font-bold text-xl">{props.authUser.name}</p>
          <p className="text-sm text-gray-600">@{props.authUser.username}</p>
        </div>
      </div>
      <nav className="flex items-center justify-around border-b border-gray-100">
        <Link
          to={`/${props.authUser.username}/followers`}
          className="transition font-semibold w-full block hover:bg-gray-200 text-center py-3"
        >
          Followers
        </Link>
        <Link
          to={`/${props.authUser.username}/following`}
          className="transition font-semibold w-full block hover:bg-gray-200 text-center py-3"
        >
          Following
        </Link>
      </nav>
      <Switch>
        <Route exact path={`/${props.authUser.username}/followers`}>
          <AuthUserFollowers authUser={props.authUser} />
        </Route>
        <Route exact path={`/${props.authUser.username}/following`}>
          <AuthUserFollowings authUser={props.authUser} />
        </Route>
      </Switch>
    </div>
  );
};

export default AuthUserConnects;
