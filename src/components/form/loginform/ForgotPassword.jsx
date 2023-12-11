import React, { useState, useEffect } from "react";
import BasicButton from "../../button/basicbutton";
import { Spinner } from "react-bootstrap";
import InputFieldFloatLebel from "../../inputbox/floatlabel/InputFieldFloatLabel";
import { useDispatch, useSelector } from "react-redux";
import {
  clearForgotPasswordRespose,
  forgotPassword,
} from "src/store/login/actions";
import toastMessage from "src/common/toastmessage/toastmessage";

function ForgotPassword({ setForgotPassword }) {
  const dispatch = useDispatch();
  const [isLoading, setLoading] = useState(false);
  const forgotPasswordResponse = useSelector(
    (state) => state.login.forgetPasswordResponse
  );
  const [userData, setUserData] = useState({
    username: "",
    email: "",
  });
  const [errorData, setErrorData] = useState({
    username: "",
    email: "",
  });
  const getPasswordLink = () => {
    if (userData.username === "") {
      alert("User name cannot be empty");
    } else if (
      !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        userData.email
      )
    ) {
      alert("Please enter a valid email");
    } else {
      dispatch(forgotPassword(userData));
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 5000);
    }
  };
  useEffect(() => {
    console.log("forgotPassword : ", forgotPasswordResponse);
    if (forgotPasswordResponse && forgotPasswordResponse?.status === 200) {
      if (forgotPasswordResponse?.data?.status === 1) {
        toastMessage("PASSWORD LINK", "Link sent", "success");
        setForgotPassword(false);
        dispatch(clearForgotPasswordRespose());
      } else if (forgotPasswordResponse?.data?.status === 0) {
        toastMessage(
          "PASSWORD LINK",
          forgotPasswordResponse.data.message,
          "error"
        );
      }
    } else if (forgotPasswordResponse) {
      toastMessage(
        "PASSWORD LINK",
        forgotPasswordResponse.data.message,
        "error"
      );
      dispatch(clearForgotPasswordRespose());
    }
  }, [forgotPasswordResponse]);

  return (
    <>
      {/* <div className="container login-form-container">
        <div className="login-header-container">
          <h1 className="login-header">Forgot password</h1>
        </div>
        <h5 className="login-message" style={{ textAlign: "justify" }}>
          Enter your email and username to receive the password reset link
        </h5>
        <div className="p-2 border-0">
          <div className="mb-3">
            <InputFieldFloatLebel.WithError
              type="text"
              placeholder="Email"
              id="Forgot_password-email"
              errorMsg={
                !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
                  userData.email
                )
                  ? "Enter a valid Email"
                  : ""
              }
              onchange={(e) => {
                setUserData({ ...userData, email: e.target.value });
              }}
            />
          </div>
          <div className="mb-3">
            <InputFieldFloatLebel.WithError
              type="text"
              placeholder="Username"
              id="Forgot_password-username"
              errorMsg={
                userData.username === "" ? "username can't be empty" : ""
              }
              onchange={(e) => {
                setUserData({ ...userData, username: e.target.value });
              }}
            />
          </div>
          <div className="d-flex justify-content-between">
            <BasicButton
              //disabled={isLoading ? isLoading : !isValid}
              className="primary "
              buttonText="Back"
              type="submit"
              onClick={() => setForgotPassword(false)}
              isloading={isLoading}
              loadingText={<Spinner />}
              color="white"
              borderRadius={5}
              minWidth="100px"
              padding="5px 10px 5px 10px"
            />
            <BasicButton
              //disabled={isLoading ? isLoading : !isValid}
              className="info"
              buttonText="Get password"
              type="submit"
              onClick={getPasswordLink}
              isloading={isLoading}
              loadingText={<Spinner />}
              color="white"
              borderRadius={5}
              minWidth="100px"
              padding="5px 10px 5px 10px"
            />
          </div>
        </div>
      </div> */}

      <div className="">
        <div className="card border-0">
          <div
            className="card-header h5 text-white text-center  "
            style={{
              backgroundColor: "#0b093b",
              lineHeight: "27px",
              fontFamily: "monospace",
              color: "white",
            }}
          >
            {" "}
            Reset Password{" "}
          </div>
          <div className=" px-5 my-4">
            <p
              className="card-text text-center py-2 "
              style={{
                lineHeight: "19px",
                fontFamily: "monospace",
                color: "InfoText",
              }}
            >
              Enter your email address and we'll send you an email with
              instructions to reset your password.
            </p>
            <div
              className={` form-outline ${
                errorData.email === "" ? "mb-4" : "mb-o"
              } `}
            >
              <label
                className="form-label fw-bold"
                for="typeEmail"
                style={{
                  lineHeight: "12px",
                  fontFamily: "monospace",
                  color: "InfoText",
                }}
              >
                Email{" "}
              </label>
              <input
                type="text"
                id="typeEmail"
                className="form-control "
                value={userData.email}
                placeholder="enter your email"
                onChange={(e) => {
                  setUserData({ ...userData, email: e.target.value });
                  setErrorData({ ...errorData, email: "" });
                }}
                onBlur={() => {
                  const emailRegex =
                    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                  const isValidEmail = emailRegex.test(userData.email);
                  if (!isValidEmail) {
                    setErrorData({
                      ...errorData,
                      email: "Enter a valid email",
                    });
                  } else {
                    setErrorData({ ...errorData, email: "" });
                  }
                }}
              />
            </div>
            {errorData.email !== "" && (
              <div className="d-flex justify-content-start mt-1">
                <p style={{ color: "red" }}>{errorData.email}</p>
              </div>
            )}

            <div
              className={` form-outline    ${
                errorData.username === "" ? "mb-4" : "mb-0"
              } ${errorData.email === "" ? "mt-2" : "mt-o"}`}
            >
              <label
                className="form-label fw-bold"
                for="typeEmail"
                style={{
                  lineHeight: "12px",
                  fontFamily: "monospace",
                  color: "InfoText",
                }}
              >
                userName{" "}
              </label>
              <input
                type="text"
                id="typeEmail"
                className="form-control "
                value={userData.username}
                onChange={(e) => {
                  setUserData({ ...userData, username: e.target.value });
                  setErrorData({ ...errorData, username: "" });
                }}
                placeholder="enter your username"
                onBlur={() => {
                  if (userData.username === "") {
                    setErrorData({
                      ...errorData,
                      username: "username can not be empty",
                    });
                  } else {
                    setErrorData({ ...errorData, username: "" });
                  }
                }}
              />
            </div>
            {errorData.username !== "" && (
              <div className="d-flex justify-content-start mb-2 mt-1">
                <p style={{ color: "red" }}>{errorData.username}</p>
              </div>
            )}
            <div
              className="d-flex justify-content-center "
              onClick={() => !isLoading && getPasswordLink}
              style={{
                backgroundColor: "#0b093b",
                cursor: isLoading ? "wait" : "pointer",
                opacity: isLoading ? 0.6 : 1,
                height: "45px",
                borderRadius: "6px",
              }}
            >
              <p
                style={{
                  marginTop: "15px",
                  color: "white",
                  fontFamily: "monospace",
                }}
              >
                {" "}
                GET LINK{" "}
              </p>
            </div>
            <div className="d-flex justify-content-center mt-4 mb-4">
              <span
                className="me-1 fs-6"
                style={{
                  lineHeight: "19px",
                  fontFamily: "monospace",
                  color: "InfoText",
                }}
              >
                Go Back to login ?
              </span>{" "}
              <span
                className=" fs-6"
                style={{
                  textDecoration: "underline",
                  cursor: "pointer",
                  lineHeight: "19px",
                  fontFamily: "monospace",
                  color: "darkmagenta",
                }}
                onClick={() => setForgotPassword(false)}
              >
                Login
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ForgotPassword;
