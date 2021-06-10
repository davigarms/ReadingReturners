import connectDB from '@/utils/mongodb'
import booksModel from '@/models/books'

const handler = async (req, res) => {
  if (req.method === 'GET') {
    const books = await booksModel.find()
    res.status(200).send(books)
  }
}

export default connectDB(handler)
