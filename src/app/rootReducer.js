// src/app/rootReducer.js
import authSlice from "../features/auth/authSlice";
import userSlice from "../features/user/userSlice";

const rootReducer = {
  auth: authSlice,
  user: userSlice,
};

export default rootReducer;
