import app from "./app.js";
import { SERVER_PORT } from "./config.js";

app.listen(SERVER_PORT);

console.log(`Servidor corriendo en http://localhost:${SERVER_PORT}`);