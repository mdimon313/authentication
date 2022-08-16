import React from "react";
import { useAuthContext } from "../context/AuthContext";

function Dashboard() {
  window.document.title = "Dashboard";
  const { signout } = useAuthContext();

  function handleLogout() {
    signout();
  }
  return (
    <div className="flex items-center justify-center min-h-screen w-screen">
      Dashboard
      <button onClick={handleLogout}>signout</button>
    </div>
  );
}

export default Dashboard;
