import express from "express";
import server from "./server";
import connectionDB from "./config/connection";


const appi = express();
appi.use(express.json());

const PORT = 3000;

//connectionDB();

server.listen(PORT, () => {
  console.log(`Prueba de api corriendo en le puerto ${PORT}`);
});
