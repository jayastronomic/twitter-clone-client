import { combineReducers } from "redux";
import authUser from "./authUser";
import isLoggedIn from "./isLoggedIn";
import tweets from "./tweets";
import toggleTweetModal from "./toggleTweetModal";
import toggleEditProfileModal from "./toggleEditProfileModal";

export default combineReducers({
  authUser,
  isLoggedIn,
  tweets,
  toggleTweetModal,
  toggleEditProfileModal,
});
