export default function tweets(state = [], action) {
  switch (action.type) {
    case "FETCH_TWEETS_SUCCESS":
      return action.tweets;
    case "CREATE_TWEET_SUCCESS":
      const newTweet = action.tweet;
      return [newTweet, ...state];
    case "DELETE_TWEET_SUCCESS":
      const deletedTweet = action.deletedTweet;
      return state.filter((tweet) => tweet.id !== deletedTweet.id);
    default:
      return state;
  }
}
