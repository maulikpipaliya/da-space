import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import { envConfig } from "../globals.js"
import path from "path"

export const setUpExpressServer = () => {
    const app = express()

    dotenv.config()

    app.use(cors({ origin: envConfig.corsOrigin }))

    //Middleware

    app.use(express.json())

    app.listen(envConfig.port, () => {
        console.log(`server started at ${envConfig.port}`)
    })

    const __dirname = path.resolve()
    console.log("__dirname")
    console.log(__dirname)

    if (process.env.NODE_ENV === "production") {
        app.use(express.static(path.join(__dirname, "/frontend/build")))

        app.get("*", (req, res) =>
            res.sendFile(
                path.resolve(__dirname, "frontend", "build", "index.html")
            )
        )
    } else {
        app.get("/", (req, res) => {
            res.send("API is running....")
        })
    }

    return app
}
