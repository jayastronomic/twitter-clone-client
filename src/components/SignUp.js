import React, { Component } from "react";
import "../styles/SignUp.css";

import { Link } from "react-router-dom";

const API = "http://localhost:3002/api/v1/users";

class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      username: "",
      name: "",
      password: "",
      passwordConfirmation: "",
    };
  }

  redirect = () => {
    this.props.history.push("/");
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const newUser = {
      user: {
        email: this.state.email,
        username: this.state.username,
        name: this.state.name,
        password: this.state.password,
        password_confirmation: this.state.passwordConfirmation,
      },
    };

    const payload = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
      credentials: "include",
    };

    fetch(API, payload)
      .then((resp) => resp.json())
      .then((resObj) => {
        console.log(resObj);
        this.props.handleLogin(resObj);
      });

    this.setState({
      email: "",
      username: "",
      name: "",
      password: "",
      passwordConfirmation: "",
    });

    this.redirect();
  };

  render() {
    return (
      <div className="flex justify-center pt-4">
        <div className="flex flex-col">
          <i class="fab fa-twitter fa-2x text-blue-400"></i>

          <form
            onSubmit={this.handleSubmit}
            className="flex flex-col space-y-6 pt-4"
          >
            <pre className="text-3xl font-bold archivo">
              Sign up for Twitter {"   "}
            </pre>
            <input
              type="email"
              onChange={this.handleChange}
              name="email"
              value={this.state.email}
              className="border-2 border-gray-300 rounded px-2 py-4 focus:border-blue-400 focus:outline-none"
              placeholder="Email"
            />
            <input
              onChange={this.handleChange}
              name="username"
              value={this.state.username}
              className="border-2 border-gray-300 rounded px-2 py-4 focus:border-blue-400 focus:outline-none"
              placeholder="Username"
            />
            <input
              onChange={this.handleChange}
              name="name"
              value={this.state.name}
              className="border-2 border-gray-300 rounded px-2 py-4 focus:border-blue-400 focus:outline-none"
              placeholder="Name"
            />
            <input
              type="password"
              onChange={this.handleChange}
              name="password"
              value={this.state.password}
              className="border-2 border-gray-300 rounded px-2 py-4 focus:border-blue-400 focus:outline-none"
              placeholder="Password"
            />
            <input
              type="password"
              onChange={this.handleChange}
              name="passwordConfirmation"
              value={this.state.passwordConfirmation}
              className="border-2 border-gray-300 rounded px-2 py-4 focus:border-blue-400 focus:outline-none"
              placeholder="Confirm password"
            />
            <input
              className="bg-blue-300 rounded-full text-white font-bold py-4 hover:bg-blue-400 transition cursor-pointer"
              value="Sign up"
              type="submit"
            />
            <Link to="login" className="flex justify-center">
              <p className="text-blue-400">Already have an account? Log in</p>
            </Link>
          </form>
        </div>
      </div>
    );
  }
}

export default SignUp;
