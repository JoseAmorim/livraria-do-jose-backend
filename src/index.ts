import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import { routes } from "./routes"
require("dotenv").config()
// rest of the code remains same
const app = express()

mongoose.connect(process.env.MONGODB_URL!!, () => {
  console.log("connected to database")
})

const PORT = 8000

app.use(cors())
app.use(express.json())
app.use(routes)

app.get("/", (req, res) => res.send("Express + TypeScript Server"))

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`)
})
