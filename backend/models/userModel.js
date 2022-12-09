import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Vui lòng nhập tên của bạn!"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Vui lòng nhập email của bạn!"],
      trim: true,
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Vui lòng nhập mật khẩu của bạn!"],
    },
    role: {
      type: Number,
      default: 0, // 0 = user, 1 = admin
    },
    avatar: {
      type: String,
      default:
        "https://res.cloudinary.com/devatchannel/image/upload/v1602752402/avatar/avatar_cugq40.png",
    },
  },
  {
    timestamps: true,
  }
);

const Users = mongoose.model("Users", userSchema);
export default Users;
