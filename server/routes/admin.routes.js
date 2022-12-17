import { Router } from "express";
const router = Router();
import { adminLog, getAdmin } from "../controllers/admin.controller.js";

router.get("/admin", getAdmin);
router.get("/adminlog", adminLog);

export default router;
