import express, { query } from "express";
import Place from "../models/placeModel.js";
const placeRouter = express.Router();
import expressAsyncHandler from "express-async-handler";

placeRouter.get("/", async (req, res) => {
  const places = await Place.find();
  res.send(places);
});
placeRouter.get(
  "/search",
  expressAsyncHandler(async (req, res) => {
    const keyword = req.query.keyword
      ? {
          $or: [
            {
              name: {
                $regex: req.query.keyword,
                $options: "i",
              },
            },
          ],
        }
      : {};
    const places = await Place.find({ ...keyword });
    res.send({ places });
  })
);

placeRouter.get(
  "/districts",
  expressAsyncHandler(async (req, res) => {
    const districts = await Place.find().distinct("district");
    res.send(districts);
  })
);
placeRouter.get(
  "/categories",
  expressAsyncHandler(async (req, res) => {
    const categories = await Place.find().distinct("category");
    res.send(categories);
  })
);

placeRouter.get("/:slug", async (req, res) => {
  const place = await Place.findOne({ slug: req.params.slug });
  if (place) {
    res.send(place);
  } else {
    res.status(404).send({ message: "Không tìm thấy địa điểm!" });
  }
});

placeRouter.get("/:id", async (req, res) => {
  const place = await Place.findById(req.params.id);
  if (place) {
    res.send(place);
  } else {
    res.status(404).send({ message: "Không tìm thấy địa điểm!" });
  }
});

export default placeRouter;
