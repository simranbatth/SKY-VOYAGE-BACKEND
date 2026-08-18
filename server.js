require("dotenv").config();

const express = require("express");
const cors = require("cors");

const connectDB = require("./db/db");
const packageRoutes = require("./routes/packageRoutes");

const app = express();

app.use(cors({
  origin: [
    "https://sky-voyage-frontend.vercel.app",
    "http://localhost:5173"
  ],
  credentials: true,
}));

app.use(express.json());

app.get("/", (req, res) => {
  res.send("SkyVoyage Backend Running 🚀");
});

// Connect MongoDB before package routes
app.use("/api/packages", async (req, res, next) => {
  try {
    await connectDB();
    next();
  } catch (error) {
    console.error("Database connection failed:", error.message);

    res.status(500).json({
      message: "Database connection failed",
    });
  }
});

app.use("/api/packages", packageRoutes);

module.exports = app;