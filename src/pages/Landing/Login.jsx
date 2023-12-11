import React, { useState, useEffect } from "react";
import Modal from "react-awesome-modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsRotate, faClose } from "@fortawesome/free-solid-svg-icons";

import "./Login.css";
import toastMessage from "src/common/toastmessage/toastmessage";
import {
  login,
  loginResponse,
  setLoginResponse,
} from "src/store/login/actions";
import { useDispatch, useSelector } from "react-redux";
import Canvas from "src/components/canvas/Canvas";
import { useNavigate } from "react-router-dom";
import tokenhandle from "../../common/tokenhandle/tokenhandle";
import { NETWORK_STATUS_CODE } from "src/common/constant/constant";
function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loginRespons = useSelector((state) => state.login.loginResponse);
  const [userData, setUSerData] = useState({
    username: "",
    password: "",
    captcha: "",
  });

  const [captchaValue, setCaptchaValue] = useState([]);
  const [bigSize, setBigSize] = useState(true);
  const [isLoading, setLoading] = useState(false);

  const createCaptcha = () => {
    // console.log("Recalled");
    var charsArray = "123456789ABCDEFGHIJKLMNPQRSTUVWXYZ";
    var lengthOtp = 5;
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
  useEffect(() => {
    if (loginRespons && loginRespons?.status === 200) {
      toastMessage("LOGIN", "Logged In successfully", "success");
      tokenhandle.storetoken(loginRespons?.data?.token);
      tokenhandle.storeProfileDetails(loginRespons?.data?.user);
      tokenhandle.setActivityList(JSON.stringify(loginRespons?.data?.roles));
      dispatch(loginResponse(""));
      dispatch(setLoginResponse(loginRespons));
      navigate("/");
    } else if (
      loginRespons &&
      loginRespons?.status === NETWORK_STATUS_CODE.BAD_REQUEST
    ) {
      //setLoading(false);
      toastMessage("Login Error", loginRespons?.data?.message, "error");
      dispatch(loginResponse(""));
    } else if (
      loginRespons &&
      loginRespons?.status === NETWORK_STATUS_CODE.UNAUTHORIZED_ACCESS
    ) {
      //setLoading(false);
      toastMessage("Login Error", loginRespons?.data?.message, "error");
      dispatch(loginResponse(""));
    } else if (
      loginRespons &&
      loginRespons?.status !== NETWORK_STATUS_CODE.SUCCESS
    ) {
      // setLoading(false);
      toastMessage(
        "Login Error",
        "internal error please try after some time",
        "error"
      );
      dispatch(loginResponse(""));
    }
  }, [loginRespons]);
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
      console.log(vert);
      context.strokeText(captchaValue[i], i * 13, vert);
    }
  };
  const validate = () => {
    if (userData.username.length === 0) {
      return false;
    } else if (userData.password.length === 0) {
      return false;
    } else if (userData.captcha !== captchaValue.join("")) {
      return false;
    } else {
      return true;
    }
  };
  const loginAction = async (e) => {
    e.preventDefault();
    if (!validate()) {
      if (userData.username.length === 0) {
        toastMessage("Login Error", "username is empty", "error");
      } else if (userData.password.length === 0) {
        toastMessage("Login Error", "Password is empty", "error");
      } else if (userData.captcha !== captchaValue.join("")) {
        toastMessage("Captca Error", "captca is wrong", "error");
      }

      createCaptcha();
      setUSerData({ ...userData, captcha: "" });
      // setValid(false); not in use
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
    dispatch(
      login({
        email: userData.username,
        password: userData.password,
      })
    );
  };

  useEffect(() => {
    createCaptcha();
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleResize = () => {
    const { innerWidth } = window;
    if (innerWidth < 768) {
      setBigSize(false);
    } else {
      setBigSize(true);
    }
  };

  return (
    <>
      <div>
        <section class="vh-100">
          <div class="container-fluid h-custom">
            <div class="row d-flex justify-content-center align-items-center h-100">
              <div class="col-md-9 col-lg-6 col-xl-5">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                  class="img-fluid"
                  alt="Sample"
                />
              </div>
              <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                <form>
                  <div class="form-outline mb-4">
                    <input
                      value={userData.username}
                      onChange={(e) => {
                        console.log(userData.username);
                        setUSerData({ ...userData, username: e.target.value });
                      }}
                      type="email"
                      id="form3Example3"
                      class="form-control form-control-lg"
                      placeholder="Enter a valid email address"
                    />
                    {/* <label class="form-label" for="form3Example3">Email address</label> */}
                  </div>

                  <div class="form-outline mb-3">
                    <input
                      value={userData.password}
                      onChange={(e) => {
                        console.log(userData.password);
                        setUSerData({ ...userData, password: e.target.value });
                      }}
                      type="password"
                      id="form3Example4"
                      class="form-control form-control-lg"
                      placeholder="Enter password"
                    />
                    {/* <label class="form-label" for="form3Example4">Password</label> */}
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
                            autoComplete="off"
                            type="text"
                            id="captcha"
                            className="form-control shadow-none"
                            value={userData?.captcha}
                            placeholder="Enter captcha"
                            onChange={(e) => {
                              setUSerData({
                                ...userData,
                                captcha: e.target.value,
                              });
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

                  <div class="d-flex justify-content-between align-items-center">
                    <div class="form-check mb-0">
                      <input
                        class="form-check-input me-2"
                        type="checkbox"
                        id="form2Example3"
                      />
                      <label class="form-check-label" for="form2Example3">
                        Remember me
                      </label>
                    </div>
                    <a href="#!" class="text-body">
                      Forgot password?
                    </a>
                  </div>

                  <div class="text-center text-lg-start mt-4 pt-2">
                    <button
                      onClick={(e) => loginAction(e)}
                      type="button"
                      class="btn btn-primary btn-lg"
                      style={{ paddingLeft: "25px", paddingRight: "25px" }}
                    >
                      Login
                    </button>
                    <p class="small fw-bold mt-2 pt-1 mb-0">
                      Don't have an account?{" "}
                      <a href="/signUp" class="link-danger">
                        Register
                      </a>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Login;
