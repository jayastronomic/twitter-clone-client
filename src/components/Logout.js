import React from "react";
const API = "http://localhost:3002/api/v1/logout";

const Logout = (props) => {
  const logOff = () => {
    fetch(API, { method: "DELETE", credentials: "include" })
      .then((resp) => resp.json())
      .then((resObj) => props.handleLogout(resObj));

    redirect();
  };

  const goBack = () => {
    props.history.goBack();
  };

  const redirect = () => {
    props.history.push("/login");
  };

  return (
    <div className="flex h-screen justify-center items-center bg-black bg-opacity-40">
      <div className="bg-white w-80 px-8 py-10 rounded-2xl">
        <div className="flex justify-center">
          <i className="fa fa-twitter text-4xl text-blue-400" />
        </div>
        <p className="text-xl font-bold pt-4">Log out of Twitter?</p>
        <p className="text-gray-500 text-sm pb-4">
          You can always log back in at any time. If you just want to switch
          accounts, you can do that by adding an existing account.{" "}
        </p>
        <div className="flex flex-col w-64 space-y-4">
          <button
            onClick={() => logOff()}
            className="flex-intial bg-black text-white font-semibold  rounded-full py-2"
          >
            Log out
          </button>
          <button
            onClick={() => goBack()}
            className=" ounded-full border py-2 rounded-full"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Logout;
