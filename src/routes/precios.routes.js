import { Router } from "express";
import { methods as precioController} from "./../controllers/precios.controllers";

const router = Router();

router.get('/', precioController.getPrecios);
router.post('/', precioController.postPrecios);
router.delete('/:Id_Precio', precioController.deletePrecios);
router.put('/:Id_Precio', precioController.updatePrecios);

export default router;