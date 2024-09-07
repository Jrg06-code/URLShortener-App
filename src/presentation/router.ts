import { Router } from "express";
import routerShort from "./short/router";
import { getShortByID } from "./short/controller";

const router=Router()

router.use('/api/short',routerShort)
router.use('/:id',getShortByID)

export default router

