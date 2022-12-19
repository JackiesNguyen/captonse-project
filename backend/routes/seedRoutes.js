import express from "express";
import Place from "../models/placeModel.js";
import data from "../data/data.js";

const seedRouter = express.Router();

seedRouter.get("/", async (req, res) => {
  await Place.remove({});
  const createdPlaces = await Place.insertMany(data.places);
  // await Users.remove({});
  // const createdUsers = await Users.insertMany(users);
  res.send({ createdPlaces });
});
export default seedRouter;
