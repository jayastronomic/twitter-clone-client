import React, { useState } from "react";
import UserProfileHeader from "./UserProfileHeader";
import UserTweets from "./UserTweets";
import UserLikes from "./UserLikes";

import { Route, Switch, useRouteMatch } from "react-router-dom";
import UserProfileInformation from "./UserProfileInformation";
import UserProfileNav from "./UserProfileNav";

const UserProfile = (props) => {
  const [user, setIsUser] = useState(props.location.state.user);
  let { path, url } = useRouteMatch();
  return (
    <div className="profile h-screen flex flex-col overflow-auto">
      <UserProfileHeader history={props.history} user={user} />
      <UserProfileInformation user={user} />
      <UserProfileNav user={user} url={url} />
      <Switch>
        <Route exact path={path}>
          <UserTweets location={props.location} user={user} />
        </Route>
      </Switch>
    </div>
  );
};

export default UserProfile;
