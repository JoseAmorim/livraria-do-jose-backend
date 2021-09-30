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
  currentPage: {
    type: Number,
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: "Author",
    required: true,
  },
  publisher: {
    type: Schema.Types.ObjectId,
    ref: "PublishingCompany",
  },
  genre: {
    type: Schema.Types.ObjectId,
    ref: "Genre",
  },
})

const Book = mongoose.model("Book", bookSchema)

export { Book }
