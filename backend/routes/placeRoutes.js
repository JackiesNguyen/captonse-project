import express from "express";
import Place from "../models/placeModel.js";
const placeRouter = express.Router();
import expressAsyncHandler from "express-async-handler";
import auth from "../middleware/auth.js";

placeRouter.get("/", async (req, res) => {
  const places = await Place.find();
  res.send(places);
});

placeRouter.post(
  "/:id/reviews",
  auth,
  expressAsyncHandler(async (req, res) => {
    const placeId = req.params.id;
    const place = await Place.findById(placeId);
    if (place) {
      if (place.reviews.find((x) => x.name === req.user.name)) {
        return res
          .status(400)
          .send({ message: "You already submitted a review" });
      }

      const review = {
        name: req.body.name,
        rating: Number(req.body.rating),
        comment: req.body.comment,
      };
      place.reviews.push(review);
      place.numReviews = place.reviews.length;
      place.rating =
        place.reviews.reduce((a, c) => c.rating + a, 0) / place.reviews.length;
      const updatedplace = await place.save();
      res.status(201).send({
        message: "Review Created",
        review: updatedplace.reviews[updatedplace.reviews.length - 1],
        numReviews: place.numReviews,
        rating: place.rating,
      });
    } else {
      res.status(404).send({ message: "Hai" });
    }
  })
);

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
placeRouter.get("/slug/:slug", async (req, res) => {
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
