import { Request, Response } from "express";

export const getTask=(req: Request, res:Response) => {
    res.send('taskss')
}