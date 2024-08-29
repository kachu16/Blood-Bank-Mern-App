import React from "react";
import { useSelector } from "react-redux";
import { useNavigate, useLocation, Link } from "react-router-dom";

const Header = () => {
  const user = useSelector((store) => store.auth.user);
  const initialLetter =
    user?.name || user?.hospitalName || user?.organizationName;
  const navigate = useNavigate();
  const location = useLocation();

  function handleLogout() {
    localStorage.clear();
    alert("Logout successfully!");
    navigate("/login");
  }
  return (
    <header className="header-menu">
      <div className="header-left">
        <h1>BLOOD BANK</h1>
      </div>
      <div className="header-right">
        {location.pathname === "/" ? (
          <Link to="/analytics">
            <span>Analytics</span>
          </Link>
        ) : location.pathname === "/analytics" ? (
          <Link to="/">
            <span>Home</span>
          </Link>
        ) : null}

        <div>
          <strong>{initialLetter && initialLetter[0]}</strong>
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
