import React, { useState, useEffect } from "react";
import BasicButton from "../../button/basicbutton";
import { Spinner } from "react-bootstrap";
import InputFieldFloatLebel from "../../inputbox/floatlabel/InputFieldFloatLabel";
import { Modal } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RESET_PASSWORD } from "src/common/constant/constants";
import { resetPasswordRes, showLoginModal } from "src/store/login/actions";
import toastMessage from "src/common/toastmessage/toastmessage";
import {
  NETWORK_STATUS_CODE,
  SECRET_KEY,
} from "../../../common/constant/constant";
import CryptoJS from "crypto-js";
const ResetPassword = () => {
  const preventCopyPaste = (event) => {
    event.preventDefault();
  };

  useEffect(() => {
    const passwordField = document.getElementById("confirm_password");

    // Attach event listeners when the component mounts
    passwordField.addEventListener("paste", preventCopyPaste);
    passwordField.addEventListener("cut", preventCopyPaste);

    // Clean up event listeners when the component unmounts
    return () => {
      passwordField.removeEventListener("paste", preventCopyPaste);
      passwordField.removeEventListener("cut", preventCopyPaste);
    };
  }, []);

  const [isLoading, setIsLoading] = useState(false);
  // const [paramData, setParamData] = useState({
  //     paramUserName: '',
  //     paramEmail:''
  // })
  const resetPasswordResonse = useSelector(
    (state) => state.login.resetPasswordResponse
  );
  var parsedBase64Key = CryptoJS.enc.Base64.parse(SECRET_KEY);
  const navigate = useNavigate();
  const location = useLocation();
  const [resetPassword, setResetPassword] = useState({
    username: "",
    email: "",
    newPassword: "",
  });
  const [confirmPassword, setConfirmPassword] = useState("");
  useEffect(() => {
    const queryParam = new URLSearchParams(location.search);
    setResetPassword({
      ...resetPassword,
      username: queryParam.get("username"),
      email: queryParam.get("email"),
    });
  }, []);

  const dispatch = useDispatch();

  const handleResetPassword = () => {
    if (resetPassword.username !== "" && resetPassword.email !== "") {
      // console.log("success");
      dispatch(
        resetPasswordRes({
          ...resetPassword,
          newPassword: CryptoJS.AES.encrypt(
            resetPassword.newPassword,
            parsedBase64Key,
            {
              mode: CryptoJS.mode.ECB,
              padding: CryptoJS.pad.Pkcs7,
            }
          ).toString(),
        })
      );
    } else {
      toastMessage("RESET PASSWORD", "Something went wrong", "error");
    }
  };
  useEffect(() => {
    console.log("forgotPassword : ", resetPasswordResonse);
    if (resetPasswordResonse && resetPasswordResonse?.status === 200) {
      if (resetPasswordResonse?.data?.status === 1) {
        alert(resetPasswordResonse.data.message);
        navigate("/");
      } else if (resetPasswordResonse?.data?.status === 0) {
        toastMessage(
          "RESET PASSWORD",
          resetPasswordResonse.data.message,
          "error"
        );
      }
    } else {
      //   toastMessage("Please Try again after sometime", "error");
    }
  }, [resetPasswordResonse]);
  return (
    <Modal show={true} size="md">
      {/* <div className="container login-form-container"> */}
      <div className="card border-0">
        {/* <div className="login-header-container">
          <h1 className="login-header">Reset password</h1>
        </div> */}
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
          Reset password{" "}
        </div>

        <div className="px-5 mt-5 border-0">
          <div className="mb-3">
            <InputFieldFloatLebel.WithError
              type="password"
              placeholder="New Password"
              id="reset_password-newpassword"
              errorMsg={
                resetPassword.newPassword === ""
                  ? "password cannot be empty"
                  : /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d!@#$%^&*()]{8,}$/.test(
                      resetPassword.newPassword
                    )
                  ? ""
                  : "Password should contain 8 characters and one letter and one number" //minimum 8 characters one letter and one number
              }
              onchange={(e) => {
                setResetPassword({
                  ...resetPassword,
                  newPassword: e.target.value,
                });
              }}
            />
          </div>
          <div className="mb-3">
            <InputFieldFloatLebel.WithError
              type="password"
              placeholder="Confirm Password"
              id="confirm_password"
              errorMsg={
                confirmPassword !== resetPassword.newPassword
                  ? "Passwords does not match"
                  : ""
              }
              onchange={(e) => {
                setConfirmPassword(e.target.value);
              }}
            />
          </div>
          <div className="d-flex justify-content-center">
            {/* <BasicButton
              className="primary "
              buttonText="Login"
              type="submit"
              onClick={() => {}}
              loadingText={<Spinner />}
              color="white"
              borderRadius={5}
              minWidth="100px"
              padding="5px 10px 5px 10px"
            /> */}

            <BasicButton
              disabled={
                confirmPassword === resetPassword.newPassword &&
                resetPassword.newPassword !== "" &&
                /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d!@#$%^&*()]{8,}$/.test(
                  resetPassword.newPassword
                )
                  ? false
                  : true
              }
              className="info"
              buttonText="Reset password"
              type="submit"
              onClick={handleResetPassword}
              isloading={isLoading}
              loadingText={<Spinner />}
              color="white"
              borderRadius={5}
              minWidth="100px"
              padding="5px 10px 5px 10px"
            />
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
              click here to ?
            </span>{" "}
            <span
              style={{
                textDecoration: "underline",
                cursor: "pointer",
                lineHeight: "19px",
                fontSize: "17px",
                textDecorationLine: "none",
                fontFamily: "monospace",
                color: "white",
                bgColor: "#0b093b",
              }}
              onClick={() => {
                navigate("/");
                dispatch(showLoginModal());
              }}
            >
              login
            </span>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ResetPassword;
{
  /* <div className="">
  <div className="card ">
    <div
      className="card-header h5 text-white text-center  "
      style={{
        backgroundColor: "teal",
        lineHeight: "27px",
        fontFamily: "monospace",
        color: "white",
      }}
    >
      {" "}
      Reset Password{" "}
    </div>
    <div className="card-body px-5">
      <p
        className="card-text text-center py-2 "
        style={{
          lineHeight: "19px",
          fontFamily: "monospace",
          color: "InfoText",
        }}
      >
        Enter your email address and we'll send you an email with instructions
        to reset your password.
      </p>
      <div className="form-outline">
        <label
          className="form-label fw-bold"
          for="typeEmail"
          style={{
            lineHeight: "12px",
            fontFamily: "monospace",
            color: "darkmagenta",
          }}
        >
          Email input
        </label>
        <input type="email" id="typeEmail" className="form-control " />
      </div>
      <div className="form-outline mt-2 mb-4">
        <label
          className="form-label fw-bold"
          for="typeEmail"
          style={{
            lineHeight: "12px",
            fontFamily: "monospace",
            color: "darkmagenta",
          }}
        >
          userName input
        </label>
        <input type="email" id="typeEmail" className="form-control " />
      </div>
      <div className="d-flex justify-content-center ">
        <button className="btn text-white" style={{ backgroundColor: "teal" }}>
          {" "}
          GET LINK{" "}
        </button>
      </div>
      <div className="d-flex justify-content-center mt-4">
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
        >
          Login
        </span>
      </div>
    </div>
  </div>
</div>; */
}
