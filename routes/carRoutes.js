const express = require("express");
const { addCar, getCars } = require("../models/Car");
const authenticateToken = require("../middleware/auth");

const router = express.Router();

// Get Rental Cars
router.get("/rental-cars", async (req, res) => {
  try {
    const cars = await getCars(req.query);
    res.json(cars);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching rental cars", error: error.message });
  }
});

// Add new car
router.post("/add-rental-car", authenticateToken, async (req, res) => {
  try {
    const { name, price_per_day, year, color, steering_type, number_of_seats } =
      req.body;
    const newCar = await addCar(
      name,
      price_per_day,
      year,
      color,
      steering_type,
      number_of_seats
    );
    res.status(201).json({ message: "Car added successfully", car: newCar });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error adding a new car", error: error.message });
  }
});

module.exports = router;
