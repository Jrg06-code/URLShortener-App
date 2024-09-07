import { Router } from "express";
import { createShort } from "./controller";
import { schemaValidationMiddleware } from "../middlewares/schema.validator.middleware";
import { createShortSchema } from "../../config/schemas/short.schemas";

const router = Router();

router.post('/',[schemaValidationMiddleware(createShortSchema)], createShort)






export default router