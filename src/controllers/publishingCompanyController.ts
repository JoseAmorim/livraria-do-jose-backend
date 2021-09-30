import { Request, Response } from "express"
import { PublishingCompany } from "../models/PublishingCompany"

class PublishingCompanyController {
  async index(req: Request, res: Response) {
    try {
      console.log("alo")

      const publishers = PublishingCompany.find({}).exec()

      return res.status(200).send({
        publishers,
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

      const publisher = await PublishingCompany.create({ name })

      return res.status(200).send({
        publisher,
      })
    } catch (err) {
      console.log(err)

      return res.status(500).send({
        err,
      })
    }
  }
}

const publishingCompanyController = new PublishingCompanyController()

export { publishingCompanyController }
