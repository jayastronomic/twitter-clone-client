import React, { Component } from "react";
import "../styles/TweetModal.css";

import { connect } from "react-redux";
import { toggle } from "../actions/tweetModalActions";

import { createTweetSuccess } from "../actions/tweetActions";

const API = "http://localhost:3002/api/v1/tweets";

class TweetModal extends Component {
  constructor() {
    super();
    this.state = {
      content: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const newTweet = {
      content: this.state.content,
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
      .then((resObj) => this.props.createTweetSuccess(resObj));

    this.setState({
      content: "",
    });

    this.props.toggle(!this.props.toggleTweetModal);
  };

  render() {
    return (
      <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center pt-10">
        <form
          onSubmit={this.handleSubmit}
          className="flex flex-col bg-white rounded-2xl tweet-modal"
        >
          <div className="border-b pl-4 py-2">
            <button
              onClick={() => this.props.toggle(!this.props.toggleTweetModal)}
              className="rounded-full fas fa-times hover:bg-gray-200 p-2"
            ></button>
          </div>
          <div className="pt-2 flex pr-4 pl-4">
            <i class="fas fa-user-circle fa-3x text-gray-300"></i>
            <textarea
              onChange={this.handleChange}
              name="content"
              value={this.state.content}
              className="resize-none h-48 w-full text-xl focus:outline-none pt-4 pl-4 border-b"
              placeholder="What's happening?"
            />
          </div>
          <div className="flex items-center pl-16 py-4">
            <div className="flex items-center space-x-4">
              <i className="text-blue-400 far fa-image"></i>
              <img
                className="text-blue-400"
                src="https://img.icons8.com/material-outlined/20/60a5fa/gif.png"
              />
              <i className="text-blue-400 fas fa-poll-h"></i>
              <i className="text-blue-400 far fa-smile"></i>
              <i className="text-blue-400 far fa-calendar"></i>
            </div>
            <div className="flex flex-row-reverse w-full pr-4">
              <input
                className="font-bold text-white bg-blue-400 px-4 py-2 rounded-full hover:bg-blue-500 cursor-pointer"
                type="submit"
                value="Tweet"
              />
            </div>
          </div>
        </form>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    toggleTweetModal: state.toggleTweetModal,
  };
};
const mapDispatchToProps = {
  toggle,
  createTweetSuccess,
};

export default connect(mapStateToProps, mapDispatchToProps)(TweetModal);
