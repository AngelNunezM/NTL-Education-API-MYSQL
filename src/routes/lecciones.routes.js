import { Router } from "express";
import { methods as leccionesController } from "./../controllers/lecciones.controllers";

const router = Router();

router.get('/', leccionesController.getLecciones);
router.post('/', leccionesController.addLecciones);
router.delete('/:Id_Lecciones', leccionesController.deleteLecciones);
router.put('/:Id_Lecciones',leccionesController.updateLecciones);

export default router;