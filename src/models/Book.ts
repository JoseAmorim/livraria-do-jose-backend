import mongoose, { Schema } from "mongoose"

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  synopsis: {
    type: String,
    required: true,
  },
  pages: {
    type: Number,
    required: true,
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: "Author",
    required: true,
  },
  publisher: {
    type: Schema.Types.ObjectId,
    ref: "PublishingCompany",
    required: true,
  },
  genre: {
    type: Schema.Types.ObjectId,
    ref: "Genre",
    required: true,
  },
})

const Book = mongoose.model("Book", bookSchema)

export { Book }
