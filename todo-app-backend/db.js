const mongoose = require("mongoose");

const connectToMongo = async () => {
  try {
    await mongoose
      .connect("mongodb://localhost/todo-app", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => console.log("Successfully connected to Mongo"));
  } catch (error) {
    console.log("Error : can't connect : " + error);
  }
};

module.exports = connectToMongo;
