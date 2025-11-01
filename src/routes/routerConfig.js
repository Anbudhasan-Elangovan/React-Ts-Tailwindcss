// src/routes/routerConfig.js
import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import AuthLayout from "../layouts/AuthLayout";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Login from "../pages/Login/Login";
import Dashboard from "../pages/Dashboard/Dashboard";

const isAuthenticated = () => {
  // replace with your real auth logic
  return true;
};

export const router = createBrowserRouter([
  {
    element: <AuthLayout />,
    children: [{ path: "/login", element: <Login /> }],
  },
  {
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      {
        path: "/dashboard",
        element: isAuthenticated() ? <Dashboard /> : <Login />,
      },
    ],
  },
]);
