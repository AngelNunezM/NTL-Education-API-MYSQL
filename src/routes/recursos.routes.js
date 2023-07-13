import { Router} from "express";
import { methods as recursosController } from "./../controllers/recursos.controllers";

const router = Router();

router.get('/', recursosController.getRecursos);
router.post('/', recursosController.postRecursos);
router.delete('/', recursosController.deleteRecursos);
router.put('/', recursosController.updateRecursos);

export default router;