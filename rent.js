require("dotenv").config();
const { MongoClient } = require("mongodb");

const mongodb = new MongoClient(process.env.MONGODB_URI);

async function connectDB() {
  try {
    await mongodb.connect();
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Database Connection Error:", error.message);
    process.exit(1);
  }
}

module.exports = { mongodb, connectDB };
