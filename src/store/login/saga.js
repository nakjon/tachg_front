import { call, put, takeEvery } from "redux-saga/effects";

import { Service } from "../../config/commonFetch";
import * as CONSTANTS from "../../common/constant/constants";
import { 
  FORGOT_PASSWORD,
  LOGIN,
  LOGOUT,
  RESET_PASSWORD,
  CHANGE_PASSWORD,} from "./actionTypes";
  import {
    forgotPasswordResponse,
    loginResponse,
    logoutResponse,
    resetPasswordResponse,
    changePasswordResponse,
  } from "./actions";

function* login({ payload: loginDetails }) {
  console.log("loginDetails", loginDetails);
  try {
    const response = yield call(
      Service.commonPost,
      CONSTANTS.LOGIN,
      loginDetails
    );
    console.log("Responsehhhhhhhh",response );
    yield put(loginResponse(response));
  } catch (error) {
    console.log("Error", error);
    put(loginResponse(error));
  }
}

function* logout({ payload: logoutDetails }) {
  console.log("logoutDetails", logoutDetails);
  try {
    const response = yield call(
      Service.commonPost,
      CONSTANTS.LOGOUT,
      logoutDetails
    );
    console.log("Response", response);
    yield put(logoutResponse(response));
  } catch (error) {
    console.log("Error", error);
    put(logoutResponse(error));
  }
}
function* forgotPassword({ payload: details }) {
  console.warn("Forgot password", details);
  try {
    const response = yield call(
      Service.commonPut,
      CONSTANTS.FORGOT_PASSWORD,
      details
    );
    console.warn("Response", response);
    yield put(forgotPasswordResponse(response));
  } catch (error) {
    console.warn("Error", error);
    yield put(forgotPasswordResponse(error));
  }
}
function* resetPasswordResp({ payload: details }) {
  console.warn("Forgot password", details);
  try {
    const response = yield call(
      Service.commonPut,
      CONSTANTS.RESET_PASSWORD,
      details
    );
    console.warn("Response", response);
    yield put(resetPasswordResponse(response));
  } catch (error) {
    console.warn("Error", error);
    yield put(resetPasswordResponse(error));
  }
}

function* changePassword({ payload: details }) {
  try {
    const response = yield call(
      Service.commonPost,
      CONSTANTS.CHANGE_PASSWORD,
      details
    );

    yield put(changePasswordResponse(response));
  } catch (error) {
    yield put(changePasswordResponse(error));
  }
}

function* LoginSaga() {
  yield takeEvery(LOGIN, login);
  yield takeEvery(LOGOUT, logout);
  yield takeEvery(FORGOT_PASSWORD, forgotPassword);
  yield takeEvery(RESET_PASSWORD, resetPasswordResp);
  yield takeEvery(CHANGE_PASSWORD, changePassword);
}
export default LoginSaga;
