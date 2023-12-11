//import jwt from "jsonwebtoken";

const isAuthenticated = () => {
  const token = sessionStorage.getItem("DVDMS_KEEP_SECRET"); // Replace 'localStorage' with 'sessionStorage' or read cookies if that's where you store the token
  if (token) {
      return true;
  } else {
    return false;
  }
};

export default isAuthenticated;
