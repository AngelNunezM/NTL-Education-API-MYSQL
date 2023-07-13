import {Router} from "express"
import {methods as calificacionController} from "../controllers/calificaciones.controllers"

const router = Router();

router.get('/', calificacionController.getCalificaciones);
router.post('/', calificacionController.postCalificaciones);
router.delete('/:Id_Calificacion', calificacionController.deleteCalificaciones);
router.put('/:Id_Calificacion', calificacionController.updateCalificaciones);

export default router 