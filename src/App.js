import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginForm from "./components/accounts/Login";
import SignupForm from "./components/accounts/Signup";
import Dashboard from "./components/Dashboard";
import Navigation from "./components/Navigation";
import PrivateRoute from "./components/PrivateRoute";
import { AuthProvider } from "./context/AuthContext";
function App() {
  return (
    <>
      <AuthProvider>
        <Navigation />

        <Routes>
          <Route path="/" element={<SignupForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/*" element={<PrivateRoute />}>
            <Route path="dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
