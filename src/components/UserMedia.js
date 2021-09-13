import React from "react";
import { useParams } from "react-router-dom";
const UserMedia = () => {
  let { pageId } = useParams();
  console.log(pageId);
  return <div>Media</div>;
};

export default UserMedia;
