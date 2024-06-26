import { createSlice } from "@reduxjs/toolkit";
import { userLogin, userRegister, getCurrentUser } from "./authActions";

// if token already exists with respect to the expiry date that we set in the backend, we will not allow the user to login again.
const token = localStorage.getItem("token")
  ? localStorage.getItem("token")
  : null;

const initialState = {
  loading: false,
  user: null,
  token,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    //login
    builder.addCase(userLogin.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(userLogin.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.user = payload.existingUser;
      state.token = payload.token;
    });
    builder.addCase(userLogin.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload.error;
    });

    // register user
    builder.addCase(userRegister.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(userRegister.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.success = payload.success;
    });
    builder.addCase(userRegister.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload.error;
    });

    // get currentuser
    builder.addCase(getCurrentUser.pending, (state) => {
        state.loading = true;
        state.error = null;
    })
    builder.addCase(getCurrentUser.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.user = payload.user;
    })
    builder.addCase(getCurrentUser.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
    })
  },
});

export default authSlice.reducer;
