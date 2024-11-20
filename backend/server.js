// const express = require("express");

import express from "express";

// import authRoutes from "./routes/auth.route.js";
import { ENV_VARS } from "./config/envVars.js";
import { connectDB } from "./config/db.js";
import router from "./routes/auth.route.js";
import movieRoutes from "./routes/movie.route.js";
import tvRoutes from "./routes/tvroutes.js";
import cookieParser from "cookie-parser";
import { protectRoute } from "./middleware/protectRoute.js";
import searchRoutes from "./routes/searchRoutes.js";

const PORT = ENV_VARS.PORT;

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use("/api/v1/auth", router);
app.use("/api/v1/movie", protectRoute, movieRoutes);
app.use("/api/v1/tv", protectRoute, tvRoutes);
app.use("/api/v1/search", protectRoute, searchRoutes);

app.listen(PORT, () => {
  console.log("listening...");
  connectDB();
});
