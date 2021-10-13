import React, { useState } from "react";
import "../styles/AuthUserTweetDropdown.css";

import DeleteTweetModal from "./DeleteTweetModal";
import EditTweetModal from "./EditTweetModal";

const AuthUserTweetDropdown = (props) => {
  const [isDeleteTweetModalOpen, setIsDeleteTweetModalOpen] = useState(false);
  const [isEditTweetModalOpen, setIsEditTweetModalOpen] = useState(false);

  return (
    <div className="auth-user-tweet-dropdown top-0 absolute bg-white rounded  shadow-2xl w-80 ">
      <div
        onClick={() => setIsDeleteTweetModalOpen(true)}
        className="block flex items-center px-4 py-2  hover:bg-gray-100 transition cursor-pointer text-red-400 font-medium space-x-4"
      >
        <i className="far fa-trash-alt"></i> <p>Delete</p>
      </div>
      <div
        onClick={() => setIsEditTweetModalOpen(true)}
        className="block flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 transition cursor-pointer text-green-400 font-medium space-x-4 text "
      >
        <i className="far fa-edit"></i> <p>Edit</p>
      </div>
      <div className="block flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 transition cursor-pointer font-medium space-x-4 text ">
        <i className="fas fa-thumbtack"></i> <p>Pin to your profile</p>
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
      {isDeleteTweetModalOpen && (
        <DeleteTweetModal
          setIsDeleteTweetModalOpen={setIsDeleteTweetModalOpen}
          tweetId={props.tweet.id}
        />
      )}
      {isEditTweetModalOpen && (
        <EditTweetModal
          tweet={props.tweet}
          setIsEditTweetModalOpen={setIsEditTweetModalOpen}
        />
      )}
    </div>
  );
};

export default AuthUserTweetDropdown;
