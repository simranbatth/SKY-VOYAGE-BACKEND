require("dotenv").config();

const express = require("express");
const cors = require("cors");
const connectDB = require("./db/db");

const userRoutes = require("./routes/userRoutes");
const packageRoutes = require("./routes/packageRoutes");

const app = express();

// Connect Database
connectDB();

// Middleware
app.use(cors({
  origin: "https://sky-voyage-frontend.vercel.app",
  credentials: true,
}));

app.use(express.json());

// Test Route
app.get("/", (req, res) => {
  res.send("SkyVoyage Backend Running 🚀");
});

// Routes
app.use("/api/users", userRoutes);
app.use("/api/packages", packageRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});