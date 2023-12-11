import { combineReducers } from "@reduxjs/toolkit";
import adminReducer from "../store/admin/reducer";
import loginReducer from "../store/login/reducer";

export default combineReducers({
  admin: adminReducer,
  login: loginReducer,
});
