import { setUpExpressServer, connectToMongoDB } from "./config/index.js";
import { setUpRoutes } from "./api/routes/index.js";
import { envConfig } from "./config/globals.js";

const app = setUpExpressServer();

connectToMongoDB(envConfig.dbURL);

setUpRoutes(app);
