import React, { useState } from "react";
import { connect } from "react-redux";
import "../styles/UserProfileInformation.css";
import { Link } from "react-router-dom";

import { addFollowing, subFollowing } from "../actions/followActions";

const API = "http://localhost:3002/api/v1/follows";

const UserProfileInformation = (props) => {
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
    <div className="relative profile-information flex flex-col">
      {props.user.background_exist ? (
        <img
          className="profile-bg object-cover"
          alt="Avatar"
          src={props.user.background_url}
        />
      ) : (
        <div className="bg-gray-200  h-48"></div>
      )}

      <div className="pl-3 pt-14 pb-2">
        {props.user.avatar_exist ? (
          <div className="absolute top-32  rounded-full overflow-hidden w-32 border-4 border-white">
            <img alt="avatar" src={props.user.avatar_url} />
          </div>
        ) : (
          <i className="absolute top-32  fas fa-user-circle fa-8x text-gray-300" />
        )}

        {following ? (
          <button
            onClick={() => follow()}
            className="hover:bg-red-100 hover:text-red-600 text-sm transition absolute right-4 top-52 font-bold border border-gray-300 rounded-full py-1.5 px-4 user-profile-follow-button"
          >
            <span>Following</span>
          </button>
        ) : (
          <button
            onClick={() => follow()}
            className="text-sm transition absolute right-4 top-52 text-white bg-black font-bold border border-gray-300 rounded-full py-1.5 px-4"
          >
            Follow
          </button>
        )}

        <div className="flex flex-col -space-y-1 pb-2">
          <p className="font-bold text-xl">{props.user.name}</p>
          <p className="text-gray-600 text-sm">@{props.user.username}</p>
        </div>
        {props.user.bio ? (
          <div className="pb-3 pr-6">
            <p className="break-words text-sm whitespace-pre-wrap">
              {props.user.bio}
            </p>
          </div>
        ) : null}
        <div className="flex text-sm pb-3">
          {props.user.location ? (
            <div className="text-gray-500 flex items-center pr-2">
              <i className="fa fa-map-marker-alt"></i>&nbsp;
              <p className="">{props.user.location}</p>
            </div>
          ) : null}
          {props.user.website ? (
            <div className="flex text-gray-500 space-x-2 items-center pr-2">
              <i className="fas fa-link" />
              <a
                href={props.user.website}
                className="hover:underline text-blue-400"
              >
                {props.user.website}
              </a>
            </div>
          ) : null}
          <div className="text-gray-500">
            <i className="far fa-calendar-check" />
            &nbsp;{props.user.month_joined}&nbsp;
            {props.user.year_joined}
          </div>
        </div>
        <div className="flex space-x-4">
          <Link
            to={`/${props.user.username}/following`}
            className="hover:underline"
          >
            <span className="font-bold">{props.user.followings}</span>
            &nbsp;
            <span className="text-gray-500">Following</span>
          </Link>
          <Link
            to={`/${props.user.username}/followers`}
            className="hover:underline"
          >
            <span className="font-bold">{props.user.followers}</span>
            &nbsp;
            <span className="text-gray-500">Followers</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
const mapDispatchToProps = {
  addFollowing,
  subFollowing,
};

export default connect(null, mapDispatchToProps)(UserProfileInformation);
