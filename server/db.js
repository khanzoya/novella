import mongoose from 'mongoose';
import { Books } from './models/Books.js'; // Adjust the path as needed

import dotenv from 'dotenv'

dotenv.config()

// const updatePdfPaths = async () => {
//    try {
//     const books = await Books.find();
//     for (const book of books) {
//       const updatedPdfPath = book.pdfPath.replace(/\\/g, '/'); // Replace backslashes with forward slashes
//       book.pdfPath = updatedPdfPath;
//       await book.save();
//     }
//     console.log('PDF paths updated successfully.');
//   } catch (error) {
//     console.error('Error updating PDF paths:', error);
//   }
// };


const Connection = async () => {
  try {
    await mongoose.connect(process.env.URL);
    console.log("Connected to MongoDB");
    // Call the function to update PDF paths
    // await updatePdfPaths();
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
  }
};


Connection()


