export const fetchTweetsSuccess = (arr) => {
  return {
    type: "FETCH_TWEETS_SUCCESS",
    tweets: arr,
  };
};

export const createTweetSuccess = (obj) => {
  return {
    type: "CREATE_TWEET_SUCCESS",
    tweet: obj,
  };
};

export const fetchAuthUserTweetsSuccess = (arr) => {
  return {
    type: "FETCH_AUTH_USER_TWEETS_SUCCESS",
    authUserTweets: arr,
  };
};

export const createAuthUserTweetSuccess = (obj) => {
  return {
    type: "CREATE_AUTH_USER_TWEET_SUCCESS",
    authUserTweet: obj,
  };
};

export const deleteTweetSuccess = (obj) => {
  return {
    type: "DELETE_TWEET_SUCCESS",
    deletedTweet: obj,
  };
};

export const deleteAuthUserTweetSuccess = (obj) => {
  return {
    type: "DELETE_AUTH_USER_TWEET_SUCCESS",
    deletedAuthUserTweet: obj,
  };
};

export const loadAuthUserTweetCount = (num) => {
  return {
    type: "LOAD_AUTH_USER_TWEET_COUNT",
    num: num,
  };
};

export const addTweetCount = () => {
  return {
    type: "ADD_TWEET_COUNT",
  };
};
export const subTweetCount = () => {
  return {
    type: "SUB_TWEET_COUNT",
  };
};

export const editTweetSuccess = (obj) => {
  return {
    type: "EDIT_TWEET_SUCCESS",
    editedTweet: obj,
  };
};

export const editAuthUserTweetSuccess = (obj) => {
  return {
    type: "EDIT_AUTH_USER_TWEET_SUCCESS",
    editedAuthUserTweet: obj,
  };
};
