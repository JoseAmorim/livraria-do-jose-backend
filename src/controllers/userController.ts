import { Request, Response } from "express"
import { User } from "../models/User"

class UserController {
  async create(req: Request, res: Response) {
    try {
      const { email, name } = req.body

      console.log(email)

      const createdUser = await User.findOne({ email })

      if (createdUser) {
        return res.status(400).send({
          erro: "Usuário já cadastrado",
        })
      }

      const user = await User.create({ email, name })

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

const userController = new UserController()

export { userController }
