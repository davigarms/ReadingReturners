import mongoose from 'mongoose'

const Schema = new mongoose.Schema({})

export default mongoose.models.Books || mongoose.model('Books', Schema)
