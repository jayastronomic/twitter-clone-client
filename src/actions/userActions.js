export const fetchAuthUserSuccess = (obj) => {
  return {
    type: "FETCH_AUTH_USER_SUCCESS",
    authUser: obj,
  };
};

export const loggedIn = (bool) => {
  return {
    type: "LOGGED_IN",
    bool: bool,
  };
};

export const removeAuthUser = (obj) => {
  return {
    type: "REMOVE_AUTH_USER",
    authUser: obj,
  };
};

export const updateAuthUserSuccess = (obj) => {
  return {
    type: "UPDATE_AUTH_USER_SUCCESS",
    updatedAuthUser: obj,
  };
};

export const fetchAuthUserFollowersSuccess = (arr) => {
  return {
    type: "FETCH_AUTH_USER_FOLLOWERS_SUCCESS",
    authUserFollowers: arr,
  };
};

export const fetchAuthUserFollowingsSuccess = (arr) => {
  return {
    type: "FETCH_AUTH_USER_FOLLOWINGS_SUCCESS",
    authUserFollowings: arr,
  };
};
