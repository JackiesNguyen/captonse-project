import express from "express";
import Place from "../models/placeModel.js";
import places from "../data/places.js";

const seedRouter = express.Router();

seedRouter.get("/", async (req, res) => {
  await Place.remove({});
  const createdPlaces = await Place.insertMany(places);
  //   await User.remove({});
  //   const createdUsers = await User.insertMany(data.users);
  res.send({ createdPlaces });
});
export default seedRouter;
