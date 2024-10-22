import express from "express";
import { baseRouteController } from "@/presenter/controllers/base/controllers";
import headerValidationMiddleware from "@/middlewares/headerValidation.middleware";

const router = express.Router();

router.get("/", headerValidationMiddleware, baseRouteController);

export default router;
