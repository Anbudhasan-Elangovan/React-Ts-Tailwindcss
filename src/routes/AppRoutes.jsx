// src/routes/AppRoutes.jsx
import React, { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router";
import MainLayout from "../layouts/MainLayout";
import AuthLayout from "../layouts/AuthLayout";

// Lazy-loaded pages
const Home = lazy(() => import("../pages/Home/Home"));
const About = lazy(() => import("../pages/About/About"));
const Contact = lazy(() => import("../pages/Contact/Contact"));
const Login = lazy(() => import("../pages/Login/Login"));
const Dashboard = lazy(() => import("../pages/Dashboard/Dashboard"));
const UseState = lazy(() => import("../pages/UseState/UseState"));

/* -------------------------------------------------------------------------- */
/* ✅ Auth helper                                                              */
/* -------------------------------------------------------------------------- */
const isAuthenticated = () => {
  return localStorage.getItem("token");
};

/* -------------------------------------------------------------------------- */
/* ✅ ProtectedRoute wrapper                                                  */
/* -------------------------------------------------------------------------- */
const ProtectedRoute = ({ children }) => {
  if (!isAuthenticated()) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

const InitialProtectedRoute = () => {
  if (!isAuthenticated()) {
    return <Navigate to="/login" replace />;
  } else {
    return <Navigate to="/dashboard" />;
  }
};

/* -------------------------------------------------------------------------- */
/* ✅ AppRoutes (Declarative v7)                                              */
/* -------------------------------------------------------------------------- */
const AppRoutes = () => {
  return (
    <Suspense fallback={<div className="p-10 text-center">Loading...</div>}>
      <Routes>
        {/* Public Routes */}
        <Route element={<AuthLayout />}>
          <Route path="/" element={<InitialProtectedRoute />} />
          <Route path="/login" element={<Login />} />
        </Route>

        {/* Private Routes */}
        <Route element={<MainLayout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/use-state"
            element={
              <ProtectedRoute>
                <UseState />
              </ProtectedRoute>
            }
          />
        </Route>

        {/* 404 */}
        <Route path="*" element={<div>404 - Page Not Found</div>} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
