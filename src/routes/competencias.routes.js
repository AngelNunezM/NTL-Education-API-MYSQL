import { Router } from "express";
import { methods as competenciaController } from "./../controllers/competencias.controllers";

const router = Router();

router.get("/", competenciaController.getCompetencias);
router.post('/', competenciaController.postCompetencias);
router.delete('/:Id_Competencia', competenciaController.deleteCompetencias);
router.put('/:Id_Competencia', competenciaController.updateCompetencias);

export default router;