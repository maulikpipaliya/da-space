import { setUpExpressServer, connectToMongoDB } from "./config/index.js"
import { setUpRoutes } from "./api/routes/index.js"
import { envConfig } from "./config/globals.js"
import bodyParser from "body-parser"
import path from "path"
import express from "express"
import dotenv from "dotenv"
import { errorHandler, notFound } from "./api/middlewares/error.middleware.js"

connectToMongoDB(envConfig.dbURL)

const app = express()

dotenv.config()

// app.use(cors({ origin: envConfig.corsOrigin }))

//Middleware

app.use(express.json())

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

setUpRoutes(app)

const __dirname = path.resolve()
console.log("__dirname")
console.log(__dirname)

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "/frontend/build")))

    app.get("*", (req, res) =>
        res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"))
    )
} else {
    app.get("/", (req, res) => {
        res.send("API is running....")
    })
}

app.listen(envConfig.port, () => {
    console.log(`server started at ${envConfig.port}`)
})

app.use(notFound)
app.use(errorHandler)
