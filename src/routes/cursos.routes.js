import { Router } from "express";
import { methods as cursoController } from "./../controllers/cursos.controllers";

const router = Router();

router.get("/", cursoController.getCursos);
router.get("/:Id_Cursos", cursoController.getOneCursos);
router.post("/", cursoController.addCursos);
router.delete("/:Id_Cursos", cursoController.deleteCursos);
router.put("/:Id_Cursos", cursoController.updateCursos);

export default router;