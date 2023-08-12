import { connection } from "../db.js";
import sendMessage from "../libs/sendMessage.js";

export const insertProduct = async (req, res) => {
    try{
        const { noDevice } = req.body;
        const [rows] = await connection.query(`INSERT INTO products (no_device) VALUES ('${noDevice}')`);
        res.status(201).json(sendMessage(false, 'Producto insertado', { id: rows.insertId }));
    }catch (error) {
        return res.status(500).json(sendMessage(true, 'Error al insertar el producto'));
    }
};

export const insertDataLog = async (req, res) => {
    try{
        const { noDevice, event } = req.body;
        const [rows] = await connection.query(`INSERT INTO datalogs (no_device, event) VALUES ('${noDevice}', '${event}')`);
        res.status(201).json(sendMessage(false, `Evento ${event} agregado`, { id: rows.insertId }));
    }catch (error) {
        return res.status(500).json(sendMessage(true, 'Error al insertar el evento'));
    }
};

export const getDataProducts = async (req, res) => {
    try{
        const [rows] = await connection.query("SELECT * FROM products");
        return res.json(sendMessage(false, 'Productos obtenidos', rows));
    }catch (error) {
        console.log(error.message)
        return res.status(500).json(sendMessage(true, 'Error al obtener productos'));
    }
};

export const getDataLogs = async (req, res) => {
    try{
        const [rows] = await connection.query("SELECT * FROM datalogs");
        return res.json(sendMessage(false, 'Logs obtenidos', rows));
    }catch (error) {
        console.log(error.message)
        return res.status(500).json(sendMessage(true, 'Error al obtener logs'));
    }
};