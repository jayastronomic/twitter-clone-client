export default function authUserTweetCount(state = 0, action) {
  switch (action.type) {
    case "LOAD_AUTH_USER_TWEET_COUNT":
      state = action.num;
      return state;
    case "ADD_TWEET_COUNT":
      state = state + 1;
      return state;
    case "SUB_TWEET_COUNT":
      state = state - 1;
      return state;
    default:
      return state;
  }
}
