import { combineReducers } from "redux";
import authUser from "./authUser";
import isLoggedIn from "./isLoggedIn";
import tweets from "./tweets";
import toggleTweetModal from "./toggleTweetModal";
import toggleEditProfileModal from "./toggleEditProfileModal";
import authUserTweets from "./authUserTweets";
import authUserLikes from "./authUserLikes";
import authUserTweetCount from "./authUserTweetCount";
import authUserFollowers from "./authUserFollowers";
import authUserFollowings from "./authUserFollowings";

export default combineReducers({
  authUser,
  isLoggedIn,
  tweets,
  toggleTweetModal,
  toggleEditProfileModal,
  authUserTweets,
  authUserLikes,
  authUserTweetCount,
  authUserFollowers,
  authUserFollowings,
});
