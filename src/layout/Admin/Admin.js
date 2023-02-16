import React from "react";
import { Outlet } from "react-router-dom";
import AdminNav from "../../pages/AdminHome/AdminNav/AdminNav";
import Footer from "../../pages/Footer/Footer";

const Admin = () => {
  return (
    <div>
      <section>
        <AdminNav></AdminNav>
      </section>
      <section>
        <Outlet></Outlet>
      </section>
      <Footer></Footer>
    </div>
  );
};

export default Admin;
