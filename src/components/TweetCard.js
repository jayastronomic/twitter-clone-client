import React, { useState, useRef } from "react";
import "../styles/TweetCard.css";
import { connect } from "react-redux";
import { deleteLikeSuccess } from "../actions/likeActions";

import { Link } from "react-router-dom";

import AuthUserTweetDropdown from "./AuthUserTweetDropdown";
import UserTweetDropdown from "./UserTweetDropdown";

const API = "http://localhost:3002/api/v1/users";

const TweetCard = (props) => {
  const [edited, setEdited] = useState(props.edited);
  const [liked, setLiked] = useState(props.liked_by_current_user);
  const [isOpen, setIsOpen] = useState(false);
  const link = useRef();
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
          toggleLiked();
        } else {
          props.deleteLikeSuccess(resObj.tweet);
          toggleLiked();
        }
      });
  };

  const toggleLiked = () => {
    setLiked(!liked);
  };

  const toggleAuthUserTweetDropdown = () => {
    setIsOpen(false);
  };

  const goToTweet = (e) => {
    if (e.currentTarget !== e.target) {
      return;
    }
    link.current.click();
  };

  if (
    props.location.pathname === "/" ||
    props.location.pathname === `/${props.tweet_user_username}` ||
    props.location.pathname === `/${props.tweet_user_username}/likes`
  ) {
    return (
      <div
        onClick={(e) => goToTweet(e)}
        className="flex border-gray-100 border-b pt-2 pl-2 pb-4 hover:bg-gray-100 transition ease-in-out cursor-pointer overflow-visible w-auto"
      >
        <div onClick={(e) => goToTweet(e)} className="flex">
          {props.avatar_exist ? (
            <div className="relative rounded-full overflow-hidden flex items-center justify-center w-12 h-12 hover:bg-black">
              <div className="absolute rounded-full flex w-12 h-12 hover:bg-black opacity-20 transition"></div>
              <img className="" alt="avatar" src={props.avatar_url} />
            </div>
          ) : (
            <i className="fas fa-user-circle fa-3x text-gray-300"></i>
          )}
        </div>
        <div
          onClick={(e) => goToTweet(e)}
          className="flex flex-col pl-4 w-full -space-y-2"
        >
          <div
            onClick={(e) => goToTweet(e)}
            className="flex justify-between items-center"
          >
            <div
              onClick={(e) => goToTweet(e)}
              className="flex items-center space-x-0.5"
            >
              <p className="font-semibold hover:underline">
                {props.tweet_user_name}
              </p>
              <p className="text-gray-500">@{props.tweet_user_username}</p>
              {edited ? (
                <p className="text-xs pl-2 text-gray-400">{"(edited)"}</p>
              ) : null}
            </div>
            <div onClick={(e) => goToTweet(e)} className="relative pr-2">
              <i
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-400 fas fa-ellipsis-h hover:bg-blue-100 hover:text-blue-400 rounded-full p-2"
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
                      tweet={props}
                      setEdited={setEdited}
                      toggleAuthUserTweetDropdown={toggleAuthUserTweetDropdown}
                      location={props.location}
                    />
                  )
                : isOpen && <UserTweetDropdown />}
            </div>
          </div>
          <p
            onClick={(e) => goToTweet(e)}
            className="content break-words pb-2 whitespace-pre-wrap"
          >
            {props.content}
          </p>

          <div
            onClick={(e) => goToTweet(e)}
            className="pt-2 flex justify-between pr-20"
          >
            <i className="cursor-pointer transition hover:bg-blue-100 p-2 rounded-full hover:text-blue-400 far fa-comment"></i>
            <i className="cursor-pointer transition hover:bg-green-100 p-2 rounded-full hover:text-green-400 fas fa-retweet"></i>
            {liked ? (
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
        <Link
          ref={link}
          to={{
            pathname: `/${props.tweet_user_username}/status/${props.id}`,
            state: {
              tweetId: props.id,
            },
          }}
        />
      </div>
    );
  } else {
    return (
      <div className="flex border-gray-100 border-b pt-2 pl-2 pb-4 transition ease-in-out  overflow-visible w-auto">
        <div className="flex flex-col pl-2 pr-4 w-full -space-y-2">
          <div className="flex justify-between items-center">
            <div className="flex">
              {props.avatar_exist ? (
                <div className="relative rounded-full overflow-hidden flex items-center justify-center w-12 h-12 hover:bg-black">
                  <div className="absolute rounded-full flex w-12 h-12 hover:bg-black opacity-20 transition"></div>
                  <img className="" alt="avatar" src={props.avatar_url} />
                </div>
              ) : (
                <i className="fas fa-user-circle fa-3x text-gray-300"></i>
              )}
              <div className="flex flex-col -space-y-1 pl-2">
                <p className="font-bold hover:underline text-sm">
                  {props.tweet_user_name}
                </p>
                <p className="text-gray-500">@{props.tweet_user_username}</p>
              </div>
            </div>
            <div className="relative pr-2">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-400 fas fa-ellipsis-h hover:bg-blue-100 hover:text-blue-400 rounded-full p-2"
              ></button>
              {isOpen && (
                <button
                  className="fixed z-50 inset-0 h-full w-full bg-black bg-opacity-0"
                  onClick={() => setIsOpen(false)}
                />
              )}
              {props.authUserId === props.user_id
                ? isOpen && (
                    <AuthUserTweetDropdown
                      tweet={props}
                      toggleAuthUserTweetDropdown={toggleAuthUserTweetDropdown}
                      updateTweetContent={props.updateTweetContent}
                      location={props.location}
                    />
                  )
                : isOpen && <UserTweetDropdown />}
            </div>
          </div>

          <p className="pt-5 pb-5 text-2xl break-words pb-2 whitespace-pre-wrap">
            {props.tweetContent}
          </p>

          <div className="flex text-gray-500 border-gray-100 pb-5 text-sm">
            <p>{props.time_created}</p>&nbsp;·&nbsp;
            <p>{props.date_created}</p>&nbsp;·&nbsp;
            <p className="hover:underline">Twitter Web App</p>
          </div>

          <Link
            to={""}
            className="transition hover:bg-gray-100 border-b border-t border-gray-100 py-4 text-gray-500 flex items-center pl-1"
          >
            <i className="fa fa-chart-bar" />
            &nbsp;
            <p className="text-sm">View Tweet Activity</p>
          </Link>

          <div className="pt-5 flex justify-around">
            <i className="cursor-pointer transition hover:bg-blue-100 p-2 rounded-full hover:text-blue-400 far fa-comment"></i>
            <i className="cursor-pointer transition hover:bg-green-100 p-2 rounded-full hover:text-green-400 fas fa-retweet"></i>
            {props.liked ? (
              <i
                className="cursor-pointer transition hover:bg-red-100 p-2 rounded-full text-red-400 fas fa-heart "
                onClick={() => {
                  likeTweet();
                  props.toggleLike();
                }}
              />
            ) : (
              <i
                className="cursor-pointer transition hover:bg-red-100 p-2 rounded-full hover:text-red-400 far fa-heart"
                onClick={() => {
                  likeTweet();
                  props.toggleLike();
                }}
              />
            )}
            <i className="cursor-pointer transition hover:bg-blue-100 p-2 rounded-full hover:text-blue-400 far fa-share-square"></i>
          </div>
        </div>
      </div>
    );
  }
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
