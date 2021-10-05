import React from "react";
import TweetCard from "../components/TweetCard";

import "../styles/TweetContainer.css";

const TweetContainer = (props) => {
  return (
    <div className="tweet-container flex flex-col overflow-auto">
      {props.tweets.map((tweet, i) => {
        return <TweetCard key={i} {...tweet} />;
      })}
    </div>
  );
};

export default TweetContainer;
