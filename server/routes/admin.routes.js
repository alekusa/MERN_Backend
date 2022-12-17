import { Router } from "express";
const router = Router();

router.get("/admin", (req, res) => res.send("Pagina de Administracion"));
router.get("/adminlog", (req, res) => res.send("Admin LOGIN"));

export default router;
