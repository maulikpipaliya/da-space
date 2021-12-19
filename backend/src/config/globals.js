//application level configuration
import dotenv from "dotenv";

dotenv.config();

export const envConfig = {
    port: process.env.PORT || 5000,
    dbURL: process.env.MONGO_URI,
    corsOrigin: process.env.CLIENT_URL,
};
