//Login
export const LOGIN = "auth/login";
//Logout
export const LOGOUT = "auth/logout";
//Forgot Password
export const FORGOT_PASSWORD = "auth/forgot-password";
//Reset Password
export const RESET_PASSWORD = "auth/setPassword";
//Change Password
export const CHANGE_PASSWORD = "post/resetPassword";
//Create account
export const CREATE_ACCOUNT = "auth/register"


// Admin Module

//User Desk
export const USER_LISTING = "pagination/getUserList";
export const EDIT_USER = "post/editUser"
export const CREATE_USER = "auth/adduser";
export const DELETE_USER = "admin/deleteuser";


export const CREATE_CERTIFICATE_URL = "admin/createCertificate";
export const CERTIFICATE_LISTING_URL = "admin/getAllCertificate";
export const CERTIFICATE_BY_ID_URL = "auth/getCerById";
export const DELETE_CERTIFICATE_BY_ID_URL = "admin/deletecer";
export const EDIT_CERTIFICATE_BY_ID_URL = "admin/updateCertificate";  
export const GET_CERTIFICATE_BY_EMAIL_URL ="user/getCerByEmail"

//product 
export const PRODUCT_LISTING_URL = "auth/getAllProduct";
export const CREATE_PRODUCT_URL = "admin/createProduct";
export const IMAGE_UPLOAD_PROD_URL ="admin/uploadProdImage"

export const EDIT_PRODUCT_URL = "admin/updateProduct";
export const DELETE_PRODUCT_URL = "admin/deleteProduct";
export const IMAGE_PRODUCT_URL = "auth/getproductImage";

