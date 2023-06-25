import ReactDOM from "react-dom/client";
import React, { Suspense } from "react";
import "./main.css";
import Home from "./pages/Home.tsx";
import Landing from "./pages/landing/Landing.tsx";
import { Login } from "./pages/auth/user/login/Login.tsx";
import { Signup } from "./pages/auth/user/signup/Signup.tsx";
import { SignupAdmin } from "./pages/auth/admin/signup/Signup.tsx";
import ProtectedRoute from "./pages/ProtectedRoute.tsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import { LoginAdmin } from "./pages/auth/admin/login/Login.tsx";
import AllMeals from "./pages/other/AllMeals.tsx";
import Dashboard from "./pages/dashboard/Dashboard.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <MantineProvider>
      <Notifications />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/all" element={<AllMeals />} />

          <Route
            path="/home"
            element={
              <ProtectedRoute
                to="/home"
                outlet={
                  <Suspense
                    fallback={<div className="loading">Loading...</div>}
                  >
                    <Home />
                  </Suspense>
                }
              />
            }
          />

          <Route path="/user/login" element={<Login />} />
          <Route path="/user/register" element={<Signup />} />

          <Route path="/admin/register" element={<SignupAdmin />} />
          <Route path="/admin/login" element={<LoginAdmin />} />
          <Route path="/admin/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </MantineProvider>
  </React.StrictMode>
);
