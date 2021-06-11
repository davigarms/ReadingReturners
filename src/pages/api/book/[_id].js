import connectDB from '@/utils/mongodb'
import booksModel from '@/models/books'
import mongoose from 'mongoose'

const handler = async (req, res) => {
  const {
    query: { _id, name },
    method,
  } = req

  if (method === 'GET') {
    if (mongoose.Types.ObjectId.isValid(_id)) {
      const book = await booksModel.find({ _id })
      res.status(200).send(book)
    } else {
      res.status(404).send({ Message: 'Book not found' })
    }
  }
}

export default connectDB(handler)
