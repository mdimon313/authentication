import {
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import React, { useContext, useEffect, useState } from "react";
import { auth } from "../firebase";

const authContext = React.createContext();

// consumer
export function useAuthContext() {
  return useContext(authContext);
}

// Provider
export const UserAuthProvider = ({ children }) => {
  const [currentuser, setCurrentUser] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    setError("");
    const unsubcribe = onAuthStateChanged(auth, (data) => {
      data ? setCurrentUser(data) : setCurrentUser(null);
    });
    setLoading(false);
    return unsubcribe;
  }, []);

  // signup
  const signup = (email, password, username) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;

        console.log(user);
        // ...
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };

  // sign in
  const signin = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((res) => console.log(res))
      .catch((err) => setError(err.message));
  };

  // signout
  const signout = () => {
    signOut(auth);
  };

  // forgot password
  const forgotPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  const value = {
    currentuser,
    loading,
    error,
    signup,
    signin,
    signout,
    forgotPassword,
  };
  return <authContext.Provider value={value}>{children}</authContext.Provider>;
};
