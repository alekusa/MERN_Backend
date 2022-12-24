import { Router } from "express";
import {
  createTask,
  deleteTask,
  getTask,
  getTasks,
  updateTask,
} from "../controllers/task.controller.js";
const router = Router();

router.get("/task", getTasks);
router.post("/task", createTask);
router.delete("/task/:id", deleteTask);
router.get("/task/:id", getTask);
router.put("/task/:id", updateTask);

export default router;
