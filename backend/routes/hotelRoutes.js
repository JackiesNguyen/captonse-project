import express from "express";
import auth from "../middleware/auth.js";
import Hotel from "../models/hotelModel.js";
const hotelRouter = express.Router();
import expressAsyncHandler from "express-async-handler";

hotelRouter.get("/", async (req, res) => {
  const hotels = await Hotel.find();
  res.send(hotels);
});
hotelRouter.post(
  "/:id/reviews",
  auth,
  expressAsyncHandler(async (req, res) => {
    const hotelId = req.params.id;
    const hotel = await Hotel.findById(hotelId);
    if (hotel) {
      if (hotel.reviews.find((x) => x.name === req.user.name)) {
        return res
          .status(400)
          .send({ message: "You already submitted a review" });
      }

      const review = {
        name: req.body.name,
        rating: Number(req.body.rating),
        comment: req.body.comment,
      };
      hotel.reviews.push(review);
      hotel.numReviews = hotel.reviews.length;
      hotel.rating =
        hotel.reviews.reduce((a, c) => c.rating + a, 0) / hotel.reviews.length;
      const updatedhotel = await hotel.save();
      res.status(201).send({
        message: "Review Created",
        review: updatedhotel.reviews[updatedhotel.reviews.length - 1],
        numReviews: hotel.numReviews,
        rating: hotel.rating,
      });
    } else {
      res.status(404).send({ message: "Hai" });
    }
  })
);

hotelRouter.get(
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
    const hotels = await Hotel.find({ ...keyword });
    res.send({ hotels });
  })
);

hotelRouter.get(
  "/type",
  expressAsyncHandler(async (req, res) => {
    const types = await Hotel.find().distinct("type");
    res.send(types);
  })
);
hotelRouter.get("/slug/:slug", async (req, res) => {
  const hotel = await Hotel.findOne({ slug: req.params.slug });
  if (hotel) {
    res.send(hotel);
  } else {
    res.status(404).send({ message: "Không tìm thấy Khách sạn!" });
  }
});
hotelRouter.get("/:id", async (req, res) => {
  const hotel = await Hotel.findById(req.params.id);
  if (hotel) {
    res.send(hotel);
  } else {
    res.status(404).send({ message: "Không tìm thấy khách sạn!" });
  }
});

export default hotelRouter;
