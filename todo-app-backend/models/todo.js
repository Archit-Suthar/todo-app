const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  todo: String,
  tag: String,
  date: String
});

module.exports = mongoose.model("todo", todoSchema);
