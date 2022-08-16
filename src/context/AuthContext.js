import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import React, { useContext, useEffect, useState } from "react";
import { auth } from "../firebase";

const authContext = React.createContext();

// consumer
export function useAuth() {
  return useContext(authContext);
}

// Provider
export const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [currentuser, setCurrentUser] = useState("");

  useEffect(() => {
    const unsubcribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    return unsubcribe;
  }, []);

  // signup
  const signUp = async (email, password, username) => {
    await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(auth.currentUser, {
      displayName: username,
    });
    const user = auth.currentUser;
    setCurrentUser({ ...user });
  };

  // sign in
  const signin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // signout
  const signout = () => {
    return signOut(auth);
  };

  const value = {
    currentuser,
    loading,
    signUp,
    signin,
    signout,
  };
  return (
    <authContext.Provider value={value}>
      {!loading && children}
    </authContext.Provider>
  );
};
