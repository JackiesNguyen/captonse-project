import express from "express";
import auth from "../middleware/auth.js";
import Hotel from "../models/hotelModel.js";
const hotelRouter = express.Router();
import expressAsyncHandler from "express-async-handler";
import authAdmin from "../middleware/authAdmin.js";

hotelRouter.get("/", async (req, res) => {
  const hotels = await Hotel.find();
  res.send(hotels);
});

hotelRouter.get(
  "/admin",
  auth,
  authAdmin,
  expressAsyncHandler(async (req, res) => {
    const hotels = await Hotel.find();
    const countHotels = await Hotel.countDocuments();
    res.send({
      hotels,
      countHotels,
    });
  })
);

hotelRouter.post(
  "/",
  auth,
  authAdmin,
  expressAsyncHandler(async (req, res) => {
    const {
      name,
      slug,
      address,
      district,
      description,
      mapUrl,
      hotline,
      images,
      type,
      price,
      tags,
    } = req.body;
    const hotelExits = await Hotel.findOne({ name });
    if (hotelExits) {
      res.status(400);
      throw new Error("Hotels already");
    } else {
      const hotel = new Hotel({
        name,
        slug,
        address,
        district,
        description,
        mapUrl,
        hotline,
        images,
        type,
        price,
        tags,
      });
      if (hotel) {
        const createdHotel = await hotel.save();
        res.status(201).json(createdHotel);
      } else {
        res.status(404);
        throw new Error("Invalid data");
      }
    }
  })
);

hotelRouter.put(
  "/:id",
  auth,
  authAdmin,
  expressAsyncHandler(async (req, res) => {
    const {
      name,
      slug,
      address,
      district,
      description,
      mapUrl,
      hotline,
      images,
      type,
      price,
      tags,
    } = req.body;
    const hotel = await Hotel.findById(req.params.id);
    if (hotel) {
      hotel.name = name;
      hotel.slug = slug;
      hotel.address = address;
      hotel.district = district;
      hotel.description = description;
      hotel.mapUrl = mapUrl;
      hotel.hotline = hotline;
      hotel.images = images;
      hotel.type = type;
      hotel.price = price;
      hotel.tags = tags;
      const updatedHotel = await hotel.save();
      res.json(updatedHotel);
    } else {
      res.status(400);
      throw new Error("Lỗi backend");
    }
  })
);

hotelRouter.delete(
  "/:id",
  auth,
  authAdmin,
  expressAsyncHandler(async (req, res) => {
    const hotel = await Hotel.findById(req.params.id);
    if (hotel) {
      await hotel.remove();
      res.send({ message: "Product Deleted" });
    } else {
      res.status(404).send({ message: "Product Not Found" });
    }
  })
);

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

const PAGE_SIZE = 3;
hotelRouter.get(
  "/search",
  expressAsyncHandler(async (req, res) => {
    const { query } = req;
    const pageSize = query.pageSize || PAGE_SIZE;
    const page = query.page || 1;
    const type = query.type || "";
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
    const typeFilter = type && type !== "all" ? { type } : {};
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

    const hotels = await Hotel.find({
      ...queryFilter,
      ...typeFilter,
      ...priceFilter,
      ...ratingFilter,
    })
      .sort(sortOrder)
      .skip(pageSize * (page - 1))
      .limit(pageSize);

    const countHotels = await Hotel.countDocuments({
      ...queryFilter,
      ...typeFilter,
      ...priceFilter,
      ...ratingFilter,
    });
    res.send({
      hotels,
      countHotels,
      page,
      pages: Math.ceil(countHotels / pageSize),
    });
  })
);

hotelRouter.get(
  "/types",
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
