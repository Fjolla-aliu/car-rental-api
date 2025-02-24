require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { connectDB } = require("./rent");
const seedCars = require("./seed/cars");

const app = express();
app.use(express.json());
app.use(cors({ origin: "*" }));

console.log("Mongo URI from server.js:", process.env.MONGODB_URI);

connectDB();

seedCars();

// Importing Routes
const authRoutes = require("./routes/authRoutes");
const carRoutes = require("./routes/carRoutes");

app.use("/api/auth", authRoutes);
app.use("/api/cars", carRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
