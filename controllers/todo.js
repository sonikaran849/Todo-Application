const Todo = require("../models/todo");

async function getAllTasks(req,res){
    try {
        const todos = await Todo.find();
        res.json(todos);
    } catch (error) {
        res.status(500).json({ error: "Error fetching todos" });
    }
}

async function createNewTask(req,res){
    try {
        const title = req.body.title;
        const newTask = new Todo({
            title
        });
        await newTask.save();
        res.status(201).json(newTask);
    } catch (error) {
        res.status(500).json({error: "Error creating Todo"});
    }
}

async function updateTask(req,res){
    try {
        const updatedTodo = await Todo.findByIdAndUpdate(
          req.params.id,
          { completed: req.body.completed },
          { new: true }
        );
        res.json(updatedTodo);
    } catch (error) {
        res.status(500).json({ error: "Error updating todo" });
    }
}

async function deleteTask(req,res){
    try {
        await Todo.findByIdAndDelete(req.params.id);
        res.json({ message: "Todo deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: "Error deleting todo" });
    }
}

module.exports = {
    getAllTasks,
    updateTask,
    deleteTask,
    createNewTask,
};