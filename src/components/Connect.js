import React, { useEffect, useState } from "react";
import "../styles/Connect.css";
import ConnectContainer from "../containers/ConnectContainer";
const API = "http://localhost:3002/api/v1/follow";

const Connect = (props) => {
  const [follows, setFollows] = useState([]);

  useEffect(() => {
    fetch(API, { credentials: "include" })
      .then((resp) => resp.json())
      .then((resObj) => setFollows(resObj));
  }, []);
  return (
    <div className="connect h-screen flex flex-col">
      <div className="connect-header font-bold text-xl border-b py-4 pl-2 sticky top-0 bg-white ">
        Connect
      </div>
      <ConnectContainer users={follows} authUser={props.authUser} />
    </div>
  );
};

export default Connect;
