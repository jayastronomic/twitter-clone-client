import React from "react";
import "../styles/UserTweetDropdown.css";

const UserTweetDropdown = () => {
  return (
    <div className="user-tweet-dropdown top-0 absolute bg-white rounded  shadow-2xl w-80 ">
      <div className="block flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 transition cursor-pointer font-medium space-x-4">
        <i className="far fa-frown"></i> <p>Not interested in this Tweet</p>
      </div>
      <div className="block flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 transition cursor-pointer font-medium space-x-4 text ">
        <i className="fas fa-user-times"></i> <p>Unfollow @otheruser</p>
      </div>
      <div className="block flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 transition cursor-pointer font-medium space-x-4 text ">
        <i className="far fa-list-alt"></i>{" "}
        <p>Add/remove @otheruser from lists</p>
      </div>
      <div className="block flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 transition cursor-pointer font-medium space-x-4 text ">
        <i className="fas fa-volume-mute"></i>
        <p>Mute @otheruser</p>
      </div>
      <div className="block flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 transition cursor-pointer font-medium space-x-4 text ">
        <i className="fas fa-ban"></i> <p>Block @otheruser</p>
      </div>
      <div className="block flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 transition cursor-pointer font-medium space-x-4 text ">
        <i className="fas fa-code"></i> <p>Embed Tweet</p>
      </div>
      <div className="block flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 transition cursor-pointer font-medium space-x-4 text ">
        <i className="fab fa-font-awesome-flag"></i> <p>Report Tweet</p>
      </div>
    </div>
  );
};

export default UserTweetDropdown;
