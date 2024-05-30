import { Request, Response } from "express";
import Task from "../models/Task";
import User from "../models/User";

export const getTasks = async (req: Request, res: Response) => {
  try {
    const task = await Task.findAll();
    return res.status(200).json(task);
  } catch (error) {
    return res.status(500).json({ mensaje: "hubo un error", error: error });
  }
};

export const getTaskByUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const task = await Task.findByPk(id);
    if (!task)
      return res.status(404).json({ mensaje: "No se encontro las tarea" });
    return res.status(200).json(task);
  } catch (error) {
    return res.status(500).json({ mensaje: "hubo un error ", error: error });
  }
};

export const postTask = async (req: Request, res: Response) => {
  try {
    await Task.create(req.body);
    return res.status(201).json({ mensaje: "Tarea Creada. " });
  } catch (error) {
    return res.status(400).json({ mensaje: "hubo un error", error: error });
  }
};

export const updateTask = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const userId = await User.findByPk(req.body.userId);
    if (!userId) {
      return res.status(404).json({ mensaje: "Usuario no existe" });
    }
    const task = await Task.findOne({ where: { id } });
    if (!task) {
      return res.status(404).json({ mensaje: "La tarea no existe" });
    }
    task.update(req.body);
    return res.status(200).json({ mensaje: "Tarea Actualizada. " });
  } catch (error) {
    return res.status(500).json({ mensaje: "hubo un error ", error: error });
  }
};

export const deleteTask = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await Task.destroy({
      where: { id },
    });
    return res.status(200).json({ mensaje: "tarea borrada" });
  } catch (error) {
    return res.status(500).json({ mensaje: "hubo un error ", error: error });
  }
};
