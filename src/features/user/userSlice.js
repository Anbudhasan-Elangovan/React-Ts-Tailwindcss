import { createSlice } from "@reduxjs/toolkit";
import { userApi } from "../../api/endpoints/userApi";

const initialState = {
  list: [],
  selectedUser: null,
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setSelectedUser: (state, action) => {
      state.selectedUser = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(userApi.endpoints.getUsers.matchPending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addMatcher(
        userApi.endpoints.getUsers.matchFulfilled,
        (state, { payload }) => {
          state.loading = false;
          state.list = payload;
        }
      )
      .addMatcher(
        userApi.endpoints.getUsers.matchRejected,
        (state, { error }) => {
          state.loading = false;
          state.error = error?.data?.message || "Failed to fetch users";
        }
      );
  },
});

export const { setSelectedUser } = userSlice.actions;
export default userSlice.reducer;
