import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
import { useDispatch } from "react-redux";
import { loadUser } from "./store/actions/authActions";

const Root = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadUser());
  });
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};

export default Root;
