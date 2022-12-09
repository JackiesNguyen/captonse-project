import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import {
  isEmpty,
  isEmail,
  isLength,
  isMatch,
} from "../../../utils/validation/Validation";
import { toast } from "react-toastify";
import { TextField } from "@mui/material";
import "./SignUp.scss";

const initialState = {
  name: "",
  email: "",
  password: "",
  cf_password: "",
  err: "",
  success: "",
};

const SignUp = () => {
  const [user, setUser] = useState(initialState);

  const { name, email, password, cf_password, err, success } = user;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value, err: "", success: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isEmpty(name) || isEmpty(password))
      return setUser({
        ...user,
        err: "Vui lòng điền tất cả các trường!",
        success: "",
      });

    if (!isEmail(email))
      return setUser({
        ...user,
        err: "Địa chỉ email không hợp lệ",
        success: "",
      });

    if (isLength(password))
      return setUser({
        ...user,
        err: "Mật khẩu tối thiểu ít nhất 6 kí tự",
        success: "",
      });

    if (!isMatch(password, cf_password))
      return setUser({ ...user, err: "Mật khẩu không khớp", success: "" });

    try {
      const res = await axios.post("api/user/register", {
        name,
        email,
        password,
      });

      setUser({ ...user, err: "", success: res.data.msg });
    } catch (err) {
      err.response.data.msg &&
        setUser({ ...user, err: err.response.data.msg, success: "" });
    }
  };
  if (err) {
    toast.error(err);
  } else if (success) {
    toast.success(success);
  }

  return (
    <div className="signUp">
      <div className="signUp__container">
        <h2 className="signUp__title">Đăng ký</h2>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form__container">
            <div className="form__group">
              <label htmlFor="name">Họ và tên *</label>
              <div className="form__control">
                <TextField
                  id="name"
                  name="name"
                  placeholder="Nhập tên của bạn..."
                  variant="standard"
                  value={name}
                  onChange={handleChangeInput}
                  fullWidth
                  required
                />
              </div>
            </div>
            <div className="form__group">
              <label htmlFor="email">Email*</label>
              <div className="form__control">
                <TextField
                  id="email"
                  name="email"
                  type="email"
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
              <label htmlFor="password">Mật khẩu*</label>
              <div className="form__control">
                <TextField
                  id="password"
                  name="password"
                  placeholder="Nhập mật khẩu..."
                  variant="standard"
                  value={password}
                  onChange={handleChangeInput}
                  fullWidth
                  required
                  type="password"
                  autoComplete="on"
                />
              </div>
            </div>
            <div className="form__group">
              <label htmlFor="cf_password">Xác nhận mật khẩu*</label>
              <div className="form__control">
                <TextField
                  id="cf_password"
                  name="cf_password"
                  type="password"
                  placeholder="Nhập lại mật khẩu..."
                  variant="standard"
                  value={cf_password}
                  onChange={handleChangeInput}
                  autoComplete="on"
                  fullWidth
                  required
                />
              </div>
            </div>
            <button type="submit" className="signUp__btn">
              Đăng ký
            </button>
          </div>
        </form>
        <p className="signUp__signIn">
          Đã có tài khoản? <Link to="/signin">Đăng nhập</Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
