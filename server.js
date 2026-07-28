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
app.use(cors());
app.use(express.json());


// Test Route
app.get("/", (req, res) => {
    res.send("SkyVoyage Backend Running 🚀");
});


// User Routes
app.use("/api/users", userRoutes);


// Package Routes (baad ch enable karange)
 app.use("/api/packages", packageRoutes);


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});