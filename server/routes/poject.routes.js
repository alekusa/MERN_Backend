import { Router } from "express";
import {
  createProject,
  deleteProject,
  getProject,
  getProjects,
  updateProject,
  getProjectTask,
} from "../controllers/Project.controller.js";
const router = Router();

router.get("/project", getProjects);
router.post("/project", createProject);
router.put("/project/:id", updateProject);
router.delete("/project/:id", deleteProject);
router.get("/project/:id", getProject);
router.get("/project/:id/task", getProjectTask);
export default router;
