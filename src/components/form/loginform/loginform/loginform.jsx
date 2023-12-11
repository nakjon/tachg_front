import { faArrowsRotate } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";
import BasicButton from "../../button/basicbutton";
import SwitchCheckBox from "../../switch/switchcheckbox";
import InputFieldFloatLebel from "../../inputbox/floatlabel/InputFieldFloatLabel";
import toastMessage from "../../../common/toastmessage/toastmessage";
import { useNavigate } from "react-router-dom";
import Canvas from "../../canvas/Canvas";
import { Spinner } from "react-bootstrap";
import { useDispatch } from "react-redux";
import {
  closeLoginModal,
  login,
  loginResponse,
} from "../../../store/login/actions";
import { useSelector } from "react-redux";
import tokenhandle from "../../../common/tokenhandle/tokenhandle";
import {
  NETWORK_STATUS_CODE,
  SECRET_KEY,
} from "../../../common/constant/constant";

import CryptoJS from "crypto-js";

const LoginForm = ({ setForgotPassword }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  var parsedBase64Key = CryptoJS.enc.Base64.parse(SECRET_KEY);
  const loginRespons = useSelector((state) => state.login.loginResponse);
  const [userData, setUSerData] = useState({
    username: "",
    password: "",
    captcha: "",
  });
  const [isShowPassword, setIsShowPassword] = useState(false);
  // const [isValid, setValid] = useState(false); not in use
  const [isLoading, setLoading] = useState(false);
  const [captchaValue, setCaptchaValue] = useState([]);

  const validate = () => {
    if (
      userData.username.length > 0 &&
      userData.password.length > 0
      // userData.captcha === captchaValue.join("")
    ) {
      return true;
    } else {
      return false;
    }
  };
  // It is not in use
  // useEffect(() => {
  //   const isValid = validate();
  //   setValid(isValid);
  // }, [userData.username, userData.password, userData.captcha]);

  const loginAction = async (e) => {
    e.preventDefault();
    if (!validate()) {
      toastMessage("Captcha Error", "Please enter valid Captcha", "error");
      createCaptcha();
      setUSerData({ ...userData, captcha: "" });
      // setValid(false); not in use
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
    dispatch(
      login({
        ...userData,
        password: CryptoJS.AES.encrypt(userData.password, parsedBase64Key, {
          mode: CryptoJS.mode.ECB,
          padding: CryptoJS.pad.Pkcs7,
        }).toString(),
      })
    );
    // let loginResp = await loginservice(CONSTANTS.LOGIN, userData);
    // if (loginResp.status === 200) {
    //   setLoading(false);
    //   console.log("loginResp", loginResp.status);
    //   dispatch(closeLoginModal());
    //   navigate("/dashboard");
    // } else if (loginResp.response.status === 400) {
    //   setLoading(false);
    //   toastMessage("Login Error", "Please enter valid ID", "error");
    // }
    // } else {
    //   toastMessage("Please ", "Work in progress...", "");
    // }
  };

  useEffect(() => {
    if (loginRespons && loginRespons?.status === 200) {
      toastMessage("LOGIN", "Logged In successfully", "success");
      tokenhandle.storeRefreshToken(loginRespons?.data?.refresh_token);
      tokenhandle.storetoken(loginRespons?.data?.access_token);
      tokenhandle.storeProfileDetails(loginRespons?.data?.displayName);
      setLoading(false);
      dispatch(loginResponse(""));
      dispatch(closeLoginModal());
      navigate("/dashboard");
    } else if (
      loginRespons &&
      loginRespons?.status === NETWORK_STATUS_CODE.BAD_REQUEST
    ) {
      setLoading(false);
      toastMessage("Login Error", loginRespons?.data?.message, "error");
      dispatch(loginResponse(""));
    } else if (
      loginRespons &&
      loginRespons?.status === NETWORK_STATUS_CODE.UNAUTHORIZED_ACCESS
    ) {
      setLoading(false);
      toastMessage("Login Error", loginRespons?.data?.message, "error");
      dispatch(loginResponse(""));
    } else if (
      loginRespons &&
      loginRespons?.status === NETWORK_STATUS_CODE.INTERNAL_ERROR
    ) {
      setLoading(false);
      toastMessage(
        "Login Error",
        "internal error please try after some time",
        "error"
      );
      dispatch(loginResponse(""));
    } else if (
      loginRespons &&
      loginRespons?.status !== NETWORK_STATUS_CODE.SUCCESS
    ) {
      setLoading(false);
      toastMessage(
        "Login Error",
        "internal error please try after some time",
        "error"
      );
      dispatch(loginResponse(""));
    }
  }, [loginRespons]);

  const createCaptcha = () => {
    // console.log("Recalled");
    var charsArray = "123456789ABCDEFGHIJKLMNPQRSTUVWXYZ";
    var lengthOtp = 4;
    var captcha = [];
    for (var i = 0; i < lengthOtp; i++) {
      var index = Math.floor(Math.random() * charsArray.length);
      if (captcha.indexOf(charsArray[index]) === -1)
        captcha.push(charsArray[index]);
      else i--;
    }
    setUSerData({ ...userData, captcha: "" });
    setCaptchaValue(captcha);
  };
  const draw = (context) => {
    context.font = "italic 25px courier";
    const color = [
      "#008000",
      "#808080",
      "#0000FF",
      "#000000",
      "#FF0000",
      "#800080",
    ];
    context.fillStyle = "#ff00ff";
    for (let i = 0; i < captchaValue.length; i++) {
      let rand = Math.floor(Math.random() * 6);
      let vert = Math.floor(Math.random() * (35 - 20) + 20); // random vertical alignment for positioning each captcha text.
      context.strokeStyle = color[rand];
      context.strokeText(captchaValue[i], i * 13, vert);
    }
  };

  useEffect(() => {
    createCaptcha();
  }, []);

  return (
    <>
      {/* <div className="container login-form-container"> */}
      <div className="card border-0">
        {/* <div className="login-header-container">
          <h1 className="login-header">Login</h1>
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
          Login{" "}
        </div>

        <div className="px-5  mt-5">
          <div className="mb-3">
            <InputFieldFloatLebel.WithError
              type="text"
              placeholder="UserID"
              id="user_id"
              errorMsg={userData.username === "" ? "Enter user ID" : ""}
              onchange={(e) => {
                setUSerData({ ...userData, username: e.target.value });
              }}
            />
          </div>
          <div className="mb-1">
            <InputFieldFloatLebel.WithError
              type={`${isShowPassword ? "text" : "password"}`}
              placeholder="Password"
              id="password"
              errorMsg={userData.password === "" ? "Enter password" : ""}
              onchange={(e) => {
                setUSerData({ ...userData, password: e.target.value });
              }}
            ></InputFieldFloatLebel.WithError>
          </div>
          <div className="mb-4 d-flex justify-content-end">
            <SwitchCheckBox
              labelText="Show Password"
              type="checkbox"
              onChange={() => {
                setIsShowPassword(!isShowPassword);
              }}
            />
          </div>
          <div className="mb-4">
            <div className="row align-items-center">
              <div className="col-lg-2 col-md-2 col-sm-2"> Captcha</div>
              <div className="col-lg-3 col-md-3 col-sm-4">
                <Canvas
                  className="captcha-canvas"
                  draw={draw}
                  height={50}
                  captcha={captchaValue}
                  width={120}
                />
              </div>
              <div className="col-lg-7 col-md-7 col-sm-12">
                <div className="input-group">
                  <input
                    type="text"
                    id="captcha"
                    className="form-control shadow-none"
                    value={userData?.captcha}
                    placeholder="Enter captcha"
                    onChange={(e) => {
                      setUSerData({ ...userData, captcha: e.target.value });
                    }}
                  />
                  <button
                    className="btn btn-outline-secondary captch-refresh-btn"
                    type="button"
                    title="Refresh Captcha"
                    onClick={createCaptcha}
                  >
                    <FontAwesomeIcon icon={faArrowsRotate} />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            {/* <BasicButton
              //disabled={isLoading ? isLoading : !isValid}
              className="primary "
              buttonText="Login"
              type="submit"
              onClick={(e) => loginAction(e)}
              isloading={isLoading}
              loadingText={<Spinner />}
              color="white"
              borderRadius={5}
              minWidth="100px"
              padding="5px 10px 5px 10px"
            /> */}
            <div
              className="d-flex justify-content-center "
              onClick={(e) => !isLoading && loginAction(e)}
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
                Login{" "}
              </p>
            </div>
            {/* <BasicButton
              className="info "
              buttonText="Forgot Password"
              onClick={() => setForgotPassword(true)}
              type="submit"
              isloading={isLoading}
              borderRadius={5}
              minWidth="100px"
              padding="5px 10px 5px 10px"
            /> */}
            <div className="d-flex justify-content-center mt-4 mb-4">
              {/* <span className="me-1 fs-6" 
                 style={{
                  lineHeight:'19px' ,
                  fontFamily:'monospace',
                  color:'InfoText'
                   }}
                >not remembered ?</span>  */}
              <span
                style={{
                  textDecoration: "underline",
                  cursor: "pointer",
                  lineHeight: "19px",
                  fontSize: "17px",
                  textDecorationLine: "underline",
                  fontFamily: "monospace",
                  color: "darkmagenta",
                }}
                onClick={() => setForgotPassword(true)}
              >
                forget password ?
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
