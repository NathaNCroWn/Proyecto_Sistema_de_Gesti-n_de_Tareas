import { Request, Response } from "express";
import User from "../models/User";
import Task from "../models/Task";
import { userInfo } from "os";

export const getUserById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const user = await User.findByPk(id);
    if (!user) return res.status(404).json({ mensaje: "Usuario no existe" });
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({ mensaje: "hubo un error", error: error });
  }
};

export const getUsers = async (req: Request, res: Response) => {
  try {
    const user = await User.findAll();
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({ mensaje: "hubo un error", error: error });
  }
};

export const postUser = async (req: Request, res: Response) => {
  try {
    console.log(req.body);
    await User.create(req.body);
    return res.status(201).json({ mensaje: "Useuario Creado." });
  } catch (error) {
    return res.status(400).json({ mensaje: "hubo un error", error: error });
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await User.destroy({
      where: { id },
    });
    return res.status(200).json({ mensaje: "Usuario eliminado" });
  } catch (error) {
    return res.status(500).json({ mensaje: "hubo un error", error: error });
  }
};

export const getUserTask = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const user = await User.findByPk(id)
    if (!user){
      return res.status(404).json({ mensaje: "Usuario no existe" });
    }
    console.log(id);
    const task = await Task.findAll({
      where: { userId: id },
    });
    if (!task) return res.status(404).json({ mensaje: "Usuario no existe" });
    return res.status(200).json({ mensaje: "Usuario encontrado", task });
  } catch (error) {
    return res.status(500).json({ mensaje: "hubo un error", error: error });
  }
};
