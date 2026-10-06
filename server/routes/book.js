import express from 'express';
import { Books } from '../models/Books.js'
import { verifyAdmin } from './auth.js';
import upload from './multerConfig.js';

const router = express.Router();

router.post('/add', verifyAdmin, upload.single('pdfPath'), async (req, res) => {
  try {
    // Extract book details from request body
    const { name, author, genre_br, genre_nr, imageUrl } = req.body;

    // Get the path of the uploaded PDF file
    const pdfPath = req.file ? req.file.path : null;

    // Create a new book instance
    const newBook = new Books({ name, author, genre_br, genre_nr, imageUrl, pdfPath });

    // Save the book to the database
    await newBook.save();

    // Respond with success message
    return res.json({ message: 'Book added successfully', added: true });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Error in adding book' });
  }
});


// router.post('/add', verifyAdmin,  async (req, res) => {
//   try {
//     // Creating New Book
//     const {name , author , genre_br , genre_nr , imageUrl} = req.body;
//     //
  
//     //
//     const newBook = new Books({ name, author, genre_br, genre_nr, imageUrl  });  //, pdfPath
//     console.log(author)
//     await newBook.save();
//     return res.json({ message: 'Book added successfully' , added : true});
//   } catch (err) {
//     console.log("for checking it")
//     console.error(err);
//     res.status(500).json({ message: "Error in adding book"});
//   }
// });



router.get('/bookCollection' , async (req,res)=>{
try{
   const bookCollection = await Books.find()
   return res.json(bookCollection)

}catch(err){
 console.error(err);
    return res.status(500).json({ message: "Error fetching books" });
}

})

//fetching book
// router.get('/book/:id', async (req , res) => {
//   const id = req.params.id;
//   try{
//    const book = await Books.findById({_id: id})
//    return res.json(book)

// }catch(err){
//  console.error(err);
//     return res.status(500).json({ message: "Error fetching books" });
// }
// })

router.get('/book/:id', async (req , res) => {
  const id = req.params.id;
  try {
    const book = await Books.findById(id);
    if (!book) {
      return res.status(404).json({ message: 'Book not found' });
    }
    return res.json(book);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Error fetching book' });
  }
});



//updating book
router.put('/book/:id', async (req , res) => {
  const id = req.params.id;
  try{
    const { name, author, genre_br, genre_nr, imageUrl } = req.body; // Remove pdfPath
    const book = await Books.findByIdAndUpdate({_id: id}, { name, author, genre_br, genre_nr, imageUrl })
    return res.json({ updated: true, book });

}catch(err){
 console.error(err);
    return res.status(500).json({ message: "Error fetching books" });
}
})


//book deletion
router.delete('/book/:id' , async(req , res) =>{
   try{
     const id = req.params.id;
    const book = await Books.findByIdAndDelete({_id : id})
    return res.json({ deleted: true, book });
}catch(err){
 console.error(err);
    return res.status(500).json({ message: "Error fetching books" });
}
})

export { router as BookRouter };
