import { combineReducers } from "redux";
import authUser from "./authUser";
import isLoggedIn from "./isLoggedIn";
import tweets from "./tweets";
import toggleTweetModal from "./toggleTweetModal";
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
  authUserTweets,
  authUserLikes,
  authUserTweetCount,
  authUserFollowers,
  authUserFollowings,
});
