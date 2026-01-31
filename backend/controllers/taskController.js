import Task from "../models/task.js";

// GET all tasks
export const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find().sort({ createdAt: -1 });
    return res.json(tasks);
  } catch (err) {
    return res.status(500).json({ message: "Server error" });
  }
};

// GET single task
export const getTaskById = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) return res.status(404).json({ message: "Task not found" });
    return res.json(task);
  } catch (err) {
    return res.status(400).json({ message: "Invalid task id" });
  }
};

// POST create task
export const createTask = async (req, res) => {
  try {
    const { title, description, status } = req.body;

    const task = await Task.create({
      title,
      description,
      status,
    });

    return res.status(201).json(task);
  } catch (err) {
    return res.status(400).json({
      message: err.message || "Invalid data",
    });
  }
};

// PUT update task
export const updateTask = async (req, res) => {
  try {
    const { title, description, status } = req.body;

    const updated = await Task.findByIdAndUpdate(
      req.params.id,
      { title, description, status },
      { new: true, runValidators: true },
    );

    if (!updated) return res.status(404).json({ message: "Task not found" });

    return res.json(updated);
  } catch (err) {
    return res.status(400).json({ message: err.message || "Invalid task id" });
  }
};

// DELETE task
export const deleteTask = async (req, res) => {
  try {
    const deleted = await Task.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: "Task not found" });
    return res.json({ message: "Task deleted successfully" });
  } catch (err) {
    return res.status(400).json({ message: "Invalid task id" });
  }
};
