import React, { useEffect } from "react";
import { connect } from "react-redux";
import UserLikesContainer from "../containers/UserLikesContainer";
import { fetchUserLikesSuccess } from "../actions/likeActions";

const API = "http://localhost:3002/api/v1/users";

const UserLikes = (props) => {
  useEffect(() => {
    fetch(API + `/${props.user.id}/user_likes`, { credentials: "include" })
      .then((resp) => resp.json())
      .then((resObj) => props.fetchUserLikesSuccess(resObj));
  }, []);
  if (props.userLikes.length > 0) {
    return (
      <UserLikesContainer
        location={props.location}
        userLikes={props.userLikes}
      />
    );
  } else {
    return (
      <div className="flex justify-center items-center pt-20">
        <div className="text-gray-400 text-3xl">
          {props.user.username} has no likes
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    userLikes: state.userLikes,
  };
};

const mapDispatchToProps = {
  fetchUserLikesSuccess,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserLikes);
