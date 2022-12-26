import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    comment: { type: String, required: true },
    rating: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);

const hotelSchema = new mongoose.Schema(
  {
    name: { type: String, require: true, unique: true },
    slug: { type: String, require: true, unique: true },
    address: { type: String, require: true },
    district: { type: String, require: true },
    description: { type: String, require: true },
    mapUrl: { type: String, require: true },
    hotline: { type: String, require: true },
    images: { type: Array, require: true },
    reviews: [reviewSchema],
    type: { type: Number, require: true },
    price: { type: Number, require: true },
    rating: { type: Number, require: true },
    numReviews: { type: Number, require: true },
    tags: { type: Array, require: true },
  },
  {
    timestamps: true,
  }
);

const Hotel = mongoose.model("Hotel", hotelSchema);
export default Hotel;
