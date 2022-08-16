// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCdmIgnsu5z7VM3avvRDNCz9p3mpDloJyo",
  authDomain: "auth-dev-d82ce.firebaseapp.com",
  projectId: "auth-dev-d82ce",
  storageBucket: "auth-dev-d82ce.appspot.com",
  messagingSenderId: "827452719971",
  appId: "1:827452719971:web:c257b719505fe2829cc956",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getDatabase(app);
