import React, { useState, useEffect } from "react";
import BasicButton from "../../button/basicbutton";
import { Spinner } from "react-bootstrap";
import InputFieldFloatLebel from "../../inputbox/floatlabel/InputFieldFloatLabel";
import { Modal } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { changePasswordFunc } from "src/store/login/actions";
import toastMessage from "src/common/toastmessage/toastmessage";
import {
  NETWORK_STATUS_CODE,
  SECRET_KEY,
} from "../../../common/constant/constant";
import CryptoJS from "crypto-js";
const ChangePassword = ({ setShow }) => {
  const [isLoading, setIsLoading] = useState(false);
  const resetPasswordResonse = useSelector(
    (state) => state.login.changePasswordResponse
  );
  var parsedBase64Key = CryptoJS.enc.Base64.parse(SECRET_KEY);
  const navigate = useNavigate();
  const location = useLocation();
  const [changePassword, setChangePassword] = useState({
    oldPassword: "",
    password: "",
  });
  const [currentPassword, setCurrentPassword] = useState("");

  const dispatch = useDispatch();

  const handleResetPassword = () => {
    dispatch(
      changePasswordFunc({
        oldPassword: CryptoJS.AES.encrypt(
          changePassword.oldPassword,
          parsedBase64Key,
          {
            mode: CryptoJS.mode.ECB,
            padding: CryptoJS.pad.Pkcs7,
          }
        ).toString(),
        password: CryptoJS.AES.encrypt(
          changePassword.password,
          parsedBase64Key,
          {
            mode: CryptoJS.mode.ECB,
            padding: CryptoJS.pad.Pkcs7,
          }
        ).toString(),
      })
    );
    if (resetPasswordResonse && resetPasswordResonse?.status === 200) {
      if (resetPasswordResonse?.data?.status === 1) {
        toastMessage(
          "CHANGE PASSWORD",
          resetPasswordResonse.data.message,
          "success"
        );
        setShow(false);
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
  };

  //   useEffect(() => {
  //     console.log("forgotPassword : ", resetPasswordResonse);
  //     if (resetPasswordResonse && resetPasswordResonse?.status === 200) {
  //       if (resetPasswordResonse?.data?.status === 1) {
  //         toastMessage(
  //           "CHANGE PASSWORD",
  //           resetPasswordResonse.data.message,
  //           "success"
  //         );
  //         setShow(false);
  //       } else if (resetPasswordResonse?.data?.status === 0) {
  //         toastMessage(
  //           "RESET PASSWORD",
  //           resetPasswordResonse.data.message,
  //           "error"
  //         );
  //       }
  //     } else {
  //       //   toastMessage("Please Try again after sometime", "error");
  //     }
  //   }, [resetPasswordResonse]);
  return (
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
        Change password{" "}
      </div>

      <div className="px-5  mt-5 border-0">
        <div className="mb-3">
          <InputFieldFloatLebel.WithError
            type="password"
            placeholder="Current Password"
            id="change_password-currentpassword"
            errorMsg={
              changePassword.oldPassword === ""
                ? "This field cannot be empty"
                : ""
            }
            onchange={(e) => {
              setChangePassword({
                ...changePassword,
                oldPassword: e.target.value,
              });
            }}
          />
        </div>
        <div className="mb-3">
          <InputFieldFloatLebel.WithError
            type="password"
            placeholder="New Password"
            id="change_password-newpassword"
            errorMsg={
              /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d!@#$%^&*()]{8,}$/.test(
                changePassword.password
              )
                ? ""
                : "Password should contain 8 characters and one letter and one number" //minimum 8 characters one letter and one number
            }
            onchange={(e) => {
              setChangePassword({
                ...changePassword,
                password: e.target.value,
              });
            }}
          />
        </div>
        <div className="mb-3">
          <InputFieldFloatLebel.WithError
            type="password"
            placeholder="Confirm Password"
            id="change_password-confirmpassword"
            errorMsg={
              currentPassword !== changePassword.password
                ? "Password does not match"
                : ""
            }
            onchange={(e) => {
              setCurrentPassword(e.target.value);
            }}
          />
        </div>
        <div className="d-flex justify-content-center mb-4">
          <BasicButton
            disabled={
              changePassword.password === currentPassword &&
              changePassword.oldPassword !== "" &&
              /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d!@#$%^&*()]{8,}$/.test(
                changePassword.password
              )
                ? false
                : true
            }
            className="submit"
            buttonText="Reset password"
            type="submit"
            onClick={handleResetPassword}
            isloading={isLoading}
            loadingText={<Spinner />}
            color="white"
            bgColor="#0b093b"
            borderRadius={5}
            minWidth="100px"
            padding="5px 10px 5px 10px"
          />
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
