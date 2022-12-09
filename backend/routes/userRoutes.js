import express from "express";
import userCtrl from "../controllers/userCtrl.js";

import auth from "../middleware/auth.js";

import authAdmin from "../middleware/authAdmin.js";

const userRouter = express.Router();

userRouter.post("/register", userCtrl.register);

userRouter.post("/activation", userCtrl.activateEmail);

userRouter.post("/login", userCtrl.login);

userRouter.post("/refresh_token", userCtrl.getAccessToken);

userRouter.post("/forgot", userCtrl.forgotPassword);

userRouter.post("/reset", auth, userCtrl.resetPassword);

userRouter.get("/infor", auth, userCtrl.getUserInfor);

userRouter.get("/all_infor", auth, authAdmin, userCtrl.getUsersAllInfor);

userRouter.get("/logout", userCtrl.logout);

userRouter.patch("/update", auth, userCtrl.updateUser);

userRouter.patch("/update_role/:id", auth, authAdmin, userCtrl.updateUsersRole);

userRouter.delete("/delete/:id", auth, authAdmin, userCtrl.deleteUser);

// // Social Login
userRouter.post("/google_login", userCtrl.googleLogin);

export default userRouter;
