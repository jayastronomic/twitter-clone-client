import React, { useRef, useState } from "react";
import GlobeIcon from "./icons/GlobeIcon";
import { connect } from "react-redux";
import "../styles/HomeTweetForm.css";

import {
  createTweetSuccess,
  createAuthUserTweetSuccess,
  addTweetCount,
} from "../actions/tweetActions";

const API = "http://localhost:3002/api/v1/tweets";

const HomeTweetForm = (props) => {
  const textarea = useRef();
  const [textAreaValue, setTextAreaValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const handleInput = () => {
    setTextAreaValue(textarea.current.innerText);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTweet = {
      content: textAreaValue,
    };

    const payload = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTweet),
      credentials: "include",
    };

    fetch(API, payload)
      .then((resp) => resp.json())
      .then((resObj) => {
        props.createTweetSuccess(resObj);
        props.createAuthUserTweetSuccess(resObj);
        props.addTweetCount();
      });

    textarea.current.innerText = "";
    setTextAreaValue("");
    setIsFocused(false);
  };

  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className="home-tweet-form flex border-b border-gray-100"
    >
      <div className="pl-4 pt-2">
        <div className="rounded-full overflow-hidden w-12">
          <img alt="avatar" src={props.authUser.avatar_url} />
        </div>
      </div>
      <div className="flex flex-col pl-4  w-full pr-4">
        <div className="">
          <div
            name="content"
            role="textbox"
            rows={2}
            contentEditable={true}
            className="textarea block text-xl pt-4 focus:outline-none resize-none"
            ref={textarea}
            onInput={() => handleInput()}
            onFocus={() => setIsFocused(true)}
          />
          {isFocused ? (
            <div className="flex pt-4 pb-4">
              <button className="flex self-start hover:bg-blue-100 text-sm text-blue-500 font-bold rounded-full px-2 -translate-x-2 py-0.5 transform">
                <GlobeIcon />
                &nbsp;Everyone can reply
              </button>
            </div>
          ) : null}
        </div>
        {isFocused ? <div className="border-t"></div> : null}

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <i className="text-blue-400 far fa-image"></i>
            <img
              alt=""
              className="text-blue-400"
              src="https://img.icons8.com/material-outlined/20/60a5fa/gif.png"
            />
            <i className="text-blue-400 fas fa-poll-h"></i>
            <i className="text-blue-400 far fa-smile"></i>
            <i className="text-blue-400 far fa-calendar"></i>
          </div>

          <div className="flex py-4">
            {/\S/.test(textAreaValue) ? (
              <button
                type="submit"
                className="bg-blue-400 text-white font-bold py-2 px-4 rounded-full cursor-pointer"
              >
                Tweet
              </button>
            ) : (
              <button
                type="submit"
                className="bg-blue-200 text-white font-bold py-2 px-4 rounded-full cursor-default"
                disabled
              >
                Tweet
              </button>
            )}
          </div>
        </div>
      </div>
    </form>
  );
};

const mapDispatchToProps = {
  createTweetSuccess,
  createAuthUserTweetSuccess,
  addTweetCount,
};

export default connect(null, mapDispatchToProps)(HomeTweetForm);
