import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import fileUpload from "express-fileupload";
// Router import
import seedRouter from "./routes/seedRoutes.js";
import placeRouter from "./routes/placeRoutes.js";
import userRouter from "./routes/userRoutes.js";
import uploadRouter from "./routes/uploadRoutes.js";
import hotelRouter from "./routes/hotelRoutes.js";

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use(
  fileUpload({
    useTempFiles: true,
  })
);
// Connect mongodb
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("connected to db");
  })
  .catch((err) => {
    console.log(err.message);
  });

//Router

app.use("/api/seed", seedRouter);
app.use("/api/places", placeRouter);
app.use("/api/hotels", hotelRouter);
app.use("/api/user", userRouter);
app.use("/api/avatar", uploadRouter);

// PORT

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server at http://localhost:${port}`);
});
