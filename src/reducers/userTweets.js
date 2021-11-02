export default function userTweets(state = [], action) {
  switch (action.type) {
    case "FETCH_USER_TWEETS_SUCCESS":
      return [...action.userTweets];
    default:
      return state;
  }
}
