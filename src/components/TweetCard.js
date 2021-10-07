import React, { useState } from "react";
import { connect } from "react-redux";
import { deleteLikeSuccess } from "../actions/likeActions";

import AuthUserTweetDropdown from "./AuthUserTweetDropdown";
import UserTweetDropdown from "./UserTweetDropdown";

const API = "http://localhost:3002/api/v1/users";

const TweetCard = (props) => {
  const [like, setLike] = useState(props.liked_by_current_user);
  const [isOpen, setIsOpen] = useState(false);
  const likeTweet = () => {
    const newLike = {
      user: {
        user_id: props.authUserId,
        tweet_id: props.id,
      },
    };

    const payload = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newLike),
      credentials: "include",
    };

    fetch(API + `/${props.authUserId}/likes`, payload)
      .then((resp) => resp.json())
      .then((resObj) => {
        if (resObj.created) {
          setLike(!like);
        } else {
          props.deleteLikeSuccess(resObj.tweet);
          setLike(!like);
        }
      });
  };

  const toggleAuthUserTweetDropdown = () => {
    setIsOpen(false);
  };

  return (
    <div className="flex border-b pt-2 pl-2 pb-4 hover:bg-gray-100 transition ease-in-out cursor-pointer overflow-visible">
      <div className="">
        {props.avatar_exist ? (
          <div className="relative rounded-full overflow-hidden flex items-center justify-center w-12 h-12 hover:bg-black">
            <div className="absolute rounded-full flex w-12 h-12 hover:bg-black opacity-20 transition"></div>
            <img className="" alt="avatar" src={props.avatar_url} />
          </div>
        ) : (
          <i className="fas fa-user-circle fa-3x text-gray-300"></i>
        )}
      </div>
      <div className="flex flex-col pl-4 w-full -space-y-2">
        <div className="flex justify-between">
          <div className="flex space-x-0.5">
            <p className="font-semibold">{props.tweet_user_name}</p>
            <p className="text-gray-500">@{props.tweet_user_username}</p>
          </div>
          <div className="relative pr-4">
            <i
              onClick={() => setIsOpen(!isOpen)}
              className="transform translate-y-4 text-gray-400 fas fa-ellipsis-h hover:bg-blue-100 hover:text-blue-400 rounded-full p-2"
            ></i>
            {isOpen && (
              <button
                className="fixed z-50 inset-0 h-full w-full bg-black bg-opacity-0"
                onClick={() => setIsOpen(false)}
              />
            )}
            {props.authUserId === props.user_id
              ? isOpen && (
                  <AuthUserTweetDropdown
                    tweetId={props.id}
                    toggleAuthUserTweetDropdown={toggleAuthUserTweetDropdown}
                  />
                )
              : isOpen && <UserTweetDropdown />}
          </div>
        </div>
        <p className="break-words pb-2">{props.content}</p>

        <div className="pt-2 flex justify-between pr-20">
          <i className="cursor-pointer transition hover:bg-blue-100 p-2 rounded-full hover:text-blue-400 far fa-comment"></i>
          <i className="cursor-pointer transition hover:bg-green-100 p-2 rounded-full hover:text-green-400 fas fa-retweet"></i>
          {like ? (
            <i
              className="cursor-pointer transition hover:bg-red-100 p-2 rounded-full text-red-400 fas fa-heart "
              onClick={() => likeTweet()}
            />
          ) : (
            <i
              className="cursor-pointer transition hover:bg-red-100 p-2 rounded-full hover:text-red-400 far fa-heart"
              onClick={() => likeTweet()}
            />
          )}
          <i className="cursor-pointer transition hover:bg-blue-100 p-2 rounded-full hover:text-blue-400 far fa-share-square"></i>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    authUserId: state.authUser.id,
  };
};

const mapDispatchToProps = {
  deleteLikeSuccess,
};

export default connect(mapStateToProps, mapDispatchToProps)(TweetCard);
