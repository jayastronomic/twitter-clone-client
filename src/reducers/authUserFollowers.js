export default function authUserFollowers(state = [], action) {
  switch (action.type) {
    case "FETCH_AUTH_USER_FOLLOWERS_SUCCESS":
      return [...action.authUserFollowers];
    default:
      return state;
  }
}
