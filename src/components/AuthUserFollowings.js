import React, { useEffect } from "react";
import ConnectContainer from "../containers/ConnectContainer";

import { connect } from "react-redux";
import { fetchAuthUserFollowingsSuccess } from "../actions/userActions";

const API = "http://localhost:3002/api/v1/users/";

const AuthUserFollowings = (props) => {
  useEffect(() => {
    fetch(API + `${props.authUser.id}/followings`, { credentials: "include" })
      .then((resp) => resp.json())
      .then((resObj) => props.fetchAuthUserFollowingsSuccess(resObj));
  }, []);
  if (props.authUserFollowings.length > 0) {
    return (
      <ConnectContainer
        users={props.authUserFollowings}
        authuser={props.authUser}
      />
    );
  } else {
    return (
      <div className="flex justify-center items-center h-full">
        <p className="text-3xl font-medium text-gray-300">
          You have no followings
        </p>
      </div>
    );
  }
};

const mapDispatchToProps = {
  fetchAuthUserFollowingsSuccess,
};

const mapStateToProps = (state) => {
  return {
    authUserFollowings: state.authUserFollowings,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthUserFollowings);
