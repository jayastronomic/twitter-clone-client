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
