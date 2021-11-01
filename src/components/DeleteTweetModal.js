import React from "react";
import { connect } from "react-redux";

import { useRouteMatch, useHistory } from "react-router";

import {
  deleteTweetSuccess,
  deleteAuthUserTweetSuccess,
  subTweetCount,
} from "../actions/tweetActions";

const API = "http://localhost:3002/api/v1/tweets";

const DeleteTweetModal = (props) => {
  const { path } = useRouteMatch();
  const history = useHistory();

  const goBack = () => {
    history.goBack();
  };

  const deleteTweet = (e) => {
    fetch(API + `/${props.tweetId}`, {
      method: "DELETE",
      credentials: "include",
    })
      .then((resp) => resp.json())
      .then((resObj) => {
        if (resObj.destroyed) {
          props.deleteTweetSuccess(resObj);
          props.deleteAuthUserTweetSuccess(resObj);
        }
      });

    if (path === "/:usersame/status/:tweet_id") {
      goBack();
    }
  };
  return (
    <div className="inset-0 fixed flex items-center justify-center">
      <div className="z-10 w-80 h-76 bg-white p-8 rounded-2xl">
        <p className="text-xl font-bold">Delete Tweet?</p>
        <p className="text-gray-500 text-sm">
          This can’t be undone and it will be removed from your profile, the
          timeline of any accounts that follow you, and from Twitter search
          results.
        </p>
        <div className="flex flex-col space-y-3 pt-4">
          <button
            onClick={(e) => deleteTweet(e)}
            className="bg-red-500 text-white font-bold rounded-full py-2"
          >
            Delete
          </button>
          <button
            onClick={() => props.setIsDeleteTweetModalOpen(false)}
            className="border rounded-full font-bold py-2"
          >
            Cancel
          </button>
        </div>
      </div>
      <button
        onClick={() => props.setIsDeleteTweetModalOpen(false)}
        className="fixed h-full w-full bg-black bg-opacity-40 cursor-default"
      />
    </div>
  );
};

const mapDispatchToProps = {
  deleteTweetSuccess,
  deleteAuthUserTweetSuccess,
  subTweetCount,
};

export default connect(null, mapDispatchToProps)(DeleteTweetModal);
