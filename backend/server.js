import express from "express";
import places from "./data/places.js";

const app = express();
//LOAD PLACE FROM SERVER
app.get("/api/places", (req, res) => {
  res.json(places);
});

//SINGLE PRODUCT FROM SERVER
app.get("/api/places/slug/:slug", (req, res) => {
  const place = places.find((p) => p.slug === req.params.slug);
  res.json(place);
});

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.listen(5000, console.log("server running port 5000..."));
