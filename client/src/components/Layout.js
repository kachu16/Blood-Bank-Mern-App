import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
const Layout = ({ children }) => {
  return (
    <>
      <div className="header">
        <Header />
      </div>
      <div className="sidebar-container">
        <Sidebar />
        <div className="content">{children}</div>
      </div>
    </>
  );
};

export default Layout;
