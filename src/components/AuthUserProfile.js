import React, { useEffect } from "react";
import "../styles/Profile.css";
import { connect } from "react-redux";
import { Route, Switch, useRouteMatch } from "react-router-dom";

import AuthUserProfileHeader from "./AuthUserProfileHeader";
import AuthUserProfileInformation from "./AuthUserProfileInformation.js";
import AuthUserProfileNav from "./AuthUserProfileNav";
import AuthUserTweets from "./AuthUserTweets";
import AuthUserTweetsAndReplies from "./AuthUserTweetsAndReplies";
import AuthUserMedia from "./AuthUserMedia";
import AuthUserLikes from "./AuthUserLikes";

import { loadAuthUserTweetCount } from "../actions/tweetActions";

const AuthUserProfile = (props) => {
  useEffect(() => {
    props.loadAuthUserTweetCount(props.authUser.total_tweets);
  });
  let { path, url } = useRouteMatch();

  return (
    <div className="profile h-screen flex flex-col overflow-auto">
      <AuthUserProfileHeader
        history={props.history}
        authUserTweetCount={props.authUserTweetCount}
        authUser={props.authUser}
      />
      <AuthUserProfileInformation
        authUser={props.authUser}
        history={props.history}
      />
      <AuthUserProfileNav url={url} />
      <Switch>
        <Route exact path={path}>
          <AuthUserTweets location={props.location} authUser={props.authUser} />
        </Route>
        <Route path={`${path}/with_replies`}>
          <AuthUserTweetsAndReplies />
        </Route>
        <Route path={`${path}/media`}>
          <AuthUserMedia />
        </Route>
        <Route path={`${path}/likes`}>
          <AuthUserLikes location={props.location} />
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

export default connect(mapStateToProps, mapDispatchToProps)(AuthUserProfile);
