import { Request, Response } from "express"
import { Author } from "../models/Author"

class AuthorController {
  async index(req: Request, res: Response) {
    try {
      console.log("alo")

      const authors = Author.find({}).exec()

      return res.status(200).send({
        authors,
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

      console.log(name)

      const author = await Author.create({ name })

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
