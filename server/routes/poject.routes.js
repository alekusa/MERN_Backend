import { Router } from "express";
import {
  crerateProject,
  deleteProject,
  getProjects,
  updateProject,
} from "../controllers/Project.controller.js";
const router = Router();

router.get("/project", getProjects);
router.post("/project", crerateProject);
router.put("/project/:id", updateProject);
router.delete("/project/:id", deleteProject);
router.get("/project/:id");

export default router;
