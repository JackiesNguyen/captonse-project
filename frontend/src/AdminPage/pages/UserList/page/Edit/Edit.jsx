import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import "./Edit.scss";

const Edit = () => {
  const auth = useSelector((state) => state.auth);
  const { user } = auth;
  const { id } = useParams();
  const navigate = useNavigate();
  const [editUser, setEditUser] = useState([]);

  const users = useSelector((state) => state.users);

  const token = useSelector((state) => state.token);
  const [checkAdmin, setCheckAdmin] = useState(false);
  const [err, setErr] = useState(false);
  const [success, setSuccess] = useState(false);
  const [num, setNum] = useState(0);

  useEffect(() => {
    if (users.length !== 0) {
      users.forEach((user) => {
        if (user._id === id) {
          setEditUser(user);
          setCheckAdmin(user.role === 1 ? true : false);
        }
      });
    } else {
      navigate("/profile");
    }
  }, [users, id, navigate]);

  const handleUpdate = async () => {
    try {
      if (num % 2 !== 0) {
        const res = await axios.patch(
          `/api/user/update_role/${editUser._id}`,
          {
            role: checkAdmin ? 1 : 0,
          },
          {
            headers: { Authorization: token },
          }
        );

        setSuccess(res.data.msg);
        setNum(0);
      }
    } catch (err) {
      err.response.data.msg && setErr(err.response.data.msg);
    }
  };

  const handleCheck = () => {
    setSuccess("");
    setErr("");
    setCheckAdmin(!checkAdmin);
    setNum(num + 1);
  };

  if (err) {
    toast.error(err);
  } else if (success) {
    toast.success(success);
  }
  return (
    <div className="edit">
      <div className="datatableTitle">Chỉnh sửa thông tin</div>
      <div className="edit__container">
        <div className="edit__img">
          <img src={editUser.avatar} alt="Avatar" />
        </div>
        <div className="form__container">
          <div className="form__group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="Tên người dùng"
              defaultValue={editUser.name}
              disabled
            />
          </div>

          <div className="form__group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              defaultValue={editUser.email}
              disabled
            />
          </div>

          <div
            className="form__group"
            style={{ display: "flex", alignItems: "center" }}
          >
            <label htmlFor="isAdmin">Thay đổi role</label>
            <input
              type="checkbox"
              id="isAdmin"
              checked={checkAdmin}
              onChange={handleCheck}
              style={{
                width: "20px",
                height: "20px",
                cursor: "pointer",
                marginLeft: "20px",
              }}
            />
          </div>

          <button onClick={handleUpdate}>Update</button>
        </div>
      </div>
    </div>
  );
};

export default Edit;
