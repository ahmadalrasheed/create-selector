import React from "react";
import Count from "../components/Count";
import Users from "../components/Users";
import { Link } from "react-router-dom";

const UserScreen = () => {
  return (
    <div>
      <Link replace to={"/"}>
        to home
      </Link>
      <Users />
    </div>
  );
};

export default UserScreen;
