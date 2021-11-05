export default function userLikes(state = [], action) {
  switch (action.type) {
    case "FETCH_USER_LIKES_SUCCESS":
      const liked_tweets = action.userLikes.map((like) => {
        return like.tweet;
      });
      return liked_tweets;
    default:
      return state;
  }
}
