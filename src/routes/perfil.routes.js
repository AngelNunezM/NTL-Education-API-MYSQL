import { Router } from "express";
import { methods as perfilController } from "./../controllers/perfil.controllers";

const router = Router();

router.get("/:Id_Perfil", perfilController.getPerfil);
router.put("/:Id_Perfil", perfilController.updatePerfil);

export default router;