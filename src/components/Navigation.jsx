import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Navigation() {
  const { currentuser, signout } = useAuth();

  const navigate = useNavigate();

  function handleLogout() {
    signout();
    navigate("/login");
  }
  return (
    <header className=" px-4 bg-blue-500 py-3">
      <nav className="container mx-auto flex items-center justify-center">
        <div className="text-white flex items-center justify-center">
          {currentuser ? (
            <>
              <Link to={"/dashboard"}>Dashboard</Link>
              <span className="ml-2">{currentuser.displayName}</span>
              <button onClick={handleLogout} className="mx-2">
                logout
              </button>
            </>
          ) : (
            <>
              <Link to="/">signup</Link>
              <Link to="/login" className="mx-2">
                login
              </Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Navigation;
