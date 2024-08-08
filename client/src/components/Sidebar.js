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
          <Link to="/donation ">
            <div
              className={`sidebar-items ${
                location.pathname === "/donation" ? "active" : ""
              }`}
            >
              <i className="fa-solid fa-building"></i>
              <p>Donation</p>
            </div>
          </Link>
        </>
      ) : user?.role === "Hospital" ? (
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
          <Link to="/consumer">
            <div
              className={`sidebar-items ${
                location.pathname === "/consumer" ? "active" : ""
              }`}
            >
              <i className="fa-solid fa-building"></i>
              <p>Consumer</p>
            </div>
          </Link>
        </>
      ) : user?.role === "Admin" ? (
        <>
          <Link to="/donorList ">
            <div
              className={`sidebar-items ${
                location.pathname === "/donorList" ? "active" : ""
              }`}
            >
              <i className="fa-solid fa-building"></i>
              <p>Donor List</p>
            </div>
          </Link>
          <Link to="/hospitalList ">
            <div
              className={`sidebar-items ${
                location.pathname === "/hospitalList" ? "active" : ""
              }`}
            >
              <i className="fa-solid fa-building"></i>
              <p>Hospital List</p>
            </div>
          </Link>
          <Link to="/orgList ">
            <div
              className={`sidebar-items ${
                location.pathname === "/orgList" ? "active" : ""
              }`}
            >
              <i className="fa-solid fa-building"></i>
              <p>Organization List</p>
            </div>
          </Link>
        </>
      ) : null}
    </div>
  );
};

export default Sidebar;
