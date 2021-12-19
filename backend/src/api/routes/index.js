import commonRouter from "./common.router.js"
import authRouter from "./auth.router.js"
import { errorHandler, notFound } from "../middlewares/error.middleware.js"

export const setUpRoutes = (app) => {
    app.use("/", commonRouter)
    app.use("/api", commonRouter)
    app.use("/auth", authRouter)
}
