import { Request, Response } from "express"
import { Document, Types } from "mongoose"
import { PublishingCompany } from "../models/PublishingCompany"

class PublishingCompanyController {
  async index(req: Request, res: Response) {
    try {
      console.log("alo")

      const publishersMap: (Document<any, any, unknown> & {
        _id: Types.ObjectId
      })[] = []

      const publishers = await PublishingCompany.find({}).exec()

      publishers.forEach((publisher) => {
        publishersMap.push(publisher)
      })

      return res.status(200).send({
        publishers: publishersMap,
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

      let publisher = await PublishingCompany.findOne({
        name_lower: name.toLowerCase(),
      })

      if (!publisher) {
        publisher = await PublishingCompany.create({ name })
      }

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
