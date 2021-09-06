export default function isLoggedIn(state = false, action) {
  switch (action.type) {
    case "LOGGED_IN":
      return action.bool;
    default:
      return state;
  }
}
