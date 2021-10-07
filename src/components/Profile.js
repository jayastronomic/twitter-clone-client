import React from "react";
import "../styles/Profile.css";
import { connect } from "react-redux";
import { Route, Switch, useRouteMatch } from "react-router-dom";

import ProfileInformation from "./ProfileInformation.js";
import ProfileNav from "./ProfilleNav";
import UserTweets from "./UserTweets";
import UserTweetsAndReplies from "./UserTweetsAndReplies";
import UserMedia from "./UserMedia";
import UserLikes from "./UserLikes";

const Profile = (props) => {
  let { path, url } = useRouteMatch();

  return (
    <div className="profile h-screen flex flex-col overflow-auto">
      <div className="flex items-center profile-header sticky top-0  border-b py-2 pl-2 bg-white  ">
        <div className="flex">
          <button className="w-8 h-8 fas fa-long-arrow-alt-left hover:bg-gray-200 rounded-full" />
        </div>
        <div className="flex flex-col pl-10 -space-y-1.5">
          <p className="font-bold text-xl">{props.authUser.name}</p>
          <p className="text-sm text-gray-500">
            {props.authUser.total_tweets}{" "}
            {props.authUser.total_tweets === 1 ? "Tweet" : "Tweets"}
          </p>
        </div>
      </div>
      <ProfileInformation authUser={props.authUser} />
      <ProfileNav url={url} />
      <Switch>
        <Route exact path={path}>
          <UserTweets authUser={props.authUser} />
        </Route>
        <Route path={`${path}/with_replies`}>
          <UserTweetsAndReplies />
        </Route>
        <Route path={`${path}/media`}>
          <UserMedia />
        </Route>
        <Route path={`${path}/likes`}>
          <UserLikes />
        </Route>
      </Switch>
    </div>
  );
};

export default connect(null, null)(Profile);
