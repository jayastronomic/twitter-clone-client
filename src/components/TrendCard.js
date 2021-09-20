import React from "react";
import nas from "../assets/nas.jpg";

const TrendCard = (props) => {
  return (
    <div className="flex transition hover:bg-gray-200 cursor-pointer">
      <div className="flex flex-col px-4 py-3">
        <p className="block text-gray-500 text-sm">{props.trend.topic}</p>
        <p className="block font-medium text-gray-900">
          {props.trend.description}
        </p>
        <p className="block text-sm text-gray-500">
          Trending with{" "}
          <span className="text-blue-500">#{props.trend.hashtag}</span>,{" "}
          <span className="text-blue-500">{props.trend.name}</span>
        </p>
      </div>
      <div className="">
        <img
          className="w-16 h-16 mt-3 mr-10 rounded-xl object-cover"
          alt="Montero"
          src={props.trend.imgUrl}
        />
      </div>
    </div>
  );
};

export default TrendCard;
