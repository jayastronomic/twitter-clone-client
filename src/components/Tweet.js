import React, { useState, useEffect } from "react";
import "../styles/Tweet.css";

import TweetCard from "./TweetCard";
import ArrowLeft from "./icons/ArrowLeft";

import { connect } from "react-redux";

const API = "http://localhost:3002/api/v1/tweets/";

const Tweet = (props) => {
  const [tweet, setTweet] = useState(null);
  const [tweetContent, setTweetContent] = useState(null);
  const [liked, setLiked] = useState(null);
  useEffect(() => {
    fetch(API + props.location.state.tweetId, { credentials: "include" })
      .then((resp) => resp.json())
      .then((resObj) => {
        setTweet(resObj);
        setTweetContent(resObj.content);
        setLiked(resObj.liked_by_current_user);
      });
  }, []);

  const updateTweetContent = (resObj) => {
    setTweetContent(resObj.content);
  };

  const toggleLike = () => {
    setLiked(!liked);
  };

  return (
    <div className="tweet">
      <div className="flex items-center border-b border-gray-100 p-2">
        <button
          onClick={() => props.history.goBack()}
          className="p-2 transition hover:bg-gray-200 rounded-full"
        >
          <ArrowLeft className="" />
        </button>
        <p className="font-bold text-xl pl-6">Tweet</p>
      </div>
      <TweetCard
        toggleLike={toggleLike}
        liked={liked}
        {...tweet}
        updateTweetContent={updateTweetContent}
        tweetContent={tweetContent}
        location={props.location}
      />
    </div>
  );
};

export default connect()(Tweet);
