import React from "react";
import TweetCard from "../components/TweetCard";
import HomeTweetForm from "../components/HomeTweetForm";

import "../styles/TweetContainer.css";

const TweetContainer = (props) => {
  return (
    <div className="tweet-container flex flex-col overflow-auto overflow-x-hidden">
      <HomeTweetForm authUser={props.authUser} />
      {props.tweets.map((tweet) => {
        return <TweetCard key={tweet.id} {...tweet} />;
      })}
    </div>
  );
};

export default TweetContainer;
