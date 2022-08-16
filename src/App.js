import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginForm from "./components/accounts/Login";
import SignupForm from "./components/accounts/Signup";
import Dashboard from "./components/Dashboard";
import Navigation from "./components/Navigation";
import { useAuthContext } from "./context/AuthContext";

function App() {
  const { currentuser } = useAuthContext();

  return (
    <>
      <Navigation />

      <Routes>
        {
          <>
            {currentuser ? (
              <Dashboard />
            ) : (
              <Route path="/signup" element={<SignupForm />} />
            )}
          </>
        }
        <Route path="/login" element={<LoginForm />} />
      </Routes>
    </>
  );
}

export default App;
