import { Router } from "express";
import { createShort, getShortByID } from "./controller";
import { schemaValidationMiddleware } from "../middlewares/schema.validator.middleware";
import { createShortSchema } from "../../config/schemas/short.schemas";

const router = Router();

router.post('/',[schemaValidationMiddleware(createShortSchema)], createShort)


router.get('/:id', getShortByID)



export default router