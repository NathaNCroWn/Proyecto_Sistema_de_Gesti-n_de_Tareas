import { Router } from "express";
import { getTask } from "./controllers/TaskControllers";

const router = Router();
router.get("/", getTask);

export default router;
