import { Router } from "express";
import {
  createProject,
  deleteProject,
  getProject,
  getProjects,
  updateProject,
} from "../controllers/Project.controller.js";
const router = Router();

router.get("/project", getProjects);
router.post("/project", createProject);
router.put("/project/:id", updateProject);
router.delete("/project/:id", deleteProject);
router.get("/project/:id", getProject);

export default router;
