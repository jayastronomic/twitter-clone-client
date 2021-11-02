import React from "react";
import { Link, useLocation } from "react-router-dom";

const AuthUserProfileNav = (props) => {
  const location = useLocation();

  return (
    <div className="flex border-b border-gray-100 justify-around pt-4">
      {location.pathname === props.url ? (
        <Link
          to={`${props.url}`}
          className="flex flex-col items-center text-sm  font-bold hover:bg-gray-200 w-full  transition pt-3"
        >
          <p className="pb-3 text-black">Tweets</p>
          <div className="rounded-full border-2 w-12 border-blue-500"></div>
        </Link>
      ) : (
        <Link
          to={`${props.url}`}
          className="flex flex-col items-center text-sm text-gray-500 font-bold hover:bg-gray-200 w-full  transition pt-3"
        >
          <p className="pb-3">Tweets</p>
        </Link>
      )}

      {location.pathname === props.url + "/with_replies" ? (
        <Link
          to={`${props.url}/with_replies`}
          className="flex flex-col items-center text-sm  font-bold hover:bg-gray-200 w-full transition pt-3"
        >
          <p className="pb-3 text-black">Tweets & Replies</p>
          <div className="rounded-full border-2 w-28 border-blue-500"></div>
        </Link>
      ) : (
        <Link
          to={`${props.url}/with_replies`}
          className="flex flex-col items-center text-sm text-gray-500 font-bold hover:bg-gray-200 w-full transition pt-3"
        >
          <p className="pb-3">Tweets & Replies</p>
        </Link>
      )}

      {location.pathname === props.url + "/media" ? (
        <Link
          to={`${props.url}/media`}
          className="flex flex-col items-center text-sm  font-bold hover:bg-gray-200 w-full  transition pt-3"
        >
          <p className="pb-3 text-black">Media</p>
          <div className="rounded-full border-2 w-10 border-blue-500"></div>
        </Link>
      ) : (
        <Link
          to={`${props.url}/media`}
          className="flex flex-col items-center text-sm text-gray-500 font-bold hover:bg-gray-200 w-full  transition pt-3"
        >
          <p className="pb-3">Media</p>
        </Link>
      )}

      {location.pathname === props.url + "/likes" ? (
        <Link
          to={`${props.url}/likes`}
          className="flex flex-col items-center text-sm font-bold hover:bg-gray-200 w-full  transition pt-3"
        >
          <p className="pb-3 text-black">Likes</p>
          <div className="rounded-full border-2 w-10 border-blue-500"></div>
        </Link>
      ) : (
        <Link
          to={`${props.url}/likes`}
          className="flex flex-col items-center text-sm text-gray-500 font-bold hover:bg-gray-200 w-full  transition pt-3"
        >
          <p className="pb-3">Likes</p>
        </Link>
      )}
    </div>
  );
};

export default AuthUserProfileNav;
