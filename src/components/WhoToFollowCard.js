import React from "react";

const WhoToFollowCard = () => {
  return (
    <div className="flex justify-between items-center hover:bg-gray-200 cursor-pointer px-4 py-4 transition">
      <div className="flex items-center">
        <div>
          <i className="fas fa-user-circle fa-3x text-gray-300" />
        </div>
        <div className="flex flex-col pl-4 -space-y-2">
          <p className="block font-medium">Name</p>
          <p className="block text-gray-500">@username</p>
        </div>
      </div>
      <div>
        <button className="py-1 px-4 bg-black rounded-full text-white font-semibold">
          Follow
        </button>
      </div>
    </div>
  );
};

export default WhoToFollowCard;
