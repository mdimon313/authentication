import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginForm from "./components/accounts/Login";
import SignupForm from "./components/accounts/Signup";
import Dashboard from "./components/Dashboard";
import Home from "./components/Home";
import Navigation from "./components/Navigation";
import { AuthProvider } from "./context/AuthContext";
function App() {
  return (
    <>
      <AuthProvider>
        <Navigation />

        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/" element={<Home />} />

          <Route path="/signup" element={<SignupForm />} />
          <Route path="/login" element={<LoginForm />} />
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
