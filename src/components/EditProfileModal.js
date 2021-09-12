import React, { Component } from "react";
import "../styles/EditProfileModal.css";
import { connect } from "react-redux";

import { toggleEditProfileModal } from "../actions/editProfileModalActions";

import { updateAuthUserSuccess } from "../actions/userActions";

const API = "http://localhost:3002/api/v1/users/";

class EditProfleModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.authUser.name,
      bio: this.props.authUser.bio,
      location: this.props.authUser.location,
      website: this.props.authUser.website,
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const editedUser = {
      name: this.state.name,
      bio: this.state.bio,
      location: this.state.location,
      website: this.props.authUser.website,
    };

    const payload = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editedUser),
      credentials: "include",
    };

    fetch(API + `${this.props.authUser.id}`, payload)
      .then((resp) => resp.json())
      .then((resObj) => this.props.updateAuthUserSuccess(resObj));

    this.props.toggleEditProfileModal(!this.props.showEditProfileModal);
  };

  render() {
    return (
      <div className="edit-profile-modal flex absolute inset-0 bg-black bg-opacity-50 justify-center items-center">
        <form
          onSubmit={this.handleSubmit}
          className="edit-profile-form bg-white rounded-2xl "
        >
          <div className="flex justify-between border-b p-4">
            <div className="flex items-center space-x-10">
              <i
                onClick={() =>
                  this.props.toggleEditProfileModal(
                    !this.props.showEditProfileModal
                  )
                }
                className="fas fa-times cursor-pointer"
              ></i>
              <p className="font-bold text-xl"> Edit Profile</p>
            </div>

            <div className="flex ">
              <div className="save-button-container flex w-1/2">
                <input
                  type="submit"
                  className="bg-black text-white font-bold text-sm px-4 py-2 rounded-full focus:outline-none cursor-pointer"
                  value="Save"
                />
              </div>
            </div>
          </div>

          <div className="flex justify-center pt-4">
            <i className="fas fa-user-circle fa-6x text-gray-300"></i>
          </div>

          <div className="flex flex-col px-4 pt-4 ">
            <div className="flex flex-col">
              <div className="rounded-t border-gray-300 border-l border-r border-t text-sm pl-2 pt-2">
                Name
              </div>

              <input
                onChange={this.handleChange}
                name="name"
                value={this.state.name}
                className="rounded-b border-gray-300 focus:outline-none border-b border-l border-r p-2"
              />
            </div>
          </div>

          <div className="flex flex-col px-4 pt-4">
            <div className="flex flex-col">
              <div className="rounded-t border-gray-300 border-l border-r border-t text-sm pl-2 pt-2">
                Bio
              </div>
              <input
                onChange={this.handleChange}
                name="bio"
                value={this.state.bio}
                className=" rounded-b border-gray-300 focus:outline-none border-b border-l border-r p-2"
              />
            </div>
          </div>

          <div className="flex flex-col px-4 pt-4">
            <div className="flex flex-col">
              <div className="rounded-t border-gray-300 border-l border-r border-t text-sm pl-2 pt-2">
                Location
              </div>
              <input
                onChange={this.handleChange}
                name="location"
                value={this.state.location}
                className=" rounded-b border-gray-300 focus:outline-none border-b border-l border-r p-2"
              />
            </div>
          </div>

          <div className="flex flex-col px-4 pt-4">
            <div className="flex flex-col">
              <div className="rounded-t border-gray-300 border-l border-r border-t text-sm pl-2 pt-2">
                Website
              </div>
              <input
                onChange={this.handleChange}
                name="website"
                value={this.state.website}
                className=" rounded-b border-gray-300 focus:outline-none border-b border-l border-r p-2"
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
    showEditProfileModal: state.toggleEditProfileModal,
  };
};

const mapDispatchToProps = {
  toggleEditProfileModal,
  updateAuthUserSuccess,
};

export default connect(mapStateToProps, mapDispatchToProps)(EditProfleModal);
