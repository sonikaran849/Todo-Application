const express = require("express");
const { getAllTasks, updateTask, createNewTask, deleteTask } = require("../controllers/todo");
const router = express.Router();

// Get all the tasks
router.get("/todos", getAllTasks);

// Create a new Task
router.post("/todos", createNewTask);

// Update a Task
router.put("/todos/:id", updateTask);

// Delete a Task
router.delete("/todos/:id", deleteTask);

module.exports = router;