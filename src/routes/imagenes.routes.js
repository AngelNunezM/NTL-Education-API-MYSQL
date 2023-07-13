import { Router} from "express";
import { methods as imagenController } from "./../controllers/imagenes.controllers";

const router = Router();

router.get('/', imagenController.getImagenes);
router.post('/', imagenController.postImagenes);
router.delete('/:Id_Imagen', imagenController.deleteImagenes);
router.put('/:Id_Imagen',imagenController.updateImagenes);

export default router;