import { Router } from "express";
import { methods as curso_UsuarioController } from "./../controllers/cursoUsuario.controllers";

const router = Router();

router.get("/", curso_UsuarioController.getCurso_Usuarios);
router.get("/:IdCurso", curso_UsuarioController.getCurso_UsuariosID);
router.post("/", curso_UsuarioController.postCurso_Usuarios);


export default router;