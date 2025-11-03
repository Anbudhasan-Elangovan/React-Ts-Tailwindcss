// src/routes/routerConfig.js
import { createBrowserRouter, redirect } from "react-router";
import React, { lazy, Suspense } from "react";

import MainLayout from "../layouts/MainLayout";
import AuthLayout from "../layouts/AuthLayout";

// Lazy-loaded pages
const Home = lazy(() => import("../pages/Home/Home"));
const About = lazy(() => import("../pages/About/About"));
const Login = lazy(() => import("../pages/Login/Login"));
const Dashboard = lazy(() => import("../pages/Dashboard/Dashboard"));

const isAuthenticated = () => {
  // ✅ Replace with your real auth logic
  return localStorage.getItem("token");
};

// ✅ Protected Route (v7 approach using loader)
const requireAuth = async () => {
  if (!isAuthenticated()) {
    throw redirect("/login");
  }
  return null;
};

export const router = createBrowserRouter([
  // Auth routes (public)
  {
    element: <AuthLayout />,
    children: [
      {
        path: "/login",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Login />
          </Suspense>
        ),
      },
    ],
  },

  // Main routes (protected)
  {
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/dashboard",
        loader: requireAuth, // ✅ Protect route at loader level
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Dashboard />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "*",
    element: <div>404 - Page Not Found</div>,
  },
]);
