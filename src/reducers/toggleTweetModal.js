export default function toggleTweetModal(state = false, action) {
  switch (action.type) {
    case "TOGGLE_TWEET_MODAL":
      return action.bool;
    default:
      return state;
  }
}
