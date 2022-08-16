import React from "react";
import { Link } from "react-router-dom";

function Home() {
  window.document.title = "Home";
  return (
    <div className="flex items-center justify-center h-screen w-screen">
      <Link
        to="/signup"
        className="bg-green-200 px-5 py-2 mr-1 rounded-md transition-all hover:bg-green-300"
      >
        Signup
      </Link>
      <Link
        to="/login"
        className="bg-green-200 px-5 py-2 ml-1 rounded-md transition-all hover:bg-green-300"
      >
        Login
      </Link>
    </div>
  );
}

export default Home;
