export default function toggleEditProfileModal(state = false, action) {
  switch (action.type) {
    case "TOGGLE_EDIT_PROFILE_MODAL":
      return action.bool;
    default:
      return state;
  }
}
