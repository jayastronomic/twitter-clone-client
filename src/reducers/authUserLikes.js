export default function authUserLikes(state = [], action) {
  switch (action.type) {
    case "FETCH_AUTH_USER_LIKES_SUCCESS":
      const liked_tweets = action.authUserLikes.map((like) => {
        return like.tweet;
      });
      return liked_tweets;
    case "DELETE_LIKE_SUCCESS":
      const deletedLikedTweet = action.deletedLikedTweet;
      return state.filter(
        (likedTweet) => likedTweet.id !== deletedLikedTweet.id
      );
    default:
      return state;
  }
}
