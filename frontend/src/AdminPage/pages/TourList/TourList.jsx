import React, { useEffect, useReducer } from "react";
import { Link } from "react-router-dom";
import { tourColumns } from "../../utils/datatablesource";
import { DataGrid } from "@mui/x-data-grid";
import "./TourList.scss";
import { useSelector } from "react-redux";
import axios from "axios";
import Loading from "../../components/Loading/Loading";
import { toast } from "react-toastify";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";
const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, loading: true };
    case "FETCH_SUCCESS":
      return {
        ...state,
        tours: action.payload.tours,
        page: action.payload.page,
        pages: action.payload.pages,
        loading: false,
      };
    case "FETCH_FAIL":
      return { ...state, loading: false, error: action.payload };
    case "DELETE_REQUEST":
      return { ...state, loadingDelete: true, successDelete: false };
    case "DELETE_SUCCESS":
      return {
        ...state,
        loadingDelete: false,
        successDelete: true,
      };
    case "DELETE_FAIL":
      return { ...state, loadingDelete: false, successDelete: false };

    case "DELETE_RESET":
      return { ...state, loadingDelete: false, successDelete: false };

    default:
      return state;
  }
};

const TourList = () => {
  const [
    { loading, error, tours, loadingCreate, loadingDelete, successDelete },
    dispatch,
  ] = useReducer(reducer, {
    loading: true,
    error: "",
  });
  const token = useSelector((state) => state.token);
  console.log(loadingCreate, loadingDelete);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(`/api/tours/admin`, {
          headers: { Authorization: token },
        });

        dispatch({ type: "FETCH_SUCCESS", payload: data });
      } catch (err) {}
    };
    if (successDelete) {
      dispatch({ type: "DELETE_RESET" });
    } else {
      fetchData();
    }
  }, [token, successDelete]);

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link
              to={`/admin/tours/edit/${params.row._id}`}
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
          await axios.delete(`/api/tours/${id}`, {
            headers: { Authorization: token },
          });
          dispatch({ type: "DELETE_SUCCESS" });

          Swal.fire("Deleted!", "Bạn đã xoá thành công", "success");
        }
      });
    } catch (err) {
      toast.error(error);
      dispatch({
        type: "DELETE_FAIL",
      });
    }
  };

  return (
    <div className="TourList">
      {loading ? (
        <Loading />
      ) : error ? (
        <div>{error}</div>
      ) : (
        <div className="datatable">
          <div className="datatableTitle">
            Danh sách tour du lịch
            <Link to={`create`} className="link">
              <i
                className="fa-solid fa-plus"
                style={{ marginRight: "5px" }}
              ></i>
              Thêm hành trình
            </Link>
          </div>
          <DataGrid
            className="datagrid"
            rows={tours}
            columns={tourColumns.concat(actionColumn)}
            pageSize={9}
            rowsPerPageOptions={[9]}
            checkboxSelection
            getRowId={(row) => row._id}
          />
        </div>
      )}
    </div>
  );
};

export default TourList;
