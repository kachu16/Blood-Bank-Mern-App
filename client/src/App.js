import React from "react";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import HomePage from "./pages/HomePage";
import PrivateRoutes from "./routes/PrivateRoutes.js";
import PublicRoutes from "./routes/PublicRoutes.js";
import Donar from "./pages/Dashboard/Donar.js";
import Hospital from "./pages/Dashboard/Hospital.js";

const App = () => {
  return (
    <>
      <ToastContainer />
      <Routes>
        {/* public routes */}
        <Route
          path="/login"
          element={
            <PublicRoutes>
              <Login />
            </PublicRoutes>
          }
        />
        <Route
          path="/register"
          element={
            <PublicRoutes>
              <Register />
            </PublicRoutes>
          }
        />
        {/* private routes */}

        {/* Homepage */}
        <Route
          path="/"
          element={
            <PrivateRoutes>
              <HomePage />
            </PrivateRoutes>
          }
        />


        {/* Dashboard routes */}
        <Route
          path="/Donar"
          element={
            <PrivateRoutes>
              <Donar />
            </PrivateRoutes>
          }
        />
        <Route
          path="/Hospital"
          element={
            <PrivateRoutes>
              <Hospital />
            </PrivateRoutes>
          }
        />
      </Routes>
    </>
  );
};

export default App;
