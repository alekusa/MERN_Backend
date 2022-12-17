import { Router } from "express";
import { getImg } from "../controllers/img.controller.js";
const router = Router();

router.get("/img", getImg);

export default router;
