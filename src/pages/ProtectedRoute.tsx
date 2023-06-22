import { Navigate } from "react-router-dom";

function ProtectedRoute(props) {
  const sessionData = localStorage.getItem("token");
  if (sessionData) {
    return props.outlet;
  } else {
    return <Navigate to="/user/login" />;
  }
}

export default ProtectedRoute;
