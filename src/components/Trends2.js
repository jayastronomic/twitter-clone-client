import React, { useState } from "react";
import "../styles/Trends2.css";
import { trendSeedData } from "./data/trendSeedData";

import WhoToFollow from "./WhoToFollow";
import TrendCard from "./TrendCard";

const Trends2 = () => {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <div className="trends border-gray-100 border-l h-screen overflow-auto">
      <div className="pl-8 trends-container">
        <div className="pt-1">
          {isFocused ? (
            <div className="border border-blue-400 relative bg-white pl-10 pr-12 py-2 rounded-full">
              <i className="absolute text-gray-400 left-4 fas fa-search ml-2 mt-1" />
              <input
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                className="focus:outline-none ml-6 bg-transparent w-60"
                placeholder="Search Twitter"
              />
            </div>
          ) : (
            <div className="border border-transparent relative bg-gray-100 pl-10 pr-12 py-2 rounded-full">
              <i className="absolute text-gray-400 left-4 fas fa-search ml-2 mt-1" />
              <input
                onFocus={() => setIsFocused(true)}
                className="focus:outline-none ml-6 bg-transparent w-60"
                placeholder="Search Twitter"
              />
            </div>
          )}
        </div>

        <div className="pt-4">
          <div className="bg-gray-100 rounded-2xl">
            <div className="p-4 font-bold text-xl">What's Happening</div>
            {trendSeedData.map((trend, i) => {
              return <TrendCard key={i} trend={trend} />;
            })}
            <div className="p-4 text-blue-500 hover:bg-gray-200 rounded-b-2xl cursor-pointer">
              Show more
            </div>
          </div>
        </div>

        <WhoToFollow />
        <div className="h-32"></div>
      </div>
    </div>
  );
};

export default Trends2;
