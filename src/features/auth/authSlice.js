import { createSlice } from "@reduxjs/toolkit";
import { authApi } from "../../api/endpoints/authApi";

const initialState = {
  token: localStorage.getItem("token") || null,
  user: null,
  loading: false,
  error: null,
  isAuthenticated: !!localStorage.getItem("token"),
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.token = null;
      state.user = null;
      state.isAuthenticated = false;
      localStorage.removeItem("token");
    },
  },
  extraReducers: (builder) => {
    builder
      // Login mutation
      .addMatcher(authApi.endpoints.login.matchPending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addMatcher(
        authApi.endpoints.login.matchFulfilled,
        (state, { payload }) => {
          state.loading = false;
          state.token = payload?.token;
          state.user = payload?.user || null;
          state.isAuthenticated = true;
          localStorage.setItem("token", payload?.token);
        }
      )
      .addMatcher(authApi.endpoints.login.matchRejected, (state, { error }) => {
        state.loading = false;
        state.error = error?.data?.message || "Login failed";
      });
  },
});

export const selectAuth = (state) => state.auth;

export const { logout } = authSlice.actions;
export default authSlice.reducer;
