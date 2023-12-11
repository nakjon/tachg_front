import {
  LOGIN,
  LOGIN_RESPONSE,
  LOGOUT_RESPONSE,
  LOGOUT,
  FORGOT_PASSWORD,
  FORGOT_PASSWORD_RESPONSE,
  RESET_PASSWORD,
  RESET_PASSWORD_RESPONSE,
  CLEAR_FORGOT_PASSWORD_RESPONSE,
  CHANGE_PASSWORD,
  CHANGE_PASSWORD_RESPONSE,
  SET_LOGIN_RESPONSE,
} from "./actionTypes";

const initialState = {
  show: false,
};

const login = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      state = {
        ...state,
      };
      break;
    case LOGIN_RESPONSE:
      state = {
        ...state,
        loginResponse: action.payload,
      };
      break;
    case LOGOUT:
      state = {
        ...state,
      };
      break;
    case LOGOUT_RESPONSE:
      console.log("logoutResponse", action?.payload);
      state = {
        ...state,
        logoutResponse: action?.payload,
      };
      break;
      case FORGOT_PASSWORD:
        state = {
          ...state,
        };
        break;
      case FORGOT_PASSWORD_RESPONSE:
        state = {
          ...state,
          forgetPasswordResponse: action?.payload,
        };
        break;
      case CLEAR_FORGOT_PASSWORD_RESPONSE:
        state = {
          ...state,
          forgetPasswordResponse: null,
        };
        break;
      case RESET_PASSWORD:
        state = {
          ...state,
        };
        break;
      case RESET_PASSWORD_RESPONSE:
        state = {
          ...state,
          resetPasswordResponse: action?.payload,
        };
        break;
      case CHANGE_PASSWORD:
        state = {
          ...state,
        };
        break;
      case CHANGE_PASSWORD_RESPONSE:
        state = {
          ...state,
          changePasswordResponse: action?.payload,
        };
        break;
      case SET_LOGIN_RESPONSE:
        state = {
          ...state,
          setLoginResponse: action?.payload,
        };
        break;
    default:
      state = { ...state };
      break;
  }
  return state;
};
export default login;
