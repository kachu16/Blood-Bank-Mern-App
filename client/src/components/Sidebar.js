import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const location = useLocation();
  const { user } = useSelector((state) => state.auth);
  return (
    <div className="sidebar">
      {user?.role === "Organization" ? (
        <>
          <Link to="/">
            <div
              className={`sidebar-items ${
                location.pathname === "/" ? "active" : ""
              }`}
            >
              <i className="fa-solid fa-warehouse"></i>
              <p>Inventory</p>
            </div>
          </Link>
          <Link to="/donor">
            <div
              className={`sidebar-items ${
                location.pathname === "/donor" ? "active" : ""
              }`}
            >
              <i className="fa-solid fa-hand-holding-droplet"></i>
              <p>Donor</p>
            </div>
          </Link>
          <Link to="/hospital">
            <div
              className={`sidebar-items ${
                location.pathname === "/hospital" ? "active" : ""
              }`}
            >
              <i className="fa-solid fa-hospital"></i>
              <p>Hospital</p>
            </div>
          </Link>
        </>
      ) : user?.role === "Donor" ? (
        <>
          <Link to="/organization ">
            <div
              className={`sidebar-items ${
                location.pathname === "/organization" ? "active" : ""
              }`}
            >
              <i className="fa-solid fa-building"></i>
              <p>Organization</p>
            </div>
          </Link>
        </>
      ) : user?.role === "Hospital" ? (
        <>
          <h1>hello hospital</h1>
        </>
      ) : null}
    </div>
  );
};

export default Sidebar;
