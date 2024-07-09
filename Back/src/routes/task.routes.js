import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.js";
import { getTerrenos, getTerreno, createTerreno, updateTerreno, deleteTerreno } from "../controllers/terrenos.controller.js";
import { validateSchema } from "../middlewares/validator.middleware.js";
import { terrenoSchema } from "../schemas/terreno.schema.js";

const router = Router()

router.get('/terrenos', getTerrenos)
router.get('/terrenos/:id', authRequired, getTerreno)
router.post('/terrenos', authRequired, validateSchema(terrenoSchema), createTerreno)
router.delete('/terrenos/:id', authRequired, deleteTerreno)
router.put('/terrenos/:id', authRequired, updateTerreno)

export default router