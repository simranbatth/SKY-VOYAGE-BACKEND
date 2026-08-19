require("dotenv").config();

const express = require("express");
const cors = require("cors");

const connectDB = require("./db/db");

const packageRoutes = require("./routes/packageRoutes");
const userRoutes = require("./routes/userRoutes");

const app = express();

app.use(cors({
  origin: [
    "https://sky-voyage-frontend.vercel.app",
    "http://localhost:5173"
  ],
  credentials: true
}));

app.use(express.json());

app.get("/", (req, res) => {
  res.send("SkyVoyage Backend Running 🚀");
});

app.use("/api/packages", async (req, res, next) => {
  try {
    await connectDB();
    next();
  } catch (error) {
    res.status(500).json({
      message: "Database connection failed",
      error: error.message
    });
  }
});

app.use("/api/packages", packageRoutes);

// 👇 USERS / AUTH ROUTES
app.use("/api/users", async (req, res, next) => {
  try {
    await connectDB();
    next();
  } catch (error) {
    res.status(500).json({
      message: "Database connection failed",
      error: error.message
    });
  }
});

app.use("/api/users", userRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;