import React from "react";
import { Outlet } from "react-router";

const AuthLayout = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white shadow-lg rounded-2xl">
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
