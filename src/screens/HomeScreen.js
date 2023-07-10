import React from "react";
import Count from "../components/Count";
import Users from "../components/Users";
import { Link } from "react-router-dom";
const HomeScreen = () => {
  return (
    <div>
      <Link replace to="/users">
        to users
      </Link>
      <Count />
      <Users />
    </div>
  );
};

export default HomeScreen;
