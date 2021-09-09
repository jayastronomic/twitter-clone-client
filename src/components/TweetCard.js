import React from "react";

const TweetCard = (props) => {
  return (
    <div className="flex border-b pt-2 pl-2 pb-4 hover:bg-gray-100 transition ease-in-out cursor-pointer">
      <div className="">
        <i className="fas fa-user-circle fa-3x text-gray-300"></i>
      </div>
      <div className="flex flex-col pl-4 w-full">
        <p>@username</p>
        <p className="break-words">{props.content}</p>
        <div className="pt-2 flex justify-between pr-20">
          <i className="cursor-pointer transition hover:bg-blue-100 p-2 rounded-full hover:text-blue-400 far fa-comment"></i>
          <i className="cursor-pointer transition hover:bg-green-100 p-2 rounded-full hover:text-green-400 fas fa-retweet"></i>
          <i className="cursor-pointer transition hover:bg-red-100 p-2 rounded-full hover:text-red-400 far fa-heart"></i>
          <i className="cursor-pointer transition hover:bg-blue-100 p-2 rounded-full hover:text-blue-400 far fa-share-square"></i>
        </div>
      </div>
    </div>
  );
};

export default TweetCard;
