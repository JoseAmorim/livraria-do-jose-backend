import { Request, Response } from "express"
import { User } from "../models/User"

class SessionController {
  async create(req: Request, res: Response) {
    try {
      const { email, name } = req.body

      console.log(email)

      const user = await User.findOne({ email })

      if (!user) {
        return res.status(404).send({
          erro: "Usuário não cadastrado",
        })
      }

      return res.status(200).send({
        user,
      })
    } catch (err) {
      console.log(err)

      return res.status(500).send({
        err,
      })
    }
  }
}

const sessionController = new SessionController()

export { sessionController }
