import express from "express";
import cookieParser from "cookie-parser";
import { ENV_VARS } from "./backend/config/envVars.js";
import { connectDB } from "./backend/config/db.js";
import router from "./backend/routes/auth.route.js";
import movieRoutes from "./backend/routes/movie.route.js";
import tvRoutes from "./backend/routes/tvroutes.js";
import { protectRoute } from "./backend/middleware/protectRoute.js";
import searchRoutes from "./backend/routes/searchRoutes.js";

// Initialize the Express app
const app = express();

// Middleware
app.use(express.json());
app.use(cookieParser());

// API Routes
app.use("/api/v1/auth", router);
app.use("/api/v1/movie", protectRoute, movieRoutes);
app.use("/api/v1/tv", protectRoute, tvRoutes);
app.use("/api/v1/search", protectRoute, searchRoutes);

// Database connection
connectDB();

// Export the app for Vercel serverless deployment
export default app;
