import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

const formatPrice = (num) => {
  const stringNum = num.toString();
  const format = stringNum.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return format;
};
export const userColumns = [
  {
    field: "id",
    headerName: "ID",
    width: 210,
    renderCell: (params) => {
      return <div className="cellWithId">{params.row._id}</div>;
    },
  },
  {
    field: "user",
    headerName: "User",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.avatar} alt="Avatar" />
          {params.row.name}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 230,
  },

  {
    field: "isAdmin",
    headerName: "Có phải Admin",
    width: 120,
    renderCell: (params) => {
      return (
        <div className="cellWithRole">
          {params.row.role === 1 ? (
            <CheckCircleIcon className="iconCheck" />
          ) : (
            <HighlightOffIcon className="iconTimes" />
          )}
        </div>
      );
    },
  },
  {
    field: "createdAt",
    headerName: "Ngày tạo",
    width: 160,
    renderCell: (params) => {
      return <div className="cellWithCreateAt">{params.row.createdAt}</div>;
    },
  },
];

//Places column

export const placeColumns = [
  {
    field: "id",
    headerName: "ID",
    width: 200,
    renderCell: (params) => {
      return <div className="cellWithId">{params.row._id}</div>;
    },
  },
  {
    field: "name",
    headerName: "Tên địa điểm",
    width: 250,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImgPlace" src={params.row.image} alt="Avatar" />
          {params.row.name}
        </div>
      );
    },
  },
  {
    field: "address",
    headerName: "Địa chỉ",
    width: 350,
    renderCell: (params) => {
      return <div className="cellWithAddressPlace">{params.row.address}</div>;
    },
  },
  {
    field: "category",
    headerName: "Thể loại",
    width: 150,
    renderCell: (params) => {
      return <div className="cellWithCategoryPlace">{params.row.category}</div>;
    },
  },

  {
    field: "createdAt",
    headerName: "Create Date",
    width: 84,
    renderCell: (params) => {
      return <div className="cellWithCreateAt">{params.row.createdAt}</div>;
    },
  },
];

//
export const hotelColumns = [
  {
    field: "id",
    headerName: "ID",
    width: 200,
    renderCell: (params) => {
      return <div className="cellWithId">{params.row._id}</div>;
    },
  },
  {
    field: "name",
    headerName: "Tên khách sạn",
    width: 300,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img
            className="cellImgPlace"
            src={params.row.images[0]}
            alt="Khách sạn"
          />
          {params.row.name}
        </div>
      );
    },
  },
  {
    field: "address",
    headerName: "Địa chỉ",
    width: 350,
    renderCell: (params) => {
      return <div className="cellWithAddressPlace">{params.row.address}</div>;
    },
  },
  {
    field: "price",
    headerName: "Giá trung bình",
    width: 120,
    renderCell: (params) => {
      return (
        <div className="cellWithCategoryPlace">
          {formatPrice(params.row.price)} VNĐ
        </div>
      );
    },
  },

  {
    field: "createdAt",
    headerName: "Create Date",
    width: 84,
    renderCell: (params) => {
      return <div className="cellWithCreateAt">{params.row.createdAt}</div>;
    },
  },
];

//
export const tourColumns = [
  {
    field: "id",
    headerName: "ID",
    width: 200,
    renderCell: (params) => {
      return <div className="cellWithId">{params.row._id}</div>;
    },
  },
  {
    field: "name",
    headerName: "Tên tuyến đường",
    width: 300,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img
            className="cellImgPlace"
            src={params.row.images[0]}
            alt="Khách sạn"
          />
          {params.row.name}
        </div>
      );
    },
  },
  {
    field: "route",
    headerName: "Tuyến đường",
    width: 300,
    renderCell: (params) => {
      return <div className="cellWithAddressPlace">{params.row.route}</div>;
    },
  },
  {
    field: "time",
    headerName: "Thời gian",
    width: 100,
    renderCell: (params) => {
      return <div className="cellWithAddressPlace">{params.row.time}</div>;
    },
  },
  {
    field: "price",
    headerName: "Giá trung bình",
    width: 110,
    renderCell: (params) => {
      return (
        <div className="cellWithCategoryPlace">
          {formatPrice(params.row.price)} VNĐ
        </div>
      );
    },
  },

  {
    field: "createdAt",
    headerName: "Create Date",
    width: 84,
    renderCell: (params) => {
      return <div className="cellWithCreateAt">{params.row.createdAt}</div>;
    },
  },
];
