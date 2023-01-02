import React from "react";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";
import { userInputs } from "../../../../utils/formSource";
import "./Create.scss";
import {
  isEmail,
  isLength,
  isMatch,
} from "../../../../../utils/validation/Validation";
import axios from "axios";
import { toast } from "react-toastify";

const initialState = {
  name: "",
  email: "",
  password: "",
  cf_password: "",
  err: "",
  success: "",
};
const Create = () => {
  const [newUser, setNewUser] = useState(initialState);
  const { name, email, password, cf_password, err, success } = newUser;

  const [file, setFile] = useState("");

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setNewUser({ ...newUser, [name]: value, err: "", success: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isEmail(email))
      return setNewUser({
        ...newUser,
        err: "Địa chỉ email không hợp lệ",
        success: "",
      });

    if (isLength(password))
      return setNewUser({
        ...newUser,
        err: "Mật khẩu tối thiểu ít nhất 6 kí tự",
        success: "",
      });

    if (!isMatch(password, cf_password))
      return setNewUser({
        ...newUser,
        err: "Mật khẩu không khớp",
        success: "",
      });

    try {
      const res = await axios.post("api/user/register", {
        name,
        email,
        password,
      });

      setNewUser({ ...newUser, err: "", success: res.data.msg });
    } catch (err) {
      err.response.data.msg &&
        setNewUser({ ...newUser, err: err.response.data.msg, success: "" });
    }
  };
  if (err) {
    toast.error(err);
  } else if (success) {
    toast.success(success);
  }

  return (
    <div className="new">
      <div className="newContainer">
        <div className="top">
          <h1>Thêm người dùng</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
            />
          </div>
          <div className="right">
            <form onSubmit={handleSubmit}>
              <div className="formInput">
                <label htmlFor="file">
                  Image: <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input
                  type="file"
                  id="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  style={{ display: "none" }}
                />
              </div>

              {userInputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input
                    type={input.type}
                    placeholder={input.placeholder}
                    required
                    onChange={handleChangeInput}
                  />
                </div>
              ))}
              <button type="submit">Xác nhận</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Create;
