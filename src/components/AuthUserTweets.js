import React, { Component } from "react";

import { connect } from "react-redux";

import { fetchAuthUserTweetsSuccess } from "../actions/tweetActions";
import UserTweetContainer from "../containers/UserTweetContainer";

const API = "http://localhost:3002/api/v1/users/";

class AuthUserTweets extends Component {
  componentDidMount() {
    fetch(`${API}${this.props.authUser.id}/auth_user_tweets`, {
      credentials: "include",
    })
      .then((resp) => resp.json())
      .then((resObj) => {
        this.props.fetchAuthUserTweetsSuccess(resObj);
      });
  }
  render() {
    if (this.props.authUserTweets.length > 0) {
      return (
        <UserTweetContainer
          location={this.props.location}
          tweets={this.props.authUserTweets}
        />
      );
    } else {
      return (
        <div className="flex justify-center pt-20">
          <h1 className="text-3xl text-gray-400">You have no tweets</h1>
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    authUserTweets: state.authUserTweets,
  };
};

const mapDispatchToProps = {
  fetchAuthUserTweetsSuccess,
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthUserTweets);
