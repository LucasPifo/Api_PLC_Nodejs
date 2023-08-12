import { connection } from "../db.js";
import sendMessage from '../libs/sendMessage.js';

export const verifyPLC = async (req, res, next) => {
    try{
        const { noDevice } = req.body;
        const [rows] = await connection.query(`SELECT * FROM devices WHERE no_device = '${noDevice}'`);
        if(rows.length <= 0) return res.status(404).json(sendMessage(true, 'Dispositivo no encontrado, por favor dar de alta dispositivo'));
        next();
    }catch(error){
        return res.status(500).json(sendMessage(true));
    }
}