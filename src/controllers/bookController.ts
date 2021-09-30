import { Request, Response } from "express"
import { Document, Types } from "mongoose"
import { Author } from "../models/Author"
import { Book } from "../models/Book"
import { Genre } from "../models/Genre"
import { PublishingCompany } from "../models/PublishingCompany"
import { User } from "../models/User"

class BookController {
  async index(req: Request, res: Response) {
    try {
      console.log("alo")

      const booksMap: (Document<any, any, unknown> & {
        _id: Types.ObjectId
      })[] = []

      const books = await Book.find({})
        .populate("publisher")
        .populate("author")
        .populate("genre")
        .exec()

      books.forEach((book) => {
        booksMap.push(book)
      })

      return res.status(200).send({
        books: booksMap,
      })
    } catch (err) {
      return res.status(500).send({
        err,
      })
    }
  }

  async create(req: Request, res: Response) {
    try {
      const {
        title,
        synopsis,
        pages,
        author_id,
        publisher_id,
        user_id,
        genre_id,
      } = req.body

      const author = await Author.findById(author_id).exec()

      const publisher = await PublishingCompany.findById(publisher_id).exec()

      const genre = await Genre.findById(genre_id).exec()

      const book = await Book.create({
        title,
        synopsis,
        pages,
        author,
        publisher,
        genre,
      })

      await User.findByIdAndUpdate(user_id, {
        $push: { books: book },
      }).exec()

      await author
        ?.update({
          $push: { books: book },
        })
        .exec()

      await publisher
        ?.update({
          $push: { books: book },
        })
        .exec()

      return res.status(200).send({
        book,
      })
    } catch (err) {
      console.log(err)

      return res.status(500).send({
        err,
      })
    }
  }
}

const bookController = new BookController()

export { bookController }
