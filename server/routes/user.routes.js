import { Router } from "express";
const router = Router();

router.get("/", (req, res) => res.send("Pagina de Inicio"));
router.get("/Usuarios", (req, res) => res.send([]));

export default router;
