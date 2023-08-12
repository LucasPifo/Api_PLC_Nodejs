import express from "express";
import cors from "cors";
import morgan from "morgan";
import sendMessage from "./libs/sendMessage.js";
// Rutas
import apiRoutes from "./routes/api.routes.js";

const app = express();

// Middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Ruta inicial
app.get('/', (req, res) => {
    res.json(sendMessage(false, 'Api en node js para consumir desde PLC S7 1200'))
});

// Rutas
app.use(apiRoutes);

// Rutas no encontradas
app.use((req, res, next) => {
    res.status(404).json(sendMessage(true, "Ruta no encontrada"));
});

export default app;