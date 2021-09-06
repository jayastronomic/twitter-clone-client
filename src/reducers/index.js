import { combineReducers } from "redux";
import authUser from "./authUser";
import isLoggedIn from "./isLoggedIn";

export default combineReducers({
  authUser,
  isLoggedIn,
});
