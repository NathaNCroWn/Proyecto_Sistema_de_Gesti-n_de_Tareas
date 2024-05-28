import express from "express";
import router from "./router";

const server = express();

server.use("/api/tareas", router);
server.use(express.json());

export default server;
