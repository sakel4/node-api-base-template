import express from "express";
import { baseRouteController } from "@/presenter/controllers/base/controllers";

const router = express.Router();

router.get("/", baseRouteController);

export default router;
