import React from "react";
import "../styles/AuthUserTweetDropdown.css";
import { connect } from "react-redux";

import {
  deleteTweetSuccess,
  deleteAuthUserTweetSuccess,
} from "../actions/tweetActions";

const API = "http://localhost:3002/api/v1/tweets";

const AuthUserTweetDropdown = (props) => {
  const deleteTweet = () => {
    fetch(API + `/${props.tweetId}`, { method: "DELETE" })
      .then((resp) => resp.json())
      .then((resObj) => {
        if (resObj.destroyed) {
          props.deleteTweetSuccess(resObj);
          props.deleteAuthUserTweetSuccess(resObj);
          props.toggleAuthUserTweetDropdown();
        }
      });
  };

  return (
    <div className="auth-user-tweet-dropdown top-0 absolute bg-white rounded  shadow-2xl w-80 ">
      <div
        onClick={() => deleteTweet()}
        className="block flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 transition cursor-pointer text-red-400 font-medium space-x-4"
      >
        <i className="far fa-trash-alt"></i> <p>Delete</p>
      </div>
      <div className="block flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 transition cursor-pointer font-medium space-x-4 text ">
        <i className="fas fa-thumbtack"></i> <p>Pin to your profile</p>
      </div>
      <div className="block flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 transition cursor-pointer font-medium space-x-4 text ">
        <i className="far fa-list-alt"></i>{" "}
        <p>Add/remove @Username from lists</p>
      </div>
      <div className="block flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 transition cursor-pointer font-medium space-x-4 text ">
        <i className="far fa-comment"></i>
        <p>Change who can reply</p>
      </div>
      <div className="block flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 transition cursor-pointer font-medium space-x-4 text ">
        <i className="fas fa-code"></i> <p>Embed Tweet</p>
      </div>
      <div className="block flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 transition cursor-pointer font-medium space-x-4 text ">
        <i className="far fa-chart-bar"></i> <p>View Tweet activity</p>
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  deleteTweetSuccess,
  deleteAuthUserTweetSuccess,
};

export default connect(null, mapDispatchToProps)(AuthUserTweetDropdown);
