import React from "react";
import { Routes, Route } from "react-router-dom";

import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import HomePage from "./pages/HomePage";
import ProtectedRoutes from "./routes/ProtectedRoutes";
import PublicRoutes from "./routes/PublicRoutes";
import Donor from "./pages/dashboard/Donor";
import Hospital from "./pages/dashboard/Hospital";
import Organization from "./pages/dashboard/Organization";
import Consumer from "./pages/dashboard/Consumer";
import Donation from "./pages/dashboard/Donation";
import Analytics from "./pages/dashboard/Analytics";
import DonorList from "./pages/dashboard/DonorList";
import HospitalList from "./pages/dashboard/HospitalList";
import OrganizationList from "./pages/dashboard/OrganizationList";
const App = () => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoutes>
              <HomePage />
            </ProtectedRoutes>
          }
        />
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

        <Route
          path="/donor"
          element={
            <ProtectedRoutes>
              <Donor />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/hospital"
          element={
            <ProtectedRoutes>
              <Hospital />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/organization"
          element={
            <ProtectedRoutes>
              <Organization />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/consumer"
          element={
            <ProtectedRoutes>
              <Consumer />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/donation"
          element={
            <ProtectedRoutes>
              <Donation />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/analytics"
          element={
            <ProtectedRoutes>
              <Analytics />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/donorList"
          element={
            <ProtectedRoutes>
              <DonorList />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/orgList"
          element={
            <ProtectedRoutes>
              <OrganizationList />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/hospitalList"
          element={
            <ProtectedRoutes>
              <HospitalList />
            </ProtectedRoutes>
          }
        />
      </Routes>
    </>
  );
};

export default App;
