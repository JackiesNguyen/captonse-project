import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div style={{ overflow: "hidden" }}>
      <Header />
      <div className="content" style={{ background: "#f5f5f5" }}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
