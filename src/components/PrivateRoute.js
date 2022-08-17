import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function PrivateRoute() {
  const { currentuser } = useAuth();

  return currentuser ? <Outlet /> : <Navigate to="/login" />;
}
