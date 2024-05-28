import { Sequelize } from "sequelize-typescript";

export const sequelize = new Sequelize({
  database: "task_proyect",
  dialect: "postgres",
  username: "task_proyect_user",
  password: "yOuDOfKSO4PXgv5S1AQ4PTFZ9etQztdI",
  host: "dpg-cpakv5n109ks73apvecg-a.oregon-postgres.render.com",
  logging: false,
  models: [],
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false, // Ajusta esto según sea necesario; puede ser true si usas un certificado autofirmado
    },
  },
});
async function connectionDB() {
  try {
    await sequelize.sync();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}
export default connectionDB;
