import React, { useState } from "react";
import "../styles/ConnectCard.css";

import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addFollowing, subFollowing } from "../actions/followActions";

const API = "http://localhost:3002/api/v1/follows";

const ConnectCard = (props) => {
  const [following, setFollowing] = useState(props.user.followed_user);
  const follow = () => {
    const newFollow = {
      user: {
        follower_id: props.authUser.id,
        followed_user_id: props.user.id,
      },
    };

    const payload = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newFollow),
      credentials: "include",
    };

    fetch(API, payload)
      .then((resp) => resp.json())
      .then((resObj) => {
        if (resObj.created) {
          setFollowing(!following);
          props.addFollowing();
        } else {
          setFollowing(!following);
          props.subFollowing();
        }
      });
  };
  return (
    <div className="flex flex-col hover:bg-gray-100 p-4 -space-y-1 cursor-pointer">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <div>
            {props.user.avatar_exist ? (
              <div className="flex overflow-hidden rounded-full w-14">
                <img alt="avatar" src={props.user.avatar_url} />
              </div>
            ) : (
              <i className="fas fa-user-circle fa-3x text-gray-300" />
            )}
          </div>
          <div className="-space-y-2 pl-4">
            <p className="font-medium">{props.user.name}</p>
            <p className="text-gray-500">@{props.user.username}</p>
          </div>
        </div>
        <div>
          {following ? (
            <button
              onClick={() => follow()}
              className="following-button hover:text-red-600  hover:bg-red-100 transition py-1 px-4 rounded-full border-gray-300 border font-semibold "
            >
              <span className="">Following</span>
            </button>
          ) : (
            <button
              onClick={() => follow()}
              className="py-1 px-4 bg-black rounded-full text-white font-semibold"
            >
              Follow
            </button>
          )}
        </div>
      </div>
      <div className="pl-16 leading-tight">
        <div>{props.user.bio}</div>
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  addFollowing,
  subFollowing,
};

export default connect(null, mapDispatchToProps)(ConnectCard);
