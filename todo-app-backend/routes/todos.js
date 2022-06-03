const express = require("express");
const Todo = require("../models/todo");
const router = express.Router();

router.get("/", async (req, res) => {
  const todos = await Todo.find();
  res.send(todos);
});

router.post("/addtodo", async (req, res) => {
  try {
    const todo = await new Todo(req.body);

    todo.save();
    res.send(todo);
  } catch (error) {
    console.log(error);
  }
});

router.delete("/deletetodo/:id", async (req, res) => {
  try {
    const result = await Todo.findByIdAndDelete(req.params.id);
    res.json(result);
  } catch (error) {
    console.log(error);
  }
});
module.exports = router;
