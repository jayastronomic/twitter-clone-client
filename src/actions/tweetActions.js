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
