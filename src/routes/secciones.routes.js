import {Router} from "express"
import {methods as seccionController} from "./../controllers/secciones.controllers"

const router = Router();

router.get('/', seccionController.getSecciones);

router.post('/', seccionController.postSecciones);
router.delete('/:Id_Seccion', seccionController.deleteSecciones);
router.put('/:Id_Seccion', seccionController.updateSecciones);

export default router 