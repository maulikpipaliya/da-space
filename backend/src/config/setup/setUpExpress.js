import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import { envConfig } from "../globals.js"

export const setUpExpressServer = () => {
    const app = express()

    dotenv.config()

    app.use(cors({ origin: envConfig.corsOrigin }))

    //Middleware

    app.use(express.json())

    app.listen(envConfig.port, () => {
        console.log(`server started at ${envConfig.port}`)
    })

    if (process.env.NODE_ENV === "production") {
        app.use(express.static(path.join(__dirname, "/client/build")))
        app.get("*", (req, res) =>
            res.sendFile(path.resolve(__dirname, "/client/build/index.html"))
        )
    }

    return app
}
