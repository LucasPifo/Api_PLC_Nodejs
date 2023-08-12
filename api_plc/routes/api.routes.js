import { Router } from "express";
import * as apiRoutes from "../controllers/api.controller.js"
import { verifyPLC } from "../middlewares/authPlc.js";

const router = Router();

router.post('/insertProduct', verifyPLC, apiRoutes.insertProduct);

router.post('/insertDataLog', verifyPLC, apiRoutes.insertDataLog);

router.get('/getDataProducts', apiRoutes.getDataProducts);

router.get('/getDataLogs', apiRoutes.getDataLogs);

export default router;