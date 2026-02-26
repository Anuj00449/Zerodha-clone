// import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");

  if (!token) {
    return window.location.href = "https://zerodha-clone-2-frontend.onrender.com"; 
  }

  return children;
};

export default ProtectedRoute;
