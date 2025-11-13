const express = require("express");
const { adminOnly, protect } = require("../middlewares/authMiddleware");
const {
  getDashboardData,
  getUserDashboardData,
  getTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
  updateTaskStatus,
  updateTaskChecklist,
} = require("../controllers/taskController");

const router = express.Router();

// Task Management Routes
router.get("/dashboard-data", protect, getDashboardData); // Get dashboard data
router.get("/user-dashboard-data", protect, getUserDashboardData); // Get user-specific dashboard data
router.get("/", protect, getTasks); // Get all tasks (Admin: all, Member: assigned)
router.get("/:id", protect, getTaskById); // Get a specific task
router.post("/", protect, adminOnly, createTask); // Create a new task
router.put("/:id", protect, updateTask); // Update a task
router.delete("/:id", protect, adminOnly, deleteTask); // Delete a task
router.put("/:id/status", protect, updateTaskStatus); // Update task status
router.put("/:id/todo", protect, updateTaskChecklist); // Update task checklist

module.exports = router;
