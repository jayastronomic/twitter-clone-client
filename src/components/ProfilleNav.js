import React from "react";
import { Link } from "react-router-dom";

const ProfileNav = () => {
  return (
    <div className="flex h-14">
      <div className=" transition hover:bg-gray-100 w-full flex items-center justify-center">
        <Link className="text-gray-500 font-bold">Tweets</Link>
      </div>
      <div className=" transition hover:bg-gray-100 w-full flex items-center justify-center px-4">
        <Link className="text-gray-500 font-bold">Tweets & Replies</Link>
      </div>
      <div className=" transition hover:bg-gray-100 w-full flex items-center justify-center">
        <Link className="text-gray-500 font-bold">Media</Link>
      </div>
      <div className=" transition hover:bg-gray-100 w-full flex items-center justify-center">
        <Link className="text-gray-500 font-bold">Likes</Link>
      </div>
    </div>
  );
};

export default ProfileNav;
