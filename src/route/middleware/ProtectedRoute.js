import { Navigate, Outlet } from "react-router-dom";
import isAuthenticated from "./auth";
import toastMessage from "src/common/toastmessage/toastmessage";
const ProtectedRoute = ({
  redirectPath = "/",
  children,
}) => {
  console.log("isAuthenticated", isAuthenticated());
  if ( !isAuthenticated() ) {
    toastMessage('Unauthorise' ,'Login to access this url','success')
    return <Navigate to={redirectPath} replace />; 
    
  }

  return children ? children : <Outlet />;
};
export default ProtectedRoute;
