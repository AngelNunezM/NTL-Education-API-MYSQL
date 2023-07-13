import { Router } from "express";
import { methods as requerimientoController } from "./../controllers/requerimientos.controllers";

const router = Router();

router.get("/", requerimientoController.getRequerimientos);
router.post("/", requerimientoController.addRequerimientos);
router.delete("/:Id_Requerimientos", requerimientoController.deleteRequerimientos);
router.put("/:Id_Requerimientos", requerimientoController.updateRequerimientos);

export default router;