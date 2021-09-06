import React, { Component } from "react";
import { Link } from "react-router-dom";

const API = "http://localhost:3002/api/v1/login";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      usernameOrEmail: "",
      password: "",
    };
  }

  redirect = () => {
    this.props.history.push("/home");
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    if (this.state.usernameOrEmail.includes("@")) {
      const user = {
        user: {
          email: this.state.usernameOrEmail,
          password: this.state.password,
        },
      };

      const payload = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
        credentials: "include",
      };

      fetch(API, payload)
        .then((resp) => resp.json())
        .then((resObj) => this.props.handleLogin(resObj));

      this.setState({
        usernameOrEmail: "",
        password: "",
      });

      this.redirect();
    } else {
      const user = {
        user: {
          username: this.state.usernameOrEmail,
          password: this.state.password,
        },
      };

      const payload = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
        credentials: "include",
      };

      fetch(API, payload)
        .then((resp) => resp.json())
        .then((resObj) => this.props.handleLogin(resObj));

      this.setState({
        usernameOrEmail: "",
        password: "",
      });

      this.redirect();
    }
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
              Log in to Twitter {"     "}
            </pre>
            <input
              onChange={this.handleChange}
              name="usernameOrEmail"
              value={this.state.usernameOrEmail}
              className="border border-gray-300 rounded px-2 py-4 focus:border-blue-400 focus:outline-none"
              placeholder="Email or username"
            />

            <input
              onChange={this.handleChange}
              type="password"
              name="password"
              value={this.state.password}
              className="border border-gray-300 rounded px-2 py-4 focus:border-blue-400 focus:outline-none"
              placeholder="Password"
            />

            <input
              className="bg-blue-300 rounded-full text-white font-bold py-4 hover:bg-blue-400 transition cursor-pointer"
              value="Login"
              type="submit"
            />
            <Link to="/signup" className="flex justify-center">
              <p className="text-blue-400">Don't have an account? Sign up</p>
            </Link>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
