import React, { useEffect, useReducer } from "react";
// import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";
import "./CreateEdit.scss";
import axios from "axios";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "../../../components/Loading/Loading";

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, loading: true };
    case "FETCH_SUCCESS":
      return { ...state, loading: false };
    case "FETCH_FAIL":
      return { ...state, loading: false, error: action.payload };
    case "UPDATE_REQUEST":
      return { ...state, loadingUpdate: true };
    case "UPDATE_SUCCESS":
      return { ...state, loadingUpdate: false };
    case "UPDATE_FAIL":
      return { ...state, loadingUpdate: false };
    default:
      return state;
  }
};

const EditHotel = () => {
  const params = useParams(); // /product/:id
  const { id: hotelId } = params;
  const token = useSelector((state) => state.token);

  const navigate = useNavigate();

  const [{ loading, error }, dispatch] = useReducer(reducer, {
    loading: true,
    error: "",
  });
  const [name, setName] = useState("");
  const [slug, setSlug] = useState("");
  const [address, setAddress] = useState("");
  const [district, setDistrict] = useState("");
  const [description, setDescription] = useState("");
  const [mapUrl, setMapUrl] = useState("");
  const [hotline, setHotline] = useState("");
  const [images, setImages] = useState("");
  const [type, setType] = useState(5);
  const [price, setPrice] = useState(0);
  const [tags, setTags] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch({ type: "FETCH_REQUEST" });
        const { data } = await axios.get(`/api/hotels/${hotelId}`);
        setName(data.name);
        setSlug(data.slug);
        setAddress(data.address);
        setDistrict(data.district);
        setDescription(data.description);
        setMapUrl(data.mapUrl);
        setHotline(data.hotline);
        setImages(data.images);
        setType(data.type);
        setPrice(data.price);
        setTags(data.tags);

        dispatch({ type: "FETCH_SUCCESS" });
      } catch (err) {
        dispatch({
          type: "FETCH_FAIL",
          payload: err,
        });
      }
    };
    fetchData();
  }, [hotelId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch({ type: "UPDATE_REQUEST" });
      await axios.put(
        `/api/hotels/${hotelId}`,
        {
          _id: hotelId,
          name,
          slug,
          address,
          district,
          description,
          mapUrl,
          hotline,
          images,
          type,
          price,
          tags,
        },
        {
          headers: { Authorization: token },
        }
      );
      dispatch({
        type: "UPDATE_SUCCESS",
      });
      toast.success("Cập nhật thành công");
      navigate("/admin/hotels");
    } catch (err) {
      toast.error("Cập nhật không thành công");
      dispatch({ type: "UPDATE_FAIL" });
    }
  };

  return (
    <div className="new">
      {loading ? (
        <Loading />
      ) : error ? (
        <div>{error}</div>
      ) : (
        <div className="newContainers">
          <div className="toph">
            <h1>Sửa</h1>
          </div>
          <div className="bottom">
            <form onSubmit={handleSubmit} className="form">
              <div className="form__container">
                <div className="formInput">
                  <label>Tên khách sạn</label>
                  <input
                    required
                    type="text"
                    placeholder="Nhập tên khách sạn..."
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="formInput">
                  <label>Slug</label>
                  <input
                    required
                    type="text"
                    placeholder="Ví dụ: cau-song-han"
                    value={slug}
                    onChange={(e) => setSlug(e.target.value)}
                  />
                </div>
                <div className="formInput">
                  <label>Địa chỉ</label>
                  <input
                    required
                    type="text"
                    placeholder="Nhập địa chỉ khách sạn..."
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </div>

                <div className="formInput">
                  <label>Thể loại</label>
                  <select
                    required
                    onChange={(e) => setType(e.target.value)}
                    value={type}
                  >
                    <option value="">Lựa chọn...</option>
                    <option value="2">Khách sạn 2 sao</option>
                    <option value="3">Khách sạn 3 sao</option>
                    <option value="4">Khách sạn 4 sao</option>
                    <option value="5">Khách sạn 5 sao</option>
                  </select>
                </div>
                <div className="formInput">
                  <label>Hình ảnh</label>
                  <input
                    required
                    type="text"
                    placeholder="Nhập link hình ảnh vào đây..."
                    value={images}
                    onChange={(e) => setImages(e.target.value)}
                  />
                </div>

                <div className="formInput">
                  <label>Thuộc Quận</label>
                  <select
                    required
                    onChange={(e) => setDistrict(e.target.value)}
                    value={district}
                  >
                    <option value="">Lựa chọn...</option>
                    <option value="Hải Châu">Hải Châu</option>
                    <option value="Thanh Khê">Thanh Khê</option>
                    <option value="Liên Chiểu">Liên Chiểu</option>
                    <option value="Sơn Trà">Sơn Trà</option>
                    <option value="Cẩm Lệ">Cẩm Lệ</option>
                    <option value="Ngũ hành Sơn">Ngũ Hành Sơn</option>
                    <option value="Khác">Khác</option>
                  </select>
                </div>

                <div className="formInput">
                  <label>Mô tả</label>
                  <textarea
                    type="text"
                    placeholder="Nhập thông khách sạn..."
                    required
                    onChange={(e) => setDescription(e.target.value)}
                    value={description}
                  ></textarea>
                </div>

                <div className="formInput">
                  <label>Link bản đồ</label>
                  <input
                    type="text"
                    placeholder="Nhập link bản đồ vào đây"
                    onChange={(e) => setMapUrl(e.target.value)}
                    value={mapUrl}
                  />
                </div>
                <div className="formInput">
                  <label>Hotline</label>
                  <input
                    type="text"
                    placeholder="Nhập link bản đồ vào đây"
                    onChange={(e) => setHotline(e.target.value)}
                    value={hotline}
                  />
                </div>

                <div className="formInput">
                  <label>Giá phòng trung bình</label>
                  <input
                    type="number"
                    placeholder="Nhập giá phòng trung bình..."
                    onChange={(e) => setPrice(e.target.value)}
                    value={price}
                  />
                </div>

                <div className="formInput">
                  <label>Ưu đãi</label>
                  <input
                    type="text"
                    placeholder="Nhập các ưu đãi của khách sạn..."
                    onChange={(e) => setTags(e.target.value)}
                    value={tags}
                  />
                </div>
                <button type="submit">Sửa khách sạn </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default EditHotel;
