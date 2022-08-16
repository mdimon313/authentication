import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";
import Illustration from "../Illustration";
import InputText from "../InputText";
import Lable from "../Lable";

function Signup() {
  window.document.title = "Register";
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { signup, error } = useAuthContext();

  function handleSubmit(e) {
    e.preventDefault();
    if (password !== confirmPassword) {
      signup(email, password, username);
    }
  }

  return (
    <div className="container mx-auto px-4">
      <div className="h-screen grid place-items-center grid-cols-1 md:grid-cols-2">
        <Illustration src="./img/signup.jpg" alt="signup" />
        <form className="w-full" onSubmit={handleSubmit}>
          <h2 className="text-center uppercase font-bold text-2xl">Sign Up</h2>
          <div className="my-3">
            <Lable title={"Name"} />
            <InputText
              type={"text"}
              placeholder="Name..."
              id="Name"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="my-3">
            <Lable title={"Email"} />
            <InputText
              type={"email"}
              placeholder="Email..."
              id="Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="my-3">
            <Lable title={"Password"} />
            <InputText
              type={"password"}
              placeholder="Password..."
              id="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="my-3">
            <Lable title={"confirm password"} />
            <InputText
              type={"password"}
              placeholder="Re-type password..."
              id="confirm_password"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-400 hover:bg-green-500 transition-all select-none py-2 rounded-md text-xl text-white focus:outline-none"
          >
            Sign up
          </button>
          {error && (
            <p className="bg-red-200 py-3 mt-4 text-center rounded-md">
              {/* Don't create account! try again */}
              {error}
            </p>
          )}
          <p className="text-center text-gray-400 mt-5">
            already have an account?
            <Link to="/login" className="text-blue-500">
              login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default React.memo(Signup);
