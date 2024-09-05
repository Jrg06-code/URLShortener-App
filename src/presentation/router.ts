import { Router } from "express";
import routerShort from "./short/router";

const router=Router()

router.use('/api/short',routerShort)

export default router

