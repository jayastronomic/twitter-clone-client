export const fetchAuthUserLikesSuccess = (arr) => {
  return {
    type: "FETCH_AUTH_USER_LIKES_SUCCESS",
    authUserLikes: arr,
  };
};

export const deleteLikeSuccess = (obj) => {
  return {
    type: "DELETE_LIKE_SUCCESS",
    deletedLikedTweet: obj,
  };
};
