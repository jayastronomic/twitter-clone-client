import React, { useState, useEffect } from "react";
import UserProfileHeader from "./UserProfileHeader";
import UserTweets from "./UserTweets";
import UserLikes from "./UserLikes";

import { Route, Switch, useRouteMatch } from "react-router-dom";
import UserProfileInformation from "./UserProfileInformation";
import UserProfileNav from "./UserProfileNav";
import UserTweetAndReplies from "./UserTweetsAndReplies";
import UserMedia from "./UserMedia";

const API = "http://localhost:3002/api/v1/users";

const UserProfile = (props) => {
  const [user, setUser] = useState(props.location.state.user);

  useEffect(() => {
    fetch(API + `/${props.location.state.user.id}`, {
      credentials: "include",
    })
      .then((resp) => resp.json())
      .then((resObj) => {
        setUser(resObj);
      });
  }, []);

  let { path, url } = useRouteMatch();

  return (
    <div className="profile h-screen flex flex-col overflow-auto">
      <UserProfileHeader history={props.history} user={user} />
      <UserProfileInformation user={user} authUser={props.authUser} />
      <UserProfileNav user={user} url={url} />
      <Switch>
        <Route exact path={path}>
          <UserTweets location={props.location} user={user} />
        </Route>
        <Route exact path={`${path}/with_replies`}>
          <UserTweetAndReplies />
        </Route>
        <Route exact path={`${path}/media`}>
          <UserMedia />
        </Route>
        <Route exact path={`${path}/likes`}>
          <UserLikes location={props.location} user={user} />
        </Route>
      </Switch>
    </div>
  );
};

export default UserProfile;
