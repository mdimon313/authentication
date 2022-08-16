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
    <header className=" px-4 bg-blue-500 py-3 sticky top-0 left-0">
      <nav className="container mx-auto flex items-center justify-between">
        <Link
          to="/"
          className="max-w-[150px] text-white text-2xl cursor-pointer"
        >
          TD
        </Link>
        <div className="text-white flex items-center justify-end">
          {currentuser ? (
            <>
              <span className="">{currentuser.displayName}</span>
              <button onClick={handleLogout} className="mx-2">
                logout
              </button>
            </>
          ) : (
            <>
              <Link to="/signup" className="">
                signup
              </Link>
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
