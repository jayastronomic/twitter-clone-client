import React from "react";
import { Link } from "react-router-dom";
import WhoToFollowCard from "./WhoToFollowCard";

const WhoToFollow = () => {
  return (
    <div className="pt-4">
      <div className="bg-gray-100 rounded-2xl">
        <div className="text-xl font-bold px-4 pt-4">Who to follow</div>
        <WhoToFollowCard />
        <WhoToFollowCard />
        <WhoToFollowCard />
        <Link
          to="/connect"
          className="block px-4 py-4 text-blue-500 hover:bg-gray-200 rounded-b-2xl w-full"
        >
          show more
        </Link>
      </div>
    </div>
  );
};

export default WhoToFollow;
