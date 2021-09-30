import { Request, Response } from "express"
import { Document, Types } from "mongoose"
import { Author } from "../models/Author"

class AuthorController {
  async index(req: Request, res: Response) {
    try {
      const authorsMap: (Document<any, any, unknown> & {
        _id: Types.ObjectId
      })[] = []

      const authors = await Author.find({}).exec()

      authors.forEach((author) => {
        authorsMap.push(author)
      })

      return res.status(200).send({
        authors: authorsMap,
      })
    } catch (err) {
      return res.status(500).send({
        err,
      })
    }
  }

  async create(req: Request, res: Response) {
    try {
      const { name } = req.body

      let author = await Author.findOne({
        name_lower: name.toLowerCase(),
      })

      if (!author) {
        author = await Author.create({ name })
      }

      return res.status(200).send({
        author,
      })
    } catch (err) {
      console.log(err)

      return res.status(500).send({
        err,
      })
    }
  }
}

const authorController = new AuthorController()

export { authorController }
