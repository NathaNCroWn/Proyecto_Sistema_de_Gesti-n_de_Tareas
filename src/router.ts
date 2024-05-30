import { Router } from "express";
import {
  deleteTask,
  getTaskByUser,
  getTasks,
  postTask,
  updateTask,
} from "./controllers/TaskControllers";
import { deleteUser, getUserById, getUserTask, getUsers, postUser } from "./controllers/UserControllers";

const router = Router();

//rutas de Task
router.get("/task", getTasks);
router.get("/task/:id", getTaskByUser);
router.post("/task", postTask);
router.put("/task/:id", updateTask);
router.delete("/task/:id", deleteTask);

//rutas de usuario
router.get("/user", getUsers);
router.get("/user/:id", getUserById);
router.post("/user", postUser);
router.delete("/user/:id", deleteUser);


//ruta consulta general
router.get("/user/:id/task",getUserTask)

export default router;
