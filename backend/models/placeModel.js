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

const placeSchema = new mongoose.Schema(
  {
    name: { type: String, require: true, unique: true },
    slug: { type: String, require: true, unique: true },
    title: { type: String, require: true },
    category: { type: String, require: true },
    image: { type: String, require: true },
    district: { type: String, require: true },
    imageCaption: { type: String, require: true },
    fromPrice: { type: Number, require: true },
    toPrice: { type: Number, require: true },

    detailDescription: [
      {
        desc: { type: String, require: true },
        img: { type: String, require: true },
        text: { type: String, require: true },
      },
    ],
    rating: { type: Number, require: true },
    numReviews: { type: Number, require: true },
    reviews: [reviewSchema],
    address: { type: String, require: true },
    description: { type: String, require: true },
    mapUrl: { type: String, require: true },
  },
  {
    timestamps: true,
  }
);

const Place = mongoose.model("Place", placeSchema);
export default Place;
