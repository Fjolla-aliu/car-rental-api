require("dotenv").config();
const { mongodb } = require("../rent");

async function seedCars() {
  try {
    await mongodb.connect();

    const carsCollection = mongodb.db().collection("cars");

    const carCount = await carsCollection.countDocuments();

    if (carCount > 0) {
      console.log("Cars already exist in the database. Skipping seeding.");
      return;
    }

    // Data to seed if the collection is empty
    const carsData = [
      {
        name: "Golf mk8",
        price_per_day: 50.0,
        year: 2015,
        color: "black",
        steering_type: "automatic",
        number_of_seats: 5,
      },

      {
        name: "BMW 3 Series",
        price_per_day: 75.0,
        year: 2020,
        color: "white",
        steering_type: "manual",
        number_of_seats: 4,
      },
      {
        name: "Audi A4",
        price_per_day: 85.0,
        year: 2018,
        color: "blue",
        steering_type: "automatic",
        number_of_seats: 5,
      },
      {
        name: "Tesla Model 3",
        price_per_day: 120.0,
        year: 2022,
        color: "red",
        steering_type: "automatic",
        number_of_seats: 5,
      },
      {
        name: "Ford Fiesta",
        price_per_day: 35.0,
        year: 2016,
        color: "green",
        steering_type: "manual",
        number_of_seats: 4,
      },
    ];

    // Insert multiple cars into the "cars" collection
    const result = await carsCollection.insertMany(carsData);
    console.log(`Inserted ${result.insertedCount} cars into the database`);

    await mongodb.close();
    console.log("MongoDB connection closed");
  } catch (error) {
    console.error("Error seeding cars:", error.message);
  }
}

module.exports = seedCars;
