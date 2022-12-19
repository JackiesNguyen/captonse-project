import React from "react";
import { Outlet } from "react-router-dom";
import Banner from "../../Banner/Banner";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

const SearchLayout = () => {
  return (
    <div
      className="search__layout"
      style={{ display: "flex", flexDirection: "column" }}
    >
      <Header />
      <Banner />
      <div className="search__layout-content" style={{ background: "#f5f5f5" }}>
        <Outlet></Outlet>
      </div>
      <Footer />
    </div>
  );
};

export default SearchLayout;
