import { Router } from "express";
import { methods as usuarioController } from "./../controllers/usuarios.controllers";

const router = Router();

router.get("/", usuarioController.getUsuarios);
router.post("/", usuarioController.addUsuarios);
router.delete("/:Id_Usuario", usuarioController.deleteUsuarios);
router.put("/:Id_Usuario", usuarioController.updateUsuarios);


export default router;