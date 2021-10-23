import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { envConfig } from "../globals.js";

export const setUpExpressServer = () => {
    const app = express();

    dotenv.config();
    app.use(cors({ origin: envConfig.corsOrigin, credentials: true }));

    //Middleware

    app.use(express.json());

    app.listen(envConfig.port, () => {
        console.log(`server started at ${envConfig.serverURL}`);
    });
    return app;
};
