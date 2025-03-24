const express = require("express");
const {
  createTask,
  getTasks,
  updateTask,
  deleteTask,
} = require("../controllers/taskController");
const authenticateUser = require("../middlewares/authMiddleware");
const { taskSchema, validateTask } = require("../validations/taskValidation");

const router = express.Router();

router.post("/", authenticateUser, validateTask(taskSchema), createTask);
router.put("/:id", authenticateUser, validateTask(taskSchema), updateTask);
router.get("/", authenticateUser, getTasks);
router.delete("/:id", authenticateUser, deleteTask);

module.exports = router;