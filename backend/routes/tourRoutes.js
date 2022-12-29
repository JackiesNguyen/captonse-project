import express from "express";
import Tour from "../models/tourModel.js";
const tourRouter = express.Router();
import expressAsyncHandler from "express-async-handler";
import auth from "../middleware/auth.js";

tourRouter.get("/", async (req, res) => {
  const tours = await Tour.find();
  res.send(tours);
});

tourRouter.post(
  "/:id/reviews",
  auth,
  expressAsyncHandler(async (req, res) => {
    const tourId = req.params.id;
    const tour = await Tour.findById(tourId);
    if (tour) {
      if (tour.reviews.find((x) => x.name === req.user.name)) {
        return res
          .status(400)
          .send({ message: "You already submitted a review" });
      }

      const review = {
        name: req.body.name,
        rating: Number(req.body.rating),
        comment: req.body.comment,
      };
      tour.reviews.push(review);
      tour.numReviews = tour.reviews.length;
      tour.rating =
        tour.reviews.reduce((a, c) => c.rating + a, 0) / tour.reviews.length;
      const updatedTour = await tour.save();
      res.status(201).send({
        message: "Review Created",
        review: updatedTour.reviews[updatedTour.reviews.length - 1],
        numReviews: tour.numReviews,
        rating: tour.rating,
      });
    } else {
      res.status(404).send({ message: "Hai" });
    }
  })
);

tourRouter.get(
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
    const tours = await Tour.find({ ...keyword });
    res.send({ tours });
  })
);

tourRouter.get(
  "/times",
  expressAsyncHandler(async (req, res) => {
    const districts = await Tour.find().distinct("time");
    res.send(districts);
  })
);

tourRouter.get("/slug/:slug", async (req, res) => {
  const tour = await Tour.findOne({ slug: req.params.slug });
  if (tour) {
    res.send(tour);
  } else {
    res.status(404).send({ message: "Không tìm thấy địa điểm!" });
  }
});
tourRouter.get("/:id", async (req, res) => {
  const tour = await Tour.findById(req.params.id);
  if (tour) {
    res.send(tour);
  } else {
    res.status(404).send({ message: "Không tìm thấy địa điểm!" });
  }
});

export default tourRouter;
