import { Router} from "express";
import { methods as descripcionController } from "./../controllers/descripciones.controllers";

const router = Router();

router.get('/', descripcionController.getDescripciones);
router.post('/', descripcionController.addDescripciones);
router.delete('/:Id_Descripcion', descripcionController.deleteDescripciones);
router.put('/:Id_Descripcion',descripcionController.updateDescripciones);

export default router;