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

const PAGE_SIZE = 3;

tourRouter.get(
  "/search",
  expressAsyncHandler(async (req, res) => {
    const { query } = req;
    const pageSize = query.pageSize || PAGE_SIZE;
    const page = query.page || 1;
    const time = query.time || "";
    const price = query.price || "";
    const rating = query.rating || "";
    const order = query.order || "";
    const searchQuery = query.query || "";

    const queryFilter =
      searchQuery && searchQuery !== "all"
        ? {
            name: {
              $regex: searchQuery,
              $options: "i",
            },
          }
        : {};
    const timeFilter = time && time !== "all" ? { time } : {};
    const ratingFilter =
      rating && rating !== "all"
        ? {
            rating: {
              $gte: Number(rating),
            },
          }
        : {};
    const priceFilter =
      price && price !== "all"
        ? {
            // 1-50
            price: {
              $gte: Number(price.split("-")[0]),
              $lte: Number(price.split("-")[1]),
            },
          }
        : {};
    const sortOrder =
      order === "featured"
        ? { featured: -1 }
        : order === "lowest"
        ? { price: 1 }
        : order === "highest"
        ? { price: -1 }
        : order === "toprated"
        ? { rating: -1 }
        : order === "newest"
        ? { createdAt: -1 }
        : { _id: -1 };

    const tours = await Tour.find({
      ...queryFilter,
      ...timeFilter,
      ...priceFilter,
      ...ratingFilter,
    })
      .sort(sortOrder)
      .skip(pageSize * (page - 1))
      .limit(pageSize);

    const countTours = await Tour.countDocuments({
      ...queryFilter,
      ...timeFilter,
      ...priceFilter,
      ...ratingFilter,
    });
    res.send({
      tours,
      countTours,
      page,
      pages: Math.ceil(countTours / pageSize),
    });
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
