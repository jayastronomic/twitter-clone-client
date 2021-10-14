export default function tweets(state = [], action) {
  switch (action.type) {
    case "FETCH_TWEETS_SUCCESS":
      return [...action.tweets];
    case "CREATE_TWEET_SUCCESS":
      const newTweet = action.tweet;
      return [newTweet, ...state];
    case "DELETE_TWEET_SUCCESS":
      const deletedTweet = action.deletedTweet;
      return state.filter((tweet) => tweet.id !== deletedTweet.id);
    case "EDIT_TWEET_SUCCESS":
      const editedTweet = action.editedTweet;
      const updatedState = state.map((tweet) =>
        tweet.id !== editedTweet.id ? tweet : { ...editedTweet }
      );
      return updatedState;
    default:
      return state;
  }
}
