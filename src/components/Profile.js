import React, { useEffect } from "react";
import "../styles/Profile.css";
import { connect } from "react-redux";
import { Route, Switch, useRouteMatch } from "react-router-dom";

import ProfileHeader from "./ProfileHeader";
import ProfileInformation2 from "./ProfileInformation2.js";
import ProfileNav from "./ProfilleNav";

import UserTweets from "./UserTweets";
import UserTweetsAndReplies from "./UserTweetsAndReplies";
import UserMedia from "./UserMedia";
import UserLikes from "./UserLikes";

import { loadAuthUserTweetCount } from "../actions/tweetActions";

const Profile = (props) => {
  useEffect(() => {
    props.loadAuthUserTweetCount(props.authUser.total_tweets);
  });
  let { path, url } = useRouteMatch();

  return (
    <div className="profile h-screen flex flex-col overflow-auto">
      <ProfileHeader
        history={props.history}
        authUserTweetCount={props.authUserTweetCount}
        authUser={props.authUser}
      />
      <ProfileInformation2 authUser={props.authUser} />
      <ProfileNav url={url} />
      <Switch>
        <Route exact path={path}>
          <UserTweets location={props.location} authUser={props.authUser} />
        </Route>
        <Route path={`${path}/with_replies`}>
          <UserTweetsAndReplies />
        </Route>
        <Route path={`${path}/media`}>
          <UserMedia />
        </Route>
        <Route path={`${path}/likes`}>
          <UserLikes location={props.location} />
        </Route>
      </Switch>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    authUserTweetCount: state.authUserTweetCount,
  };
};

const mapDispatchToProps = {
  loadAuthUserTweetCount,
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
