import express from "express";
import mongoose from "mongoose";
import logMiddleware from "./middleware/logger.js";
import { env } from "./config/env.config.js";
import vehicleRoutes from "./routes/vehicles.routes.js";
import workshopRoutes from "./routes/workshop.routes.js";
import maintenanceRoutes from "./routes/maintenance.routes.js";

const app = express();
const PORT = env.app_port || 3000;

// Middleware
app.use(logMiddleware);
app.use(express.json());

// Connect to MongoDB
mongoose.connect(env.db_uri);

mongoose.connection.once("connected", () => {
  console.log("MongoDB connection established.");
});

mongoose.connection.on("error", (error) => {
  console.error("MongoDB connection error:", error);
});

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use(vehicleRoutes);
app.use(workshopRoutes);
app.use(maintenanceRoutes);

app.listen(app_port, () => {
  console.log(`Server is running on port ${app_port}`);
});