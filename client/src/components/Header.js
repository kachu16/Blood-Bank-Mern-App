import React from "react";
import { useSelector } from "react-redux";
import { useNavigate, useLocation, Link } from "react-router-dom";

const Header = () => {
  const user = useSelector((store) => store.auth.user);
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
        <div className="header-name">
          <span>Welcome </span>
          <span>
            {user?.name || user?.hospitalName || user?.organizationName}!
          </span>
          <span className="badge">{user?.role}</span>
        </div>
        {location.pathname === "/" ? (
          <Link to="/analytics">
            <div className="header-name">Analytics</div>
          </Link>
        ) : location.pathname === "/analytics" ? (
          <Link to="/">
            <div className="header-name">Home</div>
          </Link>
        ) : null}
        <button className="logout-button" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </header>
  );
};

export default Header;
