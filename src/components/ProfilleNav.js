import React from "react";
import { Link } from "react-router-dom";

const ProfileNav = (props) => {
  return (
    <div className="flex h-14 border-b">
      <div className=" transition hover:bg-gray-100 w-full flex items-center justify-center p-4">
        <Link to={`${props.url}`} className="text-gray-500 font-bold">
          Tweets
        </Link>
      </div>
      <div className=" transition hover:bg-gray-100 w-full flex items-center justify-center px-4">
        <Link
          to={`${props.url}/with_replies`}
          className="text-gray-500 font-bold"
        >
          Tweets & Replies
        </Link>
      </div>
      <div className=" transition hover:bg-gray-100 w-full flex items-center justify-center ">
        <Link to={`${props.url}/media`} className="text-gray-500 font-bold">
          Media
        </Link>
      </div>
      <div className=" transition hover:bg-gray-100 w-full flex items-center justify-center ">
        <Link to={`${props.url}/likes`} className="text-gray-500 font-bold">
          Likes
        </Link>
      </div>
    </div>
  );
};

export default ProfileNav;
