import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../pages/Footer/Footer";
import Navigation from "../../pages/Navigation/Navigation";

const User = () => {
  return (
    <>
      <section className="bg-gray-50">
        <Navigation></Navigation>
      </section>
      <section>
        <Outlet></Outlet>
      </section>
      <Footer></Footer>
    </>
  );
};

export default User;
