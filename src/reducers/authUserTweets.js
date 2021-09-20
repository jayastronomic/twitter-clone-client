export default function authUserTweets(state = [], action) {
  switch (action.type) {
    case "FETCH_AUTH_USER_TWEETS_SUCCESS":
      return action.authUserTweets;
    case "CREATE_AUTH_USER_TWEET_SUCCESS":
      const newAuthUserTweet = action.authUserTweet;
      return [newAuthUserTweet, ...state];
    case "DELETE_AUTH_USER_TWEET_SUCCESS":
      const deletedAuthUserTweet = action.deletedAuthUserTweet;
      return state.filter((tweet) => tweet.id !== deletedAuthUserTweet.id);
    default:
      return state;
  }
}
