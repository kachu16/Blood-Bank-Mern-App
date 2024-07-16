import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const user = useSelector((store) => store.auth.user);
  const navigate = useNavigate();
  function handleLogout() {
    localStorage.clear();
    alert("Logout successfully!");
    navigate("/login");
  }
  return (
    <header className="header-menu">
      <div className="header-left">
        <h1>Heading</h1>
      </div>
      <div className="header-right">
        <div className="header-name">
          <span>Welcome </span>
          <span>{user?.name}!</span>
          <span className="badge">{user?.role}</span>
        </div>
        <button className="logout-button" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </header>
  );
};

export default Header;
