import express from "express";
import uploadCtrl from "../controllers/uploadCtrl.js";
import uploadImage from "../middleware/uploadImage.js";
import auth from "../middleware/auth.js";
const uploadRouter = express.Router();

uploadRouter.post("/upload_avatar", uploadImage, auth, uploadCtrl.uploadAvatar);

export default uploadRouter;
