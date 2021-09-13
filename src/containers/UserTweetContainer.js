import React from "react";
import TweetCard from "../components/TweetCard";

import "../styles/UserTweetContainer.css";

const UserTweetContainer = (props) => {
  return (
    <div className="tweet-container flex flex-col">
      {props.tweets.map((tweet) => {
        return <TweetCard {...tweet} />;
      })}
    </div>
  );
};

export default UserTweetContainer;
