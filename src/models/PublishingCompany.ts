import mongoose, { Schema } from "mongoose"

const publishingCompanySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  books: [
    {
      type: Schema.Types.ObjectId,
      ref: "Book",
    },
  ],
})

const PublishingCompany = mongoose.model(
  "PublishingCompany",
  publishingCompanySchema
)

export { PublishingCompany }
