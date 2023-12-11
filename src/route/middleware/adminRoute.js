import { Navigate, Outlet } from "react-router-dom";
import isAuthenticated from "./auth";
import isAdmin from "./isAdmin";
const AdminRoute = ({
  redirectPath = "/",
  children,
}) => {
  console.log("isAdmin", isAdmin());
  if (
    !isAdmin()  || !isAuthenticated()
  ) {
    return <Navigate to={redirectPath} replace />; 
  }

  return children ? children : <Outlet />;
};
export default AdminRoute;