import React, { useEffect } from "react";

import UserLikesContainer from "../containers/UserLikesContainer";

import { connect } from "react-redux";
import { fetchAuthUserLikesSuccess } from "../actions/likeActions";

const API = "http://localhost:3002/api/v1/users";

const AuthUserLikes = (props) => {
  useEffect(() => {
    fetch(API + `/${props.authUserId}/likes`, { credentials: "include" })
      .then((resp) => resp.json())
      .then((resObj) => {
        props.fetchAuthUserLikesSuccess(resObj);
      });
  }, []);

  if (props.authUserLikes.length > 0) {
    return (
      <UserLikesContainer
        location={props.location}
        userLikes={props.authUserLikes}
      />
    );
  } else {
    return (
      <div className="flex justify-center items-center pt-20">
        <div className="text-gray-400 text-3xl">You have no likes</div>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    authUserLikes: state.authUserLikes,
    authUserId: state.authUser.id,
  };
};

const mapDispatchToProps = {
  fetchAuthUserLikesSuccess,
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthUserLikes);
