export default function authUserTweets(state = [], action) {
  switch (action.type) {
    case "FETCH_AUTH_USER_TWEETS_SUCCESS":
      return action.authUserTweets;
    case "CREATE_AUTH_USER_TWEET_SUCCESS":
      const newAuthUserTweet = action.authUserTweet;
      return [newAuthUserTweet, ...state];
    default:
      return state;
  }
}
