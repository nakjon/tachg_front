import {
  LOGIN,
  LOGIN_RESPONSE,
  LOGOUT,
  LOGOUT_RESPONSE,
  FORGOT_PASSWORD,
  RESET_PASSWORD,
  FORGOT_PASSWORD_RESPONSE,
  RESET_PASSWORD_RESPONSE,
  CLEAR_FORGOT_PASSWORD_RESPONSE,
  CHANGE_PASSWORD,
  CHANGE_PASSWORD_RESPONSE,
  SET_LOGIN_RESPONSE,
} from "./actionTypes";



export const login = (loginDetails) => {
  return {
    type: LOGIN,
    payload: loginDetails,
  };
};
export const loginResponse = (loginResponse) => {
  return {
    type: LOGIN_RESPONSE,
    payload: loginResponse,
  };
};

export const logout = (logoutDetails) => {
  return {
    type: LOGOUT,
    payload: logoutDetails,
  };
};
export const logoutResponse = (logoutResponse) => {
  return {
    type: LOGOUT_RESPONSE,
    payload: logoutResponse,
  };
};
export const forgotPassword = (details) => {
  return {
    type: FORGOT_PASSWORD,
    payload: details,
  };
};
export const forgotPasswordResponse = (forgotPassword) => {
  return {
    type: FORGOT_PASSWORD_RESPONSE,
    payload: forgotPassword,
  };
};
export const clearForgotPasswordRespose = () => {
  return {
    type: CLEAR_FORGOT_PASSWORD_RESPONSE,
  };
};

export const resetPasswordRes = (details) => {
  return {
    type: RESET_PASSWORD,
    payload: details,
  };
};
export const resetPasswordResponse = (resetPassword) => {
  return {
    type: RESET_PASSWORD_RESPONSE,
    payload: resetPassword,
  };
};

export const changePasswordFunc = (details) => {
  return {
    type: CHANGE_PASSWORD,
    payload: details,
  };
};

export const changePasswordResponse = (changePWD) => {
  return {
    type: CHANGE_PASSWORD_RESPONSE,
    payload: changePWD,
  };
};

export const setLoginResponse = (response) => {
  return {
    type: SET_LOGIN_RESPONSE,
    payload: response,
  };
};
