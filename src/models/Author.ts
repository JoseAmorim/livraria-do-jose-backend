import mongoose, { Schema } from "mongoose"

const authorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  books: [{ type: Schema.Types.ObjectId, ref: "Book" }],
})

const Author = mongoose.model("Author", authorSchema)

export { Author }
