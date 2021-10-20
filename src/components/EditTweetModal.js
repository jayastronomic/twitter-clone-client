import React, { Component } from "react";
import "../styles/EditTweetModal.css";

import {
  editTweetSuccess,
  editAuthUserTweetSuccess,
} from "../actions/tweetActions";

import { connect } from "react-redux";

const API = "http://localhost:3002/api/v1/tweets/";

class EditTweetModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: this.props.tweet.content,
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const editedTweet = {
      content: this.state.content,
    };

    const payload = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editedTweet),
      credentials: "include",
    };

    fetch(API + `${this.props.tweet.id}`, payload)
      .then((resp) => resp.json())
      .then((resObj) => {
        this.props.editTweetSuccess(resObj);
        this.props.editAuthUserTweetSuccess(resObj);
        this.props.setEdited(true);
        if (
          this.props.location.pathname ===
          `/${this.props.authUser.username}/status/${this.props.tweet.id}`
        ) {
          this.props.updateTweetContent(resObj);
        }
      });

    this.props.setIsEditTweetModalOpen(false);
  };

  render() {
    console.log(this.props);
    return (
      <div className="outer-edit-tweet-modal fixed inset-0 flex flex-col items-center">
        <div className="pt-10"></div>
        <form
          onSubmit={this.handleSubmit}
          className="flex flex-col bg-white rounded-2xl edit-tweet-modal z-10"
        >
          <div className="border-b pl-4 py-2">
            <button
              onClick={() => this.props.setIsEditTweetModalOpen(false)}
              className="rounded-full fas fa-times hover:bg-gray-200 h-8 w-8"
            ></button>
          </div>
          <div className="pt-2 flex pr-4 pl-4">
            {this.props.tweet.avatar_exist ? (
              <div className=" rounded-full overflow-hidden w-16 h-14">
                <img
                  className="object-cover"
                  alt="avatar"
                  src={this.props.tweet.avatar_url}
                />
              </div>
            ) : (
              <i class="fas fa-user-circle fa-3x text-gray-300"></i>
            )}
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
                alt=""
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
                value="Edit Tweet"
              />
            </div>
          </div>
        </form>
        <button
          onClick={() => this.props.setIsEditTweetModalOpen(false)}
          className="bg-black h-full w-full fixed bg-opacity-50 cursor-default"
        />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    authUser: state.authUser,
  };
};

const mapDispatchToProps = {
  editTweetSuccess,
  editAuthUserTweetSuccess,
};

export default connect(mapStateToProps, mapDispatchToProps)(EditTweetModal);
