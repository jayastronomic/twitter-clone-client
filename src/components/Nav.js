import React from "react";
import "../styles/Nav.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import TweetModal from "./TweetModal";

import { toggle } from "../actions/tweetModalActions";

const API = "http://localhost:3002/api/v1/logout";

const Nav = (props) => {
  const logOff = () => {
    fetch(API, { method: "DELETE" })
      .then((resp) => resp.json())
      .then((resObj) => props.handleLogout(resObj));

    redirect();
  };

  const redirect = () => {
    props.history.push("/login");
  };

  return (
    <nav className="nav border-r h-screen flex flex-row-reverse ">
      <div className="flex flex-col pt-4 space-y-8 pr-14">
        <div>
          <i className="fab fa-twitter fa-2x text-blue-400 hover:bg-blue-100 rounded-full transition p-4 cursor-pointer"></i>
        </div>
        <div>
          <Link className="text-xl hover:bg-gray-200 py-2 px-6 rounded-full transition">
            <i className="fas fa-home"></i> Home
          </Link>
        </div>
        <div>
          <Link className="text-xl hover:bg-gray-200 py-2 px-6 rounded-full transition">
            <i className="fas fa-hashtag"></i> Explore
          </Link>
        </div>
        <div>
          <Link className="text-xl hover:bg-gray-200 py-2 px-6 rounded-full transition">
            <i className="far fa-bell"></i> Notifications
          </Link>
        </div>
        <div>
          <Link className="text-xl hover:bg-gray-200 py-2 px-6 rounded-full transition">
            <i className="far fa-envelope"></i> Messages
          </Link>
        </div>
        <div>
          <Link className="text-xl hover:bg-gray-200 py-2 px-6 rounded-full transition">
            <i className="far fa-bookmark"></i> Bookmarks
          </Link>
        </div>
        <div>
          <Link className="text-xl hover:bg-gray-200 py-2 px-6 rounded-full transition">
            <i className="fas fa-bars"></i> Lists
          </Link>
        </div>
        <div>
          <Link className="text-xl hover:bg-gray-200 py-2 px-6 rounded-full transition">
            <i className="far fa-user"></i> Profile
          </Link>
        </div>
        <div>
          <Link className="text-xl hover:bg-gray-200 py-2 px-6 rounded-full transition">
            <i className="far fa-comment-dots"></i> More
          </Link>
        </div>

        <button
          onClick={() => props.toggle(!props.toggleTweetModal)}
          className="text-xl font-bold text-white bg-blue-500 rounded-full hover:bg-blue-600 py-2"
        >
          Tweet
        </button>
        <div className=" flex flex-col-reverse h-72 pb-2">
          <button
            onClick={() => logOff()}
            className=" text-xl font-bold text-white bg-blue-500 rounded-full hover:bg-blue-600 py-2"
          >
            Log out
          </button>
        </div>
      </div>
      {props.toggleTweetModal && <TweetModal />}
    </nav>
  );
};

const mapStatetoProps = (state) => {
  return {
    toggleTweetModal: state.toggleTweetModal,
  };
};

const mapDispatchToProps = {
  toggle,
};

export default connect(mapStatetoProps, mapDispatchToProps)(Nav);
