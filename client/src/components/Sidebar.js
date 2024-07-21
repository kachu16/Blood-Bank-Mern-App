import React from "react";
import { userMrnuOptions } from "./constants";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();
  return (
    <div className="sidebar">
      {userMrnuOptions.map((item) => {
        const isactive = location.pathname === item.path;
        return (
          <div className={`sidebar-items ${isactive && "active"}`}>
            <i className={item.icon}></i>
            <Link to={item.path}>
              <p>{item.name}</p>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Sidebar;
