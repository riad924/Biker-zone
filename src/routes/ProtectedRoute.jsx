
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const ProtectedRoute = () => {
  const { isAuthenticated, loading } = useAuth();

  // Check authentication loading
  if (loading) {
    return <p>Loading...</p>;
  }

  // If user is not logged in
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  // If user is logged in
  return <Outlet />;
};

export default ProtectedRoute;
