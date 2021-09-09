import React, { useEffect } from "react";
import "../styles/Home.css";

import { connect } from "react-redux";
import { fetchTweetsSuccess } from "../actions/tweetActions";

import TweetContainer from "../containers/TweetContainer";

const API = "http://localhost:3002/api/v1/tweets";

const Home = (props) => {
  useEffect(() => {
    fetch(API)
      .then((resp) => resp.json())
      .then((resObj) => {
        console.log(resObj);
        props.fetchTweetsSuccess(resObj);
      });
  }, []);

  if (props.tweets.length > 0) {
    return (
      <div className="home h-screen flex flex-col  ">
        <div className="home-header font-bold text-xl border-b py-4 pl-2 ">
          Home
        </div>
        <TweetContainer tweets={props.tweets} />
      </div>
    );
  } else {
    return (
      <div className="home h-screen flex flex-col">
        <div className="font-bold text-xl border-b py-4 pl-2 sticky top-0">
          Home
        </div>
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
