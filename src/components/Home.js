import React, { useEffect } from "react";
import "../styles/Home.css";
import SparkleIcon from "./icons/Sparkle";

import { connect } from "react-redux";
import { fetchTweetsSuccess } from "../actions/tweetActions";

import TweetContainer from "../containers/TweetContainer";
import HomeTweetForm from "./HomeTweetForm";

const API = "http://localhost:3002/api/v1/tweets";

const Home = (props) => {
  useEffect(() => {
    fetch(API, { credentials: "include" })
      .then((resp) => resp.json())
      .then((resObj) => {
        props.fetchTweetsSuccess(resObj);
      });
  }, []);

  if (props.tweets.length > 0) {
    return (
      <div className="home h-screen flex flex-col">
        <div className="home-header flex justify-between font-bold text-xl border-gray-100 border-b py-4 pl-4">
          <p className="block">Home</p>
          <div className="pr-4">
            <SparkleIcon />
          </div>
        </div>
        <TweetContainer
          authUser={props.authUser}
          tweets={props.tweets}
          location={props.location}
        />
      </div>
    );
  } else {
    return (
      <div className="home h-screen flex flex-col">
        <div className="home-header flex justify-between font-bold text-xl border-gray-100 border-b py-4 pl-4">
          <p className="block">Home</p>
          <div className="pr-4">
            <SparkleIcon />
          </div>
        </div>
        <HomeTweetForm authUser={props.authUser} />
        <div className="flex justify-center items-center h-screen">
          <div className="text-3xl text-gray-400">There are no Tweets</div>
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    tweets: state.tweets,
  };
};

const mapDispatchToProps = {
  fetchTweetsSuccess,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
