import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import logMiddleware from "./middleware/logger.js";
import { env } from "./config/env.config.js";
import vehicleRoutes from "./routes/vehicles.routes.js";
import workshopRoutes from "./routes/workshop.routes.js";
import maintenanceRoutes from "./routes/maintenance.routes.js";
import authRoutes from "./routes/auth.routes.js";

const app = express();
const PORT = env.app_port || 3000;

// CORS liberado para dev — em produção troque origin pelo domínio do front
app.use(cors({ origin: true, credentials: true }));
app.use(express.json());
app.use(logMiddleware);

mongoose.connect(env.db_uri);
mongoose.connection.once("connected", () => console.log("MongoDB connection established."));
mongoose.connection.on("error", (e) => console.error("MongoDB connection error:", e));

app.get("/", (_req, res) => res.send("Hello World"));
app.get("/health", (_req, res) => res.json({ ok: true }));

app.use(authRoutes);
app.use(vehicleRoutes);
app.use(workshopRoutes);
app.use(maintenanceRoutes);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
