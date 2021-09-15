import React from "react";
import "../styles/AuthUserTweetDropdown.css";

const AuthUserTweetDropdown = () => {
  return (
    <div className="auth-user-tweet-dropdown top-0 absolute bg-white rounded  shadow-lg w-80 ">
      <div className="block flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 transition cursor-pointer text-red-400 font-medium space-x-4">
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

export default AuthUserTweetDropdown;
