import React, { useReducer } from "react";
// import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";
import "./CreateEdit.scss";
import axios from "axios";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, loading: true };
    case "FETCH_SUCCESS":
      return { ...state, loading: false };
    case "FETCH_FAIL":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

const CreateTour = () => {
  const token = useSelector((state) => state.token);
  const navigate = useNavigate();
  const [{ loading, error, loadingUpdate, loadingUpload }, dispatch] =
    useReducer(reducer, {
      loading: true,
      error: "",
    });

  const [name, setName] = useState("");
  const [slug, setSlug] = useState("");
  const [title, setTitle] = useState("");
  const [time, setTime] = useState("");
  const [price, setPrice] = useState(0);
  const [address, setAddress] = useState("");
  const [route, setRoute] = useState("");
  const [description, setDescription] = useState("");
  const [hotline, setHotline] = useState("");
  const [serviceIncludes, setServiceIncludes] = useState("");
  const [serviceNotIncludes, setServiceNotIncludes] = useState("");
  const [childrenPolicy, setChildrenPolicy] = useState("");
  const [images, setImages] = useState([]);
  // const [tourSchedule, setTourSchedule] = useState("");
  const [note, setNote] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch({ type: "FETCH_REQUEST" });
      await axios.post(
        "/api/tours",
        {
          name,
          slug,
          title,
          time,
          price,
          address,
          route,
          description,
          hotline,
          serviceIncludes,
          serviceNotIncludes,
          childrenPolicy,
          images,
          // tourSchedule,
          note,
        },
        {
          headers: { Authorization: token },
        }
      );
      toast.success("Thêm hành trình thành công");
      dispatch({ type: "FETCH_SUCCESS" });
    } catch (err) {
      toast.error(error);
      dispatch({
        type: "FETCH_FAIL",
      });
    }
  };

  return (
    <div className="new">
      <div className="newContainers">
        <div className="toph">
          <h1>Thêm Hành Trình</h1>
        </div>
        <div className="bottom">
          <form onSubmit={handleSubmit} className="form">
            <div className="form__container">
              <div className="formInput">
                <label>Tên hành trình</label>
                <input
                  required
                  type="text"
                  placeholder="Nhập tên hành trình..."
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
                <label>Tiêu đề hành trình</label>
                <input
                  required
                  type="text"
                  placeholder="Nhập tiêu đề hành trình"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div className="formInput">
                <label>Thời gian chuyến đi</label>
                <select
                  required
                  onChange={(e) => setTime(e.target.value)}
                  value={time}
                >
                  <option value="">Lựa chọn...</option>
                  <option value="1 ngày">1 ngày</option>
                  <option value="2 ngày 1 đêm">2 ngày 1 đêm</option>
                  <option value="3 ngày2 đêm">3 ngày 2 đêm</option>
                  <option value="4 ngày 3 đêm">4 ngày 3 đêm</option>
                  <option value="5 ngày 4 đêm">5 ngày 4 đêm</option>
                </select>
              </div>
              <div className="formInput">
                <label>Giá hành trình</label>
                <input
                  required
                  type="text"
                  placeholder="Nhập giá hành trình"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>
              <div className="formInput">
                <label>Địa chỉ hành trình</label>
                <input
                  required
                  type="text"
                  placeholder="Nhập địa chỉ hành trình"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
              <div className="formInput">
                <label>Tuyến đường</label>
                <input
                  required
                  type="text"
                  placeholder="Nhập tuyến hành trình"
                  value={route}
                  onChange={(e) => setRoute(e.target.value)}
                />
              </div>
              <div className="formInput">
                <label>Mô tả hành trình</label>
                <textarea
                  type="text"
                  placeholder="Nhập thông tin hành trình..."
                  required
                  onChange={(e) => setDescription(e.target.value)}
                  value={description}
                ></textarea>
              </div>

              <div className="formInput">
                <label>Hotline</label>
                <input
                  required
                  type="text"
                  placeholder="Hotline liên hệ..."
                  value={hotline}
                  onChange={(e) => setHotline(e.target.value)}
                />
              </div>

              <div className="formInput">
                <label>Dịch vụ bao gồm</label>
                <input
                  required
                  type="text"
                  placeholder="Dịch vụ bao gồm"
                  value={serviceIncludes}
                  onChange={(e) => setServiceIncludes(e.target.value)}
                />
              </div>

              <div className="formInput">
                <label>Dịch vụ không bao gồm</label>
                <input
                  required
                  type="text"
                  placeholder="Dịch không bao gồm"
                  value={serviceNotIncludes}
                  onChange={(e) => setServiceNotIncludes(e.target.value)}
                />
              </div>

              <div className="formInput">
                <label>Chính sách trẻ em</label>
                <input
                  required
                  type="text"
                  placeholder="Nhập chính sách trẻ em"
                  value={childrenPolicy}
                  onChange={(e) => setChildrenPolicy(e.target.value)}
                />
              </div>

              <div className="formInput">
                <label>Hình ảnh</label>
                <input
                  required
                  type="text"
                  placeholder="Nhập hình ảnh"
                  value={images}
                  onChange={(e) => setImages(e.target.value)}
                />
              </div>

              {/* <div className="formInput">
                <label>Kế hoạch tour</label>
                <input
                  required
                  type="text"
                  placeholder="Nhập kế hoạch tour"
                  value={tourSchedule}
                  onChange={(e) => setTourSchedule(e.target.value)}
                />
              </div> */}
              <div className="formInput">
                <label>Một số lưu ý</label>
                <textarea
                  type="text"
                  placeholder="Một số lưu ý cho hành trình..."
                  required
                  onChange={(e) => setNote(e.target.value)}
                  value={note}
                ></textarea>
              </div>

              <button type="submit">Thêm hành trình </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateTour;
