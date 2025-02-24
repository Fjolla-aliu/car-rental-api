const { mongodb } = require("../rent");

const usersCollection = mongodb.db().collection("users");

const createUser = async (full_name, email, username, password) => {
  try {
    const existingUser = await usersCollection.findOne({
      $or: [{ email }, { username }],
    });

    if (existingUser) {
      throw new Error("Email or Username already exists");
    }

    const newUser = { full_name, email, username, password };
    const result = await usersCollection.insertOne(newUser);
    return result.ops[0];
  } catch (error) {
    throw error;
  }
};

const findUserByUsername = async (username) => {
  try {
    const user = await usersCollection.findOne({ username });
    return user;
  } catch (error) {
    throw error;
  }
};

const findUserById = async (userId) => {
  try {
    const user = await usersCollection.findOne({
      _id: new mongodb.ObjectId(userId),
    });
    return user;
  } catch (error) {
    throw error;
  }
};

module.exports = { createUser, findUserByUsername, findUserById };
