import React from "react";
import TweetCard from "../components/TweetCard";

const UserLikesContainer = (props) => {
  return (
    <div className="tweet-container flex flex-col ">
      {props.userLikes.map((tweet, i) => {
        return <TweetCard key={i} {...tweet} />;
      })}
    </div>
  );
};

export default UserLikesContainer;
