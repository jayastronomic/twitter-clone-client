export default function userTweetCount(state = 0, action) {
  switch (action.type) {
    case "LOAD_USER_TWEET_COUNT":
      state = action.num;
      return state;
    default:
      return state;
  }
}
