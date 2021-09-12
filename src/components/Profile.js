import React from "react";
import "../styles/Profile.css";
import { connect } from "react-redux";

import ProfileInformation from "./ProfileInformation.js";

const Profile = (props) => {
  return (
    <div className="profile h-screen flex flex-col">
      <div className="profile-header font-bold text-xl border-b py-4 pl-2 ">
        {props.authUser.username}
      </div>
      <ProfileInformation authUser={props.authUser} />
    </div>
  );
};

// const mapStatetoProps = (state) => {
//   return {
//     authUser: state.authUser,
//   };
// };

export default connect(null, null)(Profile);
