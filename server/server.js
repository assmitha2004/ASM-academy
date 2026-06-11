import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import rateLimit from "express-rate-limit";

import connectDB from "./config/db.js";

import adminRoutes from "./routes/adminRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import countryRoutes from "./routes/countryRoutes.js";
import inquiryRoutes from "./routes/inquiryRoutes.js";

import createAdmin from "./utils/createAdmin.js";

// LOAD ENV
dotenv.config();

const app = express();

// SECURITY
app.use(helmet());

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
});

app.use(limiter);

// DATABASE
connectDB();

// CREATE ADMIN
createAdmin();

// MIDDLEWARE
app.use(cors());

app.use(express.json());

// ROUTES
app.use("/api/auth", authRoutes);

app.use("/api/inquiry", inquiryRoutes);

app.use("/api/admin", adminRoutes);

app.use("/api/country", countryRoutes);

// TEST ROUTE
app.get("/", (req, res) => {
  res.send("API Running...");
});

// PORT
const PORT =
  process.env.PORT || 5000;

// SERVER
app.listen(PORT, () => {
  console.log(
    `Server running on port ${PORT}`
  );
});