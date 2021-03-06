import React, { useState } from "react";
import "../styles/Nav.css";
import { Link, useRouteMatch } from "react-router-dom";
import { connect } from "react-redux";

import TweetModal from "./TweetModal";
import LogOutDropdown from "./LogOutDropdown";

import { toggle } from "../actions/tweetModalActions";

const Nav = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const { url } = useRouteMatch();

  return (
    <nav className="nav border-r border-gray-100 h-screen flex flex-row-reverse">
      <div className="flex flex-col  space-y-6 pr-14">
        <div>
          <i className="fab fa-twitter fa-2x twitter-blue hover:bg-blue-100 rounded-full transition p-4 cursor-pointer"></i>
        </div>
        <div>
          {url === "/" ? (
            <Link
              to="/"
              className="text-xl font-bold hover:bg-gray-200 py-4 px-4 rounded-full transition"
            >
              <i className="fas fa-home"></i>&nbsp;&nbsp;&nbsp; Home
            </Link>
          ) : (
            <Link
              to="/"
              className="text-xl hover:bg-gray-200 py-4 px-4 rounded-full transition"
            >
              <i className="fas fa-home"></i>&nbsp;&nbsp;&nbsp; Home
            </Link>
          )}
        </div>
        <div>
          <div className="inline text-xl hover:bg-gray-200 py-4 px-4 rounded-full transition">
            <i className="fas fa-hashtag"></i>&nbsp;&nbsp;&nbsp; Explore
          </div>
        </div>
        <div>
          <div className="inline text-xl hover:bg-gray-200 py-4 px-4 rounded-full transition">
            <i className="far fa-bell"></i>&nbsp;&nbsp;&nbsp; Notifications
          </div>
        </div>
        <div>
          <div className="inline text-xl hover:bg-gray-200 py-4 px-4 rounded-full transition">
            <i className="far fa-envelope"></i>&nbsp;&nbsp;&nbsp; Messages
          </div>
        </div>
        <div>
          <div className="inline text-xl hover:bg-gray-200 py-4 px-4 rounded-full transition">
            <i className="far fa-bookmark"></i>&nbsp;&nbsp;&nbsp; Bookmarks
          </div>
        </div>
        <div>
          <div className="inline text-xl hover:bg-gray-200 py-4 px-4 rounded-full transition">
            <i className="fas fa-bars"></i>&nbsp;&nbsp;&nbsp; Lists
          </div>
        </div>
        <div>
          {url === `${props.authUserHandle}` ? (
            <Link
              to={props.authUserHandle}
              className="text-xl font-bold hover:bg-gray-200 py-4 px-4 rounded-full transition"
            >
              <i className="far fa-user"></i>&nbsp;&nbsp;&nbsp; Profile
            </Link>
          ) : (
            <Link
              to={props.authUserHandle}
              className="text-xl hover:bg-gray-200 py-4 px-4 rounded-full transition"
            >
              <i className="far fa-user"></i>&nbsp;&nbsp;&nbsp; Profile
            </Link>
          )}
        </div>
        <div>
          <div className="inline text-xl hover:bg-gray-200 py-4 px-4 rounded-full transition">
            <i className="far fa-comment-dots"></i>&nbsp;&nbsp;&nbsp; More
          </div>
        </div>

        <button
          onClick={() => props.toggle(!props.toggleTweetModal)}
          className="text-xl font-medium text-white bg-blue-500 rounded-full hover:bg-blue-600 py-2"
        >
          Tweet
        </button>
        <div className="flex relative w-full h-32">
          {isOpen && <LogOutDropdown authUser={props.authUser} />}
        </div>

        <div
          onClick={() => setIsOpen(true)}
          className="relative flex rounded-full hover:bg-gray-200 pl-3 py-3 pr-10 items-center cursor-pointer transition"
        >
          {props.authUser.avatar_exist ? (
            <div className="rounded-full overflow-hidden h-12 w-12">
              <img alt="avatar object-cover" src={props.authUserAvatarUrl} />
            </div>
          ) : (
            <i className="fa-3x fas fa-user-circle text-gray-300" />
          )}
          <div className="flex flex-col pl-2">
            <p className="font-semibold">{props.authUserName}</p>
            <p className="text-gray-500">@{props.authUserUsername}</p>
          </div>
          <i className=" absolute fa fa-ellipsis-h right-4" />
        </div>

        {isOpen && (
          <button
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 h-full w-full z-10 cursor-default"
          />
        )}
      </div>
      {props.toggleTweetModal && <TweetModal authUser={props.authUser} />}
    </nav>
  );
};

const mapStatetoProps = (state) => {
  return {
    toggleTweetModal: state.toggleTweetModal,
    authUserHandle: `/${state.authUser.username}`,
    authUserAvatarUrl: state.authUser.avatar_url,
    authUserUsername: state.authUser.username,
    authUserName: state.authUser.name,
  };
};

const mapDispatchToProps = {
  toggle,
};

export default connect(mapStatetoProps, mapDispatchToProps)(Nav);
