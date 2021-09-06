import React, { Component } from "react";
import "../styles/SignUp.css";

import { Link } from "react-router-dom";

class SignUp extends Component {
  render() {
    return (
      <div className="flex justify-center pt-4">
        <div className="flex flex-col">
          <i class="fab fa-twitter fa-2x text-blue-400"></i>

          <form className="flex flex-col space-y-6 pt-4">
            <pre className="text-3xl font-bold archivo">
              Sign up for Twitter {"   "}
            </pre>
            <input
              className="border border-gray-300 rounded px-2 py-4"
              placeholder="Email"
            />
            <input
              className="border border-gray-300 rounded px-2 py-4"
              placeholder="Username"
            />
            <input
              className="border border-gray-300 rounded px-2 py-4"
              placeholder="Password"
            />
            <input
              className="border border-gray-300 rounded px-2 py-4"
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
