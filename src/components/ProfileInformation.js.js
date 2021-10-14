import React from "react";
import { connect } from "react-redux";
import "../styles/ProfileInformation.css";
import { Link } from "react-router-dom";

// import Bio from "./Bio";

import EditProfleModal from "./EditProfileModal";

import { toggleEditProfileModal } from "../actions/editProfileModalActions";

const ProfileInformation = (props) => {
  return (
    <div className="profile-information flex flex-col-reverse bg-cover ">
      <div className="flex flex-col-reverse bg-white profile-information-details">
        <div className="flex pb-4 pl-4 space-x-4">
          <Link
            to={`/${props.authUser.username}/following`}
            className="hover:underline"
          >
            <span className="font-bold">{props.authUser.followings}</span>{" "}
            <span className="text-gray-500">Following</span>
          </Link>
          <Link
            to={`/${props.authUser.username}/followers`}
            className="hover:underline"
          >
            <span className="font-bold">{props.authUser.followers}</span>{" "}
            <span className="text-gray-500">Followers</span>
          </Link>
        </div>

        <div className="pl-4 flex">
          {props.authUser.location ? (
            <div className="text-gray-500 space-x-2 flex items-center">
              <i className="fa fa-map-marker-alt"></i>
              <p className="pr-4">{props.authUser.location}</p>
            </div>
          ) : null}

          {props.authUser.website ? (
            <div className="flex text-gray-500 space-x-2 items-center">
              <i className="fas fa-link" />{" "}
              <Link className="pr-4">{props.authUser.website}</Link>
            </div>
          ) : null}

          <div className="text-gray-500">
            <i className="far fa-calendar-check"></i> Joined{" "}
            {props.authUser.month_joined} {props.authUser.year_joined}
          </div>
        </div>

        <div className="pl-4 pb-2">
          {props.authUser.name && (
            <p className="font-bold text-xl">{props.authUser.name}</p>
          )}
          <p className="text-gray-500">@{props.authUser.username}</p>
        </div>

        <div className="edit-button-container flex flex-row-reverse pb-8 pr-4 py-2">
          <button
            onClick={() => props.toggleEditProfileModal()}
            className="transition font-bold rounded-full border border-gray-400 px-4 py-2 hover:bg-gray-100"
          >
            Edit Profile
          </button>
        </div>
      </div>
      <div className="pl-4 transform translate-y-14">
        {props.authUser.avatar_exist ? (
          <div className="rounded-full overflow-hidden w-32 border-4 border-white">
            <img alt="avatar" src={props.authUser.avatar_url} />
          </div>
        ) : (
          <i className="fas fa-user-circle fa-8x text-gray-300"></i>
        )}
      </div>
      {props.showEditProfileModal && (
        <EditProfleModal authUser={props.authUser} />
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    showEditProfileModal: state.toggleEditProfileModal,
  };
};

const mapDispatchToProps = {
  toggleEditProfileModal,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileInformation);
