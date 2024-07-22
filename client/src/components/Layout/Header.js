import React from "react";
import { BiSolidDonateBlood } from "react-icons/bi";
import { FaUser } from "react-icons/fa";
import { useSelector } from "react-redux";

const Header = () => {
  const { user } = useSelector((state) => state.auth);

  const handleLogout = () => {
    localStorage.clear();
    window.location.reload();
  };
  return (
    <>
      <nav className="navbar">
        <div className="container-fluid flex justify-between p-2">
          <div className="navbar-brand h1 flex items-center gap-2">
            <BiSolidDonateBlood /> Blood Bank App
          </div>
          <ul className="navbar-nav flex flex-row gap-5 justify-around">
            <li className="nav-item mx-3">
              <p className="nav-link flex justify-center items-center gap-2 rounded">
                <FaUser /> Welcome{" "}
                {user?.name || user?.hospitalName || user?.organizationName}{" "}
                <span className="badge bg-slate-500 p-1 rounded text-xs">{user?.role}</span>
              </p>
            </li>
            <li className="nav-item mx-3">
              <button
                className="btn btn-danger bg-red-600 text-white p-1 rounded"
                onClick={handleLogout}
              >
                Logout
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
