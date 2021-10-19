import React from "react";
import TweetCard from "../components/TweetCard";

const UserLikesContainer = (props) => {
  return (
    <div className="flex flex-col ">
      {props.userLikes.map((tweet, i) => {
        return <TweetCard key={i} {...tweet} location={props.location} />;
      })}
    </div>
  );
};

export default UserLikesContainer;
