import { TextField } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "./ForgotPassword.scss";
import { isEmail } from "../../../utils/validation/Validation";

const initialState = {
  email: "",
  err: "",
  success: "",
};

const ForgotPassword = () => {
  const [data, setData] = useState(initialState);

  const { email, err, success } = data;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value, err: "", success: "" });
  };

  const forgotPassword = async () => {
    if (!isEmail(email))
      return setData({
        ...data,
        err: "Địa chỉ email không hợp lệ!",
        success: "",
      });

    try {
      const res = await axios.post("/api/user/forgot", { email });

      return setData({ ...data, err: "", success: res.data.msg });
    } catch (err) {
      err.response.data.msg &&
        setData({ ...data, err: err.response.data.msg, success: "" });
    }
  };
  if (err) {
    toast.error(err);
  } else if (success) {
    toast.success(success);
  }

  return (
    <div className="forgotPass">
      <div className="forgotPass__container">
        <h2 className="forgotPass__title">TravelCaps</h2>
        <p className="forgotPass__text">
          Nhập địa chỉ email của bạn và chúng tôi sẽ gửi một đường link xác nhận
          để bạn thay đổi mật khẩu
        </p>
        <div className="forgotPass__content">
          <label htmlFor="email">Địa chỉ email</label>
          <TextField
            id="email"
            type="email"
            name="email"
            placeholder="Nhập email..."
            variant="outlined"
            value={email}
            onChange={handleChangeInput}
            fullWidth
          />
          <button onClick={forgotPassword} className="forgotPass__btn">
            Xác nhận
          </button>

          <p className="forgotPass__signUp">
            Bạn chưa có tài khoản? <Link to="/signup">Đăng ký</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
