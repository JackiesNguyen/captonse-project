import Users from "../models/userModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import sendEmail from "./sendMail.js";
import { google } from "googleapis";
const { OAuth2 } = google.auth;
import fetch from "node-fetch";

const client = new OAuth2(process.env.MAILING_SERVICE_CLIENT_ID);
const { CLIENT_URL } = process.env;

const userCtrl = {
  register: async (req, res) => {
    try {
      const { name, email, password } = req.body;
      if (!name || !email || !password) {
        return res
          .status(400)
          .json({ msg: "Vui lòng nhập tất cả các trường bắt buộc!" });
      }
      if (!validateEmail(email))
        return res.status(400).json({ msg: "Địa chỉ email không hợp lệ!" });
      //
      const user = await Users.findOne({ email });
      if (user)
        return res.status(400).json({ msg: "Địa chỉ email đã tồn tại!" });
      if (password.length < 6)
        return res
          .status(400)
          .json({ msg: "Mật khẩu ít nhất phải chứa 6 ký tự" });
      //
      const passwordHash = await bcrypt.hash(password, 12);
      //
      const newUser = {
        name,
        email,
        password: passwordHash,
      };
      //
      const activation_token = createActivationToken(newUser);
      //
      const url = `${CLIENT_URL}/api/user/activation/${activation_token}`;
      sendEmail(email, url, "Xác nhận địa chỉ email");

      res.json({ msg: "Vui lòng xác thực email" });
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },
  activateEmail: async (req, res) => {
    try {
      const { activation_token } = req.body;
      const user = jwt.verify(
        activation_token,
        process.env.ACTIVATION_TOKEN_SECRET
      );
      const { name, email, password } = user;

      const check = await Users.findOne({ email });
      if (check)
        return res.status(400).json({ msg: "Địa chỉ email này đã tồn tại" });

      const newUser = new Users({
        name,
        email,
        password,
      });

      await newUser.save();

      res.json({ msg: "Tài khoản đã được kích hoạt!" });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  login: async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await Users.findOne({ email });
      if (!user)
        return res.status(400).json({ msg: "Địa chỉ email không chính xác!" });

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch)
        return res.status(400).json({ msg: "Mật khẩu không chính xác!" });

      const refresh_token = createRefreshToken({ id: user._id });
      res.cookie("refreshtoken", refresh_token, {
        httpOnly: true,
        path: "api/user/refresh_token",
        maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
      });

      res.json({ msg: "Đăng nhập thành công!" });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  getAccessToken: (req, res) => {
    try {
      const rf_token = req.cookies.refreshtoken;
      if (!rf_token)
        return res.status(400).json({ msg: "Vui lòng đăng nhập ngay bay giờ" });

      jwt.verify(rf_token, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
        if (err) return res.status(400).json({ msg: "Please login now!" });

        const access_token = createAccessToken({ id: user.id });
        res.json({ access_token });
      });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  forgotPassword: async (req, res) => {
    try {
      const { email } = req.body;
      const user = await Users.findOne({ email });
      if (!user)
        return res.status(400).json({ msg: "Địa chỉ email này không tồn tại" });

      const access_token = createAccessToken({ id: user._id });
      const url = `${CLIENT_URL}/api/user/reset/${access_token}`;

      sendEmail(email, url, "Đặt lại mật khẩu của bạn");
      res.json({ msg: "Đặt lại mật khẩu, Vui lòng kiểm tra email của bạn!" });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  resetPassword: async (req, res) => {
    try {
      const { password } = req.body;
      const passwordHash = await bcrypt.hash(password, 12);

      await Users.findOneAndUpdate(
        { _id: req.user.id },
        {
          password: passwordHash,
        }
      );
      res.json({ msg: "Thay đổi mật khẩu thành công" });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  getUserInfor: async (req, res) => {
    try {
      const user = await Users.findById(req.user.id).select("-password");

      res.json(user);
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  getUsersAllInfor: async (req, res) => {
    try {
      const users = await Users.find().select("-password");

      res.json(users);
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  logout: async (req, res) => {
    try {
      res.clearCookie("refreshtoken", { path: "api/user/refresh_token" });
      return res.json({ msg: "Đăng xuất" });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  updateUser: async (req, res) => {
    try {
      const { name, avatar } = req.body;
      await Users.findOneAndUpdate(
        { _id: req.user.id },
        {
          name,
          avatar,
        }
      );
      res.json({ msg: "Cập nhật thành công!" });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  updateUsersRole: async (req, res) => {
    try {
      const { role } = req.body;

      await Users.findOneAndUpdate(
        { _id: req.params.id },
        {
          role,
        }
      );

      res.json({ msg: "Cập nhật thành công!" });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  deleteUser: async (req, res) => {
    try {
      await Users.findByIdAndDelete(req.params.id);

      res.json({ msg: "Xoá thành công!" });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  googleLogin: async (req, res) => {
    try {
      const { tokenId } = req.body;

      const verify = await client.verifyIdToken({
        idToken: tokenId,
        audience: process.env.MAILING_SERVICE_CLIENT_ID,
      });

      const { email_verified, email, name, picture } = verify.payload;

      const password = email + process.env.GOOGLE_SECRET;

      const passwordHash = await bcrypt.hash(password, 12);

      if (!email_verified)
        return res
          .status(400)
          .json({ msg: "Xác thực email không thành công!" });

      const user = await Users.findOne({ email });

      if (user) {
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch)
          return res.status(400).json({ msg: "Mật khẩu không chính xác" });

        const refresh_token = createRefreshToken({ id: user._id });
        res.cookie("refreshtoken", refresh_token, {
          httpOnly: true,
          path: "/api/user/refresh_token",
          maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
        });

        res.json({ msg: "Đăng nhập thành công!" });
      } else {
        const newUser = new Users({
          name,
          email,
          password: passwordHash,
          avatar: picture,
        });

        await newUser.save();

        const refresh_token = createRefreshToken({ id: newUser._id });
        res.cookie("refreshtoken", refresh_token, {
          httpOnly: true,
          path: "/api/user/refresh_token",
          maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
        });

        res.json({ msg: "Đăng nhập thành công!" });
      }
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  facebookLogin: async (req, res) => {
    try {
      const { accessToken, userID } = req.body;

      const URL = `https://graph.facebook.com/v2.9/${userID}/?fields=id,name,email,picture&access_token=${accessToken}`;

      const data = await fetch(URL)
        .then((res) => res.json())
        .then((res) => {
          return res;
        });

      const { email, name, picture } = data;

      const password = email + process.env.FACEBOOK_SECRET;

      const passwordHash = await bcrypt.hash(password, 12);

      const user = await Users.findOne({ email });

      if (user) {
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch)
          return res.status(400).json({ msg: "Mật khẩu không chính xác" });

        const refresh_token = createRefreshToken({ id: user._id });
        res.cookie("refreshtoken", refresh_token, {
          httpOnly: true,
          path: "/api/user/refresh_token",
          maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
        });

        res.json({ msg: "Đăng nhập thành công" });
      } else {
        const newUser = new Users({
          name,
          email,
          password: passwordHash,
          avatar: picture.data.url,
        });

        await newUser.save();

        const refresh_token = createRefreshToken({ id: newUser._id });
        res.cookie("refreshtoken", refresh_token, {
          httpOnly: true,
          path: "/api/user/refresh_token",
          maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
        });

        res.json({ msg: "Đăng nhập thành công!" });
      }
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
};

const validateEmail = (email) => {
  const regex =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(email);
};

const createActivationToken = (payload) => {
  return jwt.sign(payload, process.env.ACTIVATION_TOKEN_SECRET, {
    expiresIn: "5m",
  });
};
const createAccessToken = (payload) => {
  return jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "15m",
  });
};

const createRefreshToken = (payload) => {
  return jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET, {
    expiresIn: "7d",
  });
};

export default userCtrl;
