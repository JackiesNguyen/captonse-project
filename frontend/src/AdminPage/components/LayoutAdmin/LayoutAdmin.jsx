import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
// import { Helmet } from "react-helmet-async";
import "./LayoutAdmin.scss";

const LayoutAdmin = () => {
  return (
    <div className="layoutAdmin">
      <Sidebar />
      <div className="layoutAdmin__container">
        <Navbar />
        <div className="layoutAdmin__content">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default LayoutAdmin;
