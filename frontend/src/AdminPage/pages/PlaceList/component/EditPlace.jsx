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

const EditPlace = () => {
  const params = useParams(); // /product/:id
  const { id: productId } = params;
  const token = useSelector((state) => state.token);

  const navigate = useNavigate();

  const [{ loading, error }, dispatch] = useReducer(reducer, {
    loading: true,
    error: "",
  });
  const [name, setName] = useState("");
  const [slug, setSlug] = useState("");
  const [title, setTile] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const [district, setDistrict] = useState("");
  const [rating, setRating] = useState(5);
  const [address, setAddress] = useState("");
  const [description, setDescription] = useState("");
  const [mapUrl, setMapUrl] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch({ type: "FETCH_REQUEST" });
        const { data } = await axios.get(`/api/places/${productId}`);
        setName(data.name);
        setSlug(data.slug);
        setTile(data.title);
        setCategory(data.category);
        setImage(data.image);
        setDistrict(data.district);
        setRating(data.rating);
        setAddress(data.address);
        setDescription(data.description);
        setMapUrl(data.mapUrl);

        dispatch({ type: "FETCH_SUCCESS" });
      } catch (err) {
        dispatch({
          type: "FETCH_FAIL",
          payload: err,
        });
      }
    };
    fetchData();
  }, [productId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch({ type: "UPDATE_REQUEST" });
      await axios.put(
        `/api/places/${productId}`,
        {
          _id: productId,
          name,
          slug,
          title,
          category,
          image,
          district,
          rating,
          address,
          description,
          mapUrl,
        },
        {
          headers: { Authorization: token },
        }
      );
      dispatch({
        type: "UPDATE_SUCCESS",
      });
      toast.success("Cập nhật thành công");
      navigate("/admin/places");
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
            <h1>Thêm địa điểm</h1>
          </div>
          <div className="bottom">
            <form onSubmit={handleSubmit} className="form">
              <div className="form__container">
                <div className="formInput">
                  <label>Tên địa điểm</label>
                  <input
                    required
                    type="text"
                    placeholder="Nhập địa điểm vào đây..."
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
                  <label>Tiêu đề</label>
                  <input
                    required
                    type="text"
                    placeholder="Nhập tiêu đề vào đây..."
                    value={title}
                    onChange={(e) => setTile(e.target.value)}
                  />
                </div>

                <div className="formInput">
                  <label>Thể loại</label>
                  <select
                    required
                    onChange={(e) => setCategory(e.target.value)}
                    value={category}
                  >
                    <option value="">Lựa chọn...</option>
                    <option value="Địa điểm tham quan">
                      Địa điểm tham quan
                    </option>
                    <option value="Bãi biển đẹp">Bãi biển đẹp</option>
                    <option value="Văn hoá tín ngưỡng">
                      Văn hoá tín ngưỡng
                    </option>
                    <option value="Địa điểm vui chơi hấp dẫn">
                      Địa điểm vui chơi hấp dẫn
                    </option>
                    <option value=" Check-in Đà Nẵng">Check-in Đà Nẵng</option>
                    <option value="Quán Ăn Chay">Quán ăn</option>
                  </select>
                </div>
                {/* <div className="formInput">
                <>
                  <label htmlFor="file">
                    Hình ảnh: <DriveFolderUploadOutlinedIcon className="icon" />
                  </label>
                  <input
                    type="file"
                    id="file"
                    onChange={(e) => setImage(e.target.files[0])}
                    style={{ display: "none" }}
                  />
                </>
                <img
                  src={
                    image
                      ? URL.createObjectURL(image)
                      : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                  }
                  alt=""
                />
              </div> */}
                <div className="formInput">
                  <label>Hình ảnh</label>
                  <input
                    required
                    type="text"
                    placeholder="Nhập link hình ảnh vào đây..."
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
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
                  <label>Đánh giá</label>
                  <select
                    onChange={(e) => setRating(e.target.value)}
                    value={rating}
                  >
                    <option value="">Lựa chọn...</option>
                    <option value="1">1- Không đẹp</option>
                    <option value="2">2- Bình thường</option>
                    <option value="3">3- Đẹp</option>
                    <option value="4">4- Rất đẹp</option>
                    <option value="5">5- Rất rất đẹp</option>
                  </select>
                </div>
                <div className="formInput">
                  <label required>Địa chỉ</label>
                  <input
                    required
                    type="text"
                    placeholder="Nhập địa chỉ vào đây..."
                    onChange={(e) => setAddress(e.target.value)}
                    value={address}
                  />
                </div>

                <div className="formInput">
                  <label>Mô tả</label>
                  <textarea
                    type="text"
                    placeholder="Nhập thông tin địa điểm..."
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
                <button type="submit">Sửa địa điểm </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default EditPlace;
