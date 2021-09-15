export default function authUserLikes(state = [], action) {
  switch (action.type) {
    case "FETCH_AUTH_USER_LIKES_SUCCESS":
      return action.authUserLikes;
    case "DELETE_LIKE_SUCCESS":
      const deletedLikedTweet = action.deletedLikedTweet;
      return state.filter(
        (likedTweet) => likedTweet.id !== deletedLikedTweet.id
      );
    default:
      return state;
  }
}
