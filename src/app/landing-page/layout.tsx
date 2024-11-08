import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../components/landing-page/Footer";
import Navbar from "../../components/landing-page/Navbar";

const LandingPageLayout = () => {
  return (
    <div className=" min-h-screen font-Poppins ">
      <Navbar />
      <div className="w-full h-fit ">
        <div className=" mt-28  z-20">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LandingPageLayout;
