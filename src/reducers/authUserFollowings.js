export default function authUserFollowings(state = [], action) {
  switch (action.type) {
    case "FETCH_AUTH_USER_FOLLOWINGS_SUCCESS":
      return [...action.authUserFollowings];
    default:
      return state;
  }
}
