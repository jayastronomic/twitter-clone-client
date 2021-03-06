import React from "react";
import "../styles/ConnectContainer.css";
import { useRouteMatch } from "react-router";

import ConnectCard from "../components/ConnectCard";

const ConnectContainer = (props) => {
  let { path } = useRouteMatch();
  return (
    <div className="connect-container flex flex-col overflow-auto">
      {path !== "/connect" ? null : (
        <p className="block font-bold text-xl p-3">Suggested for you</p>
      )}
      {props.users.map((user) => {
        return (
          <ConnectCard key={user.id} user={user} authUser={props.authUser} />
        );
      })}
    </div>
  );
};

export default ConnectContainer;
