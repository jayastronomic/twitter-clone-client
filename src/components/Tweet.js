import React from "react";
import "../styles/Tweet.css";

import TweetCard from "./TweetCard";
import ArrowLeft from "./icons/ArrowLeft";

const Tweet = (props) => {
  return (
    <div className="tweet">
      <div className="flex items-center border-b border-gray-100 p-2">
        <button className="p-2 transition hover:bg-gray-200 rounded-full">
          <ArrowLeft className="" />
        </button>
        <p className="font-bold text-xl pl-6">Tweet</p>
      </div>
      <TweetCard location={props.location} />
    </div>
  );
};

export default Tweet;
