import { Router} from "express";
import { methods as plataformasController } from "./../controllers/plataformas.controllers";

const router = Router();

router.get('/', plataformasController.getPlataformas);
router.post('/', plataformasController.postPlataformas);
router.delete('/:Id_Plataforma', plataformasController.deletePlataformas);
router.put('/:Id_Plataforma',plataformasController.updatePlataformas);

export default router;