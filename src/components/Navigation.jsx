import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <header className=" px-4 bg-blue-500 py-3 sticky top-0 left-0">
      <nav className="container mx-auto flex items-center justify-between">
        <div className="max-w-[150px] text-white text-2xl">TD</div>
        <ul className="text-white flex items-center justify-end">
          <li>
            <Link to="/signup" className="">
              signup
            </Link>
          </li>
          <li>
            <Link to="/login" className="mx-2">
              login
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navigation;
