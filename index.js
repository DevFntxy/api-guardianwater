import express from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";


import { connectDB} from "./src/config/database.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

//Conexion a la base de datos
connectDB();



app.get("/", (req, res) => {
  res.send("Hola soy el inicio");
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
