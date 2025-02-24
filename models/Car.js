const { mongodb } = require("../rent");

const carsCollection = mongodb.db().collection("cars");
const addCar = async (
  name,
  price_per_day,
  year,
  color,
  steering_type,
  number_of_seats
) => {
  try {
    const newCar = {
      name,
      price_per_day,
      year,
      color,
      steering_type,
      number_of_seats,
    };
    const result = await carsCollection.insertOne(newCar);
    return result.ops[0];
  } catch (error) {
    throw error;
  }
};

const getCars = async (filters) => {
  try {
    const query = {};

    if (filters.year) query.year = parseInt(filters.year);
    if (filters.color) query.color = filters.color.toLowerCase();
    if (filters.steering_type)
      query.steering_type = filters.steering_type.toLowerCase();
    if (filters.number_of_seats)
      query.number_of_seats = parseInt(filters.number_of_seats);

    const cars = await carsCollection
      .find(query)
      .sort({ price_per_day: 1 })
      .toArray();
    return cars;
  } catch (error) {
    throw error;
  }
};

module.exports = { addCar, getCars };
