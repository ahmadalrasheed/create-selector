import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getUsers,
  reset,
  usersSelector,
  countOfAvatarClick,
} from "../redux/slices/usersSlice";

const Users = () => {
  const dispatch = useDispatch();
  const { users, error, loading } = useSelector(usersSelector);
  // const { users, error, loading } = useSelector((state)=> {
  //   return {
  //     users: state?.users?.entities,
  //     error: state?.users?.error,
  //     loading: state?.users?.loading,
  //   };
  // });
  // const { users, error, loading } = {users: undefined ,error: undefined, loading:undefined }
  useEffect(()=>{
    console.log("its Changed");
  },[users,error , loading])
  useEffect(() => {
    dispatch(getUsers());
  }, []);
  const renderUsers = (users) => {
    return users?.map((user) => {
      return (
        <div key={user.id}>
          <p>{user.email}</p>
          <p>{user.first_name}</p>
          <img
            onClick={() => dispatch(countOfAvatarClick(user.id))}
            style={{ cursor: "pointer" }}
            title="avatar"
            alt="no-avatar"
            src={user.avatar}
          />
          {user.countOfImageClick > 0 && (
            <div
              style={{
                backgroundColor: "red",
                width: "30px",
                textAlign: "center",
              }}
            >
              {user.countOfImageClick}
            </div>
          )}
        </div>
      );
    });
  };
  return (
    <div>
      {error ? (
        <p>{error}</p>
      ) : (
        <>
          <h2>List of Users</h2>
          <button
            onClick={() => {
              dispatch(reset());
            }}
          >
            reset Users
          </button>
          {renderUsers(users)}
        </>
      )}
    </div>
  );
};

export default Users;
