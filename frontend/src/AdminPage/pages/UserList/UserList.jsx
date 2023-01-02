import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { userColumns } from "../../utils/datatablesource";
import { DataGrid } from "@mui/x-data-grid";
import "./UserList.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  dispatchGetAllUsers,
  fetchAllUsers,
} from "../../../redux/actions/usersAction";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";
import axios from "axios";

const UserList = () => {
  const userRows = useSelector((state) => state.users);
  const token = useSelector((state) => state.token);
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const { isAdmin } = auth;
  const [callback, setCallback] = useState(false);
  useEffect(() => {
    if (isAdmin) {
      fetchAllUsers(token).then((res) => {
        dispatch(dispatchGetAllUsers(res));
      });
    }
  }, [callback, token, isAdmin, dispatch]);

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
          await axios.delete(`/api/user/delete/${id}`, {
            headers: { Authorization: token },
          });
          setCallback(!callback);
          Swal.fire("Deleted!", "Your file has been deleted.", "success");
        }
      });
    } catch (err) {
      // setData({ ...data, err: err.response.data.msg, success: "" });
    }
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link
              to={`/admin/users/edit/${params.row._id}`}
              style={{ textDecoration: "none" }}
            >
              <div className="viewButton">Sửa</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row._id)}
            >
              Xoá
            </div>
          </div>
        );
      },
    },
  ];
  // if (err) {
  //   toast.error(err);
  // } else if (success) {
  //   toast.success(success);
  // }

  return (
    <div className="userList">
      <div className="datatable">
        <div className="datatableTitle">
          Danh sách người dùng
          <Link to={`create`} className="link">
            <i className="fa-solid fa-plus" style={{ marginRight: "5px" }}></i>
            Thêm người dùng
          </Link>
        </div>
        <DataGrid
          className="datagrid"
          rows={userRows}
          columns={userColumns.concat(actionColumn)}
          pageSize={9}
          rowsPerPageOptions={[9]}
          checkboxSelection
          getRowId={(row) => row._id}
        />
      </div>
    </div>
  );
};

export default UserList;
