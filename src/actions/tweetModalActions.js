export const toggle = (bool) => {
  return {
    type: "TOGGLE_TWEET_MODAL",
    bool: bool,
  };
};
