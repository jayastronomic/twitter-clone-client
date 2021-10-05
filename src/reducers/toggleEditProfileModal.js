export default function toggleEditProfileModal(state = false, action) {
  switch (action.type) {
    case "TOGGLE_EDIT_PROFILE_MODAL":
      return !state;
    default:
      return state;
  }
}
