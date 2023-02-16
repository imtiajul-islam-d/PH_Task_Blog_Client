import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import AdminNav from "./AdminNav/AdminNav";

const AdminHome = () => {
  return (
    <>
      <Outlet></Outlet>
    </>
  );
};

export default AdminHome;
