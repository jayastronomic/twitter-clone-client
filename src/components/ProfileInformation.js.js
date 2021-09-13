import React from "react";
import { connect } from "react-redux";
import "../styles/ProfileInformation.css";

import ProfileNav from "./ProfilleNav";
import Bio from "./Bio";

import EditProfleModal from "./EditProfileModal";

import { toggleEditProfileModal } from "../actions/editProfileModalActions";

const ProfileInformation = (props) => {
  return (
    <div className="profile-information flex flex-col-reverse bg-cover ">
      <div className="flex flex-col-reverse bg-white profile-information-details">
        <div className="flex pb-4 pl-4 space-x-4">
          <p>
            <span className="font-bold">0</span>{" "}
            <span className="text-gray-500">Following</span>
          </p>
          <p>
            <span className="font-bold">0</span>{" "}
            <span className="text-gray-500">Followers</span>
          </p>
        </div>

        <div className="pl-4 flex space-x-2">
          <div className="text-gray-500">
            <i className="fas fa-map-marker-alt"></i> Chicago
          </div>

          <div className="text-gray-500">
            <i className="far fa-calendar-check"></i> Joined January 2011
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
            onClick={() =>
              props.toggleEditProfileModal(!props.showEditProfileModal)
            }
            className="transition font-bold rounded-full border border-gray-400 px-4 py-2 hover:bg-gray-100"
          >
            Edit Profile
          </button>
        </div>
      </div>
      <div className="pl-4 transform translate-y-14">
        <i className="fas fa-user-circle fa-8x text-gray-300"></i>
      </div>
      {props.showEditProfileModal && (
        <EditProfleModal authUser={props.authUser} />
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    authUser: state.authUser,
    showEditProfileModal: state.toggleEditProfileModal,
  };
};

const mapDispatchToProps = {
  toggleEditProfileModal,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileInformation);
