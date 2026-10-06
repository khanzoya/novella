import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
  name: {
    type: String,
    required: false,
  },
  author: {
    type: String,
    required: false,
  },
  genre_br: {
    type: String,
    required: false,
  },
  genre_nr: {
    type: String,
    required: false,
  },
  imageUrl: {
    type: String,
    required: false,
  },
  
 pdfPath: {
    type: String, // Store the path of the uploaded PDF file
    required: false,
  },
})


const BookModel = mongoose.model('Books', bookSchema);

export { BookModel as Books }

