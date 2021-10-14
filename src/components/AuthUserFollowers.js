import React, { useEffect } from "react";
import ConnectContainer from "../containers/ConnectContainer";

import { connect } from "react-redux";
import { fetchAuthUserFollowersSuccess } from "../actions/userActions";

const API = "http://localhost:3002/api/v1/users/";

const AuthUserFollowers = (props) => {
  useEffect(() => {
    fetch(API + `${props.authUser.id}/followers`, { credentials: "include" })
      .then((resp) => resp.json())
      .then((resObj) => props.fetchAuthUserFollowersSuccess(resObj));
  }, []);
  if (props.authUserFollowers.length > 0) {
    return (
      <ConnectContainer
        users={props.authUserFollowers}
        authuser={props.authUser}
      />
    );
  } else {
    return (
      <div className="flex justify-center items-center h-full">
        <p className="text-3xl font-medium text-gray-300">
          You have no followers
        </p>
      </div>
    );
  }
};

const mapDispatchToProps = {
  fetchAuthUserFollowersSuccess,
};

const mapStateToProps = (state) => {
  return {
    authUserFollowers: state.authUserFollowers,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthUserFollowers);
