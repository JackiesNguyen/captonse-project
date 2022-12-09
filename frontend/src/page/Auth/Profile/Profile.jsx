import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { isLength, isMatch } from "../../../utils/validation/Validation";
import "./Profile.scss";
import {
  dispatchGetAllUsers,
  fetchAllUsers,
} from "../../../redux/actions/usersAction";
import { toast } from "react-toastify";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BsFillCameraFill } from "react-icons/bs";
import LoadingClient from "../../../components/LoadingClient/LoadingClient";
import { FaTimes, FaCheck, FaEdit, FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";

const initialState = {
  name: "",
  password: "",
  cf_password: "",
  err: "",
  success: "",
};

const Profile = () => {
  const auth = useSelector((state) => state.auth);
  const token = useSelector((state) => state.token);

  const users = useSelector((state) => state.users);

  const { user, isAdmin } = auth;
  const [data, setData] = useState(initialState);
  const { name, password, cf_password, err, success } = data;

  const [avatar, setAvatar] = useState(false);
  const [loading, setLoading] = useState(false);
  const [callback, setCallback] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    if (isAdmin) {
      fetchAllUsers(token).then((res) => {
        dispatch(dispatchGetAllUsers(res));
      });
    }
  }, [token, isAdmin, dispatch, callback]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value, err: "", success: "" });
  };

  const changeAvatar = async (e) => {
    e.preventDefault();
    try {
      const file = e.target.files[0];

      if (!file)
        return setData({
          ...data,
          err: "Không có tập tin nào được tải lên!",
          success: "",
        });

      if (file.size > 1024 * 1024)
        return setData({
          ...data,
          err: "Kích thước file quá lớn!",
          success: "",
        });

      if (file.type !== "image/jpeg" && file.type !== "image/png")
        return setData({
          ...data,
          err: "Định dạng tệp không chính xác!",
          success: "",
        });

      let formData = new FormData();
      formData.append("file", file);

      setLoading(true);
      const res = await axios.post("/api/avatar/upload_avatar", formData, {
        headers: {
          "content-type": "multipart/form-data",
          Authorization: token,
        },
      });

      setLoading(false);
      setAvatar(res.data.url);
    } catch (err) {
      setData({ ...data, err: err.response.data.msg, success: "" });
    }
  };

  const updateInfor = () => {
    try {
      axios.patch(
        "/api/user/update",
        {
          name: name ? name : user.name,
          avatar: avatar ? avatar : user.avatar,
        },
        {
          headers: { Authorization: token },
        }
      );

      setData({ ...data, err: "", success: "Cập nhật thành công!" });
    } catch (err) {
      setData({ ...data, err: err.response.data.msg, success: "" });
    }
  };

  const updatePassword = () => {
    if (isLength(password))
      return setData({
        ...data,
        err: "Mật khẩu tối thiểu ít nhất phải 6 kí tự",
        success: "",
      });

    if (!isMatch(password, cf_password))
      return setData({
        ...data,
        err: "Mật khẩu không trùng khớp",
        success: "",
      });

    try {
      axios.post(
        "/api/user/reset",
        { password },
        {
          headers: { Authorization: token },
        }
      );

      setData({ ...data, err: "", success: "Cập nhật thành công!" });
    } catch (err) {
      setData({ ...data, err: err.response.data.msg, success: "" });
    }
  };

  const handleUpdate = () => {
    if (name || avatar) updateInfor();
    if (password) updatePassword();
  };

  const handleDelete = async (id) => {
    try {
      Swal.fire({
        title: "Bạn có chắc chắn không?",
        text: "Bạn sẽ không thể hoàn lại điều này!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then(async (result) => {
        if (result.isConfirmed) {
          setLoading(true);
          await axios.delete(`/api/user/delete/${id}`, {
            headers: { Authorization: token },
          });
          setLoading(false);
          setCallback(!callback);
          Swal.fire("Deleted!", "Your file has been deleted.", "success");
        }
      });
    } catch (err) {
      setData({ ...data, err: err.response.data.msg, success: "" });
    }
  };
  if (err) {
    toast.error(err);
  } else if (success) {
    toast.success(success);
  }

  return (
    <>
      <div className="profile_page">
        {loading ? (
          <LoadingClient />
        ) : (
          <Container>
            <Row>
              <Col md={4}>
                <div className="col-left">
                  <h2>{isAdmin ? "Admin Profile" : "Thông tin cá nhân"}</h2>

                  <div className="avatar">
                    <img src={avatar ? avatar : user.avatar} alt="" />
                    <span>
                      <BsFillCameraFill />
                      <p>Thay đổi</p>
                      <input
                        type="file"
                        name="file"
                        id="file_up"
                        onChange={changeAvatar}
                      />
                    </span>
                  </div>

                  <div className="form-group">
                    <label htmlFor="name">Tên người dùng</label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      defaultValue={user.name}
                      placeholder="Your name"
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      defaultValue={user.email}
                      placeholder="Your email address"
                      disabled
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="password">Mật khẩu mới</label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="Your password"
                      value={password}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="cf_password">Xác nhận mật khẩu mới</label>
                    <input
                      type="password"
                      name="cf_password"
                      id="cf_password"
                      placeholder="Confirm password"
                      value={cf_password}
                      onChange={handleChange}
                    />
                  </div>

                  <div>
                    <em style={{ color: "crimson" }}>
                      * Nếu bạn cập nhật mật khẩu tại đây, bạn sẽ không thể đăng
                      nhập nhanh bằng google và facebook.
                    </em>
                  </div>

                  <button disabled={loading} onClick={handleUpdate}>
                    Update
                  </button>
                </div>
              </Col>
              <Col md={8}>
                <div className="col-right">
                  <h2>{isAdmin ? "Users" : "My Orders"}</h2>

                  <div style={{ overflowX: "auto" }}>
                    <table className="customers">
                      <thead>
                        <tr>
                          <th>ID</th>
                          <th>Name</th>
                          <th>Email</th>
                          <th>Admin</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {users.map((user) => (
                          <tr key={user._id}>
                            <td>{user._id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>
                              {user.role === 1 ? (
                                <FaCheck title="Admin" className="fa-check" />
                              ) : (
                                <FaTimes title="User" className="fa-times" />
                              )}
                            </td>
                            <td>
                              <Link to={`/edit_user/${user._id}`}>
                                <FaEdit title="Edit" className="fa-edit" />
                              </Link>

                              <FaTrashAlt
                                title="Remove"
                                onClick={() => handleDelete(user._id)}
                                className="fa-trash-alt"
                              />
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        )}
      </div>
    </>
  );
};

export default Profile;