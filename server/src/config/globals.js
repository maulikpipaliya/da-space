//application level configuration
import dotenv from "dotenv";

dotenv.config();

export const envConfig = {
    port: process.env.SERVER_PORT,
    serverURL: process.env.SERVER_URL,
    dbURL: process.env.MONGO_URI,
    corsOrigin: process.env.CLIENT_URL,
};
