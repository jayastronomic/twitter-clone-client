import React from "react";
import { Link } from "react-router-dom";
import "../styles/LogOutDropdown.css";

const LogOutDropdown = (props) => {
  return (
    <div className="log-out-dropdown flex absolute bottom-0 -right-10">
      <div className="border shadow-2xl rounded-2xl bg-white ">
        <div className="flex pl-4 pt-4 pb-3 pr-24 items-center border-b">
          {props.authUser.avatar_exist ? (
            <div className="flex rounded-full overflow-hidden w-14">
              <img alt="avatar" src={props.authUser.avatar_url} />
            </div>
          ) : (
            <i className="fas fa-user-circle text-gray-300 fa-3x " />
          )}
          <div className="flex flex-col pl-2">
            <p className="font-semibold">{props.authUser.name}</p>
            <p className="text-gray-500">@{props.authUser.username}</p>
          </div>
        </div>
        <div className="py-4 pl-4 hover:bg-gray-100 rounded-b-2xl ">
          <Link className="block" to="/logout">
            Log out @{props.authUser.username}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LogOutDropdown;
