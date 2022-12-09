import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import { dispatchLogin } from "../../../redux/actions/authAction";
import { useDispatch } from "react-redux";
import "./SignIn.scss";
import TextField from "@mui/material/TextField";
import { toast } from "react-toastify";
import { FaUserAlt, FaUnlockAlt } from "react-icons/fa";
import { AiFillEye } from "react-icons/ai";
//
import { GoogleLogin } from "@react-oauth/google";
import FacebookLogin from "react-facebook-login";
import { ImFacebook } from "react-icons/im";
import jwt_decode from "jwt-decode";
const initialState = {
  email: "",
  password: "",
  err: "",
  success: "",
};

const SignIn = () => {
  const [user, setUser] = useState(initialState);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [showEye, setShowEye] = useState(false);
  const [showPass, setShowPass] = useState(false);

  const { email, password, err, success } = user;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value, err: "", success: "" });
    if (value === "") {
      setShowEye(false);
    } else {
      setShowEye(true);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("api/user/login", { email, password });
      setUser({ ...user, err: "", success: res.data.msg });

      localStorage.setItem("firstLogin", true);

      dispatch(dispatchLogin());
      navigate("/");
    } catch (err) {
      err.response.data.msg &&
        setUser({ ...user, err: err.response.data.msg, success: "" });
    }
  };

  // Login Google
  const responseGoogle = async (response) => {
    var decoded = jwt_decode(response.credential);
    console.log(decoded);
    try {
      const res = await axios.post("/api/user/google_login", {
        tokenId: response.credential,
      });

      setUser({ ...user, error: "", success: res.data.msg });
      localStorage.setItem("firstLogin", true);

      dispatch(dispatchLogin());
      navigate("/");
    } catch (err) {
      err.response.data.msg &&
        setUser({ ...user, err: err.response.data.msg, success: "" });
    }
  };
  // Login Facebook
  const responseFacebook = (response) => {
    console.log(response);
  };

  if (err) {
    toast.error(err);
  } else if (success) {
    toast.success(success);
  }

  return (
    <div className="signIn">
      <div className="signIn__container">
        <h2 className="signIn__title">Đăng Nhập</h2>
        <form onSubmit={handleSubmit} className="form">
          <div className="form__container">
            <div className="form__group">
              <label htmlFor="email">Email</label>
              <div className="form__control">
                <FaUserAlt />
                <TextField
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Nhập email..."
                  variant="standard"
                  value={email}
                  onChange={handleChangeInput}
                  fullWidth
                  required
                />
              </div>
            </div>
            <div className="form__group">
              <label htmlFor="email">Mật khẩu</label>
              <div className="form__control">
                <FaUnlockAlt />
                <TextField
                  id="password"
                  name="password"
                  placeholder="Nhập mật khẩu..."
                  variant="standard"
                  value={password}
                  onChange={handleChangeInput}
                  autoComplete="on"
                  fullWidth
                  type={showPass ? "text" : "password"}
                  required
                />
                {showEye ? (
                  <div
                    className="show__pass"
                    onClick={() => setShowPass((cur) => !cur)}
                  >
                    <AiFillEye />
                  </div>
                ) : null}
              </div>
            </div>
            <Link to="/forgot_password" className="signIn__forgot">
              Forgot your password?
            </Link>
            <button type="submit" className="signIn__btn">
              Đăng nhập
            </button>
          </div>
        </form>
        <div className="signIn__other">
          <h3>Or Login With</h3>
          <div className="social">
            <GoogleLogin
              onSuccess={responseGoogle}
              onError={responseGoogle}
              type="icon"
              shape="circle"
            />
            <FacebookLogin
              appId="458756252880564"
              autoLoad={false}
              fields="name,email,picture"
              icon={<ImFacebook />}
              callback={responseFacebook}
              textButton=""
              cssClass="my-facebook-button-class"
            />
          </div>
        </div>

        <p className="signIn__signUp">
          Bạn không có tài khoản ? <Link to="/signup">Đăng ký</Link>
        </p>
      </div>
    </div>
  );
};
export default SignIn;
