import { config } from "dotenv";
config();

export const DB_HOST = process.env.DB_HOST || "localhost";
export const DB_PORT = process.env.DB_PORT || 3306
export const DB_USER = process.env.DB_USER || "root"
export const DB_PASSWORD = process.env.DB_PASSWORD || ""
export const DB_NAME = process.env.DB_NAME || "plc"

export const SERVER_PORT = process.env.SERVER_PORT || 4000;