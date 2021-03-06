import React from "react";
import TweetCard from "../components/TweetCard";

import "../styles/UserTweetContainer.css";

const UserTweetContainer = (props) => {
  return (
    <div className="user-tweet-container flex flex-col">
      {props.tweets.map((tweet) => {
        return (
          <TweetCard key={tweet.id} {...tweet} location={props.location} />
        );
      })}
    </div>
  );
};

export default UserTweetContainer;
