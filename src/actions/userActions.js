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
