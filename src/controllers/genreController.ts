import { Request, Response } from "express"
import { Genre } from "../models/Genre"
import { User } from "../models/User"

class GenreController {
  async index(req: Request, res: Response) {
    try {
      const genres = await Genre.find({}).exec()

      return res.status(200).send({
        genres,
      })
    } catch (err) {
      console.log(err)

      return res.status(500).send({
        err,
      })
    }
  }
}

const genreController = new GenreController()

export { genreController }
