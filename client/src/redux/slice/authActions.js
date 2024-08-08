import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../services/API";

export const userLogin = createAsyncThunk(
  "auth/login",
  async ({ role, email, password }, { rejectWithValue }) => {
    try {
      // returns a promise
      const { data } = await API.post("/auth/login", { role, email, password });
      // console.log(data);
      //store token to localstorage
      if (data.success) {
        localStorage.setItem("token", data.token);
        // toast.success(data.message);
        alert(data.message);
        if (
          data?.existingUser?.role === "Donor" ||
          data?.existingUser?.role === "Hospital"
        ) {
          window.location.replace("/organization");
        } else if (data?.existingUser?.role === "Organization") {
          window.location.replace("/");
        } else if (data?.existingUser?.role === "Admin") {
          window.location.replace("/donorList");
        }
      }
      return data;
    } catch (err) {
      if (err.response && err.response.data.message) {
        return rejectWithValue(err.response.data.message);
      } else {
        return rejectWithValue(err.message);
      }
    }
  }
);

export const userRegister = createAsyncThunk(
  "auth/register",
  async (
    {
      role,
      email,
      password,
      name,
      organizationName,
      hospitalName,
      address,
      phone,
    },
    { rejectWithValue }
  ) => {
    try {
      const { data } = await API.post("/auth/register", {
        role,
        email,
        password,
        name,
        organizationName,
        hospitalName,
        address,
        phone,
      });
      console.log(data);
      if (data?.success) {
        // toast.success(data.message);
        alert(data.message);
        window.location.replace("/login");
      }
      return data;
    } catch (err) {
      if (err.response && err.response.data.message) {
        return rejectWithValue(err.response.data.message);
      } else {
        return rejectWithValue(err.message);
      }
    }
  }
);

// get current user
export const getCurrentUser = createAsyncThunk(
  "auth/current-user",
  async ({ rejectWithValue }) => {
    try {
      const res = await API.get("/auth/current-user");
      if (res?.data) {
        // console.log(res);
        return res?.data;
      }
    } catch (err) {
      if (err.response && err.response.data.message) {
        return rejectWithValue(err.response.data.message);
      } else {
        return rejectWithValue(err.message);
      }
    }
  }
);
