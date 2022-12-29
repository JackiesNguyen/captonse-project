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

const tourSchema = new mongoose.Schema(
  {
    name: { type: String, require: true, unique: true },
    slug: { type: String, require: true, unique: true },
    title: { type: String, require: true },
    time: { type: String, require: true },
    price: { type: Number, require: true },
    address: { type: String, require: true },
    route: { type: String, require: true },
    description: { type: String, require: true },
    hotline: { type: String, require: true },
    serviceIncludes: { type: String, require: true },
    serviceNotIncludes: { type: String, require: true },
    childrenPolicy: { type: String, require: true },
    images: { type: Array, require: true },
    rating: { type: Number, require: true },
    numReviews: { type: Number, require: true },
    reviews: [reviewSchema],
    description: { type: String, require: true },
    tourSchedule: [
      {
        day: { type: String, require: true },
        title: { type: String, require: true },
        details: [
          {
            timeSchedule: { type: String, require: true },
            desc: { type: String, require: true },
            img: { type: Array, require: true },
          },
        ],
      },
    ],
    note: { type: String, require: true },
  },
  {
    timestamps: true,
  }
);

const Tour = mongoose.model("Tour", tourSchema);
export default Tour;
