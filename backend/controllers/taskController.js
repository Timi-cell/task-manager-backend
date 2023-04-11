const Task = require("../models/taskModel");

// create a task
const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// get all tasks
const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// get task
const getTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findById(id);
    if (!task) return res.status(404).json(`No task with id: ${id} found!`);
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// delete task
const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findByIdAndDelete(id);
    if (!task) return res.status(404).json(`No task with id: ${id} found!`);
    res.status(200).send("Task Deleted!");
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// update task
// With PUT method, you have to specify all required fields in the model but with PATCH method, you can specify some of the fields you want to update
const updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findByIdAndUpdate({ _id: id, }, req.body, { new: true, runValidators: true });
    if (!task) return res.status(404).json(`No task with id: ${id} found!`);
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// exports
module.exports = {
  createTask,
  getTasks,
  getTask,
  deleteTask,
  updateTask,
};
