import React, { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { isLength, isMatch } from "../../../utils/validation/Validation";
import { TextField } from "@mui/material";
import "./ResetPassword.scss";

const initialState = {
  password: "",
  cf_password: "",
  err: "",
  success: "",
};

const ResetPassword = () => {
  const [data, setData] = useState(initialState);
  const { token } = useParams();

  const { password, cf_password, err, success } = data;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value, err: "", success: "" });
  };

  const handleResetPass = async () => {
    if (isLength(password))
      return setData({
        ...data,
        err: "Mật khẩu tối thiểu cần ít nhất 6 ký tự!",
        success: "",
      });

    if (!isMatch(password, cf_password))
      return setData({
        ...data,
        err: "Mật khẩu không trùng khớp!",
        success: "",
      });

    try {
      const res = await axios.post(
        "/api/user/reset",
        { password },
        {
          headers: { Authorization: token },
        }
      );

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
    <div className="rsPass">
      <div className="rsPass__container">
        <h2 className="rsPass__title">Thay đổi mật khẩu</h2>
        <div className="rsPass__form">
          <div className="form__group">
            <label htmlFor="password">Mật khẩu*</label>
            <TextField
              id="password"
              type="password"
              name="password"
              placeholder="Nhập mật khẩu..."
              variant="outlined"
              value={password}
              onChange={handleChangeInput}
              autoComplete="on"
              required
              fullWidth
            />
          </div>
          <div className="form__group">
            <label htmlFor="cf_password">Xác nhận mật khẩu*</label>
            <TextField
              id="cf_password"
              type="password"
              name="cf_password"
              placeholder="Xác nhận lại mật khẩu..."
              variant="outlined"
              value={cf_password}
              onChange={handleChangeInput}
              autoComplete="on"
              required
              fullWidth
            />
          </div>

          <button onClick={handleResetPass} className="rsPass__btn">
            Xác nhận
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
