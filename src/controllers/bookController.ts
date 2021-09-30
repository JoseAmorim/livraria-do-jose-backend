import { Request, Response } from "express"
import { Author } from "../models/Author"
import { Book } from "../models/Book"
import { PublishingCompany } from "../models/PublishingCompany"
import { User } from "../models/User"

class BookController {
  async index(req: Request, res: Response) {
    try {
      console.log("alo")

      const books = Book.find({}).exec()

      return res.status(200).send({
        books,
      })
    } catch (err) {
      return res.status(500).send({
        err,
      })
    }
  }

  async create(req: Request, res: Response) {
    try {
      const { title, synopsis, pages, author_id, publisher_id, user_id } =
        req.body

      const author = await Author.findById(author_id).exec()

      const publisher = await PublishingCompany.findById(publisher_id).exec()

      const book = await Book.create({
        title,
        synopsis,
        pages,
        author,
        publisher,
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
