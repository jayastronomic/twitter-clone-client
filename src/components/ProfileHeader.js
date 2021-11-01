import React from "react";

const ProfileHeader = (props) => {
  return (
    <div className="flex items-center profile-header sticky top-0  border-b py-1 pl-2 bg-white  ">
      <div className="flex">
        <button
          onClick={() => props.history.goBack()}
          className="w-8 h-8 fas fa-long-arrow-alt-left hover:bg-gray-200 rounded-full"
        />
      </div>
      <div className="flex flex-col pl-10 -space-y-1.5">
        <p className="font-bold text-xl">{props.authUser.name}</p>
        <p className="text-sm text-gray-500">
          {props.authUserTweetCount}&nbsp;
          {props.authUserTweetCount === 1 ? "Tweet" : "Tweets"}
        </p>
      </div>
    </div>
  );
};

export default ProfileHeader;
