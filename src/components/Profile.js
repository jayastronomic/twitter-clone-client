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
      <div className="profile-header sticky top-0 font-bold text-xl border-b py-4 pl-2 bg-white ">
        {props.authUser.username}
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
