import { combineReducers } from "redux";
import authUser from "./authUser";
import isLoggedIn from "./isLoggedIn";
import tweets from "./tweets";
import toggleTweetModal from "./toggleTweetModal";

export default combineReducers({
  authUser,
  isLoggedIn,
  tweets,
  toggleTweetModal,
});
