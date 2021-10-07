export default function authUser(state = {}, action) {
  switch (action.type) {
    case "FETCH_AUTH_USER_SUCCESS":
      return action.authUser;
    case "REMOVE_AUTH_USER":
      return action.authUser;
    case "UPDATE_AUTH_USER_SUCCESS":
      return action.updatedAuthUser;
    case "ADD_FOLLOWING":
      state.followings += 1;
      return state;
    case "SUB_FOLLOWING":
      state.followings -= 1;
      return state;
    case "ADD_TWEET_COUNT":
      console.log(state);
      state.total_tweets += 1;
      return state;
    default:
      return state;
  }
}
