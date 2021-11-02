import React, { useEffect } from "react";
import { connect } from "react-redux";
import UserTweetContainer from "../containers/UserTweetContainer";

import { fetchUserTweetsSuccess } from "../actions/tweetActions";

const API = "http://localhost:3002/api/v1/users/";

const UserTweets = (props) => {
  useEffect(() => {
    fetch(API + `${props.user.id}/user_tweets`, { credentials: "include" })
      .then((resp) => resp.json())
      .then((resObj) => props.fetchUserTweetsSuccess(resObj));
  }, []);
  if (props.userTweets.length > 0) {
    return (
      <UserTweetContainer tweets={props.userTweets} location={props.location} />
    );
  } else {
    return (
      <div className="flex justify-center pt-20">
        <h1 className="text-3xl text-gray-400">
          {props.user.name} hasn't tweeted yet
        </h1>
      </div>
    );
  }
};
const mapStateToProps = (state) => {
  return {
    userTweets: state.userTweets,
  };
};

const mapDispatchToProps = {
  fetchUserTweetsSuccess,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserTweets);
