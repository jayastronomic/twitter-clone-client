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

export const createLikeSuccess = (obj) => {
  return {
    type: "CREATE_LIKE_SUCCESS",
    createdLikedTweet: obj,
  };
};
