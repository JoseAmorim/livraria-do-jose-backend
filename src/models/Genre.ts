import mongoose, { Schema } from "mongoose"

const genreSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
})

const Genre = mongoose.model("Genre", genreSchema)

export { Genre }
