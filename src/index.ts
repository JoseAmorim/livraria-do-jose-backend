import express from "express"
import mongoose from "mongoose"
import { Genre } from "./models/Genre"
import { routes } from "./routes"
// rest of the code remains same
const app = express()

mongoose.connect(
  "mongodb+srv://Joshep:joshepv@cluster0.7zbwn.mongodb.net/database?retryWrites=true&w=majority",
  () => {
    console.log("connected to database")
  }
)

const PORT = 8000

app.use(express.json())
app.use(routes)

app.get("/", (req, res) => res.send("Express + TypeScript Server"))

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`)
})
