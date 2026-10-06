import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import  './db.js'
import { fileURLToPath } from 'url'; 
// import multer from 'multer'
import path from 'path'

import {AdminRouter} from './routes/auth.js'
import { UserRouter } from './routes/user.js'
import { BookRouter } from './routes/book.js'
import { Books } from './models/Books.js'
import { Admin } from './models/Admin.js';
import { User } from './models/User.js';

const __filename = fileURLToPath(import.meta.url); // Get the filename
const __dirname = path.dirname(__filename); // Get the directory name

const app = express()

app.use(express.json())
app.use(cors({ origin: 'http://localhost:5173', credentials: true }))
app.use(cookieParser())
dotenv.config()

// 
app.use('/upload', express.static(path.join(__dirname, 'upload')));


app.post('/upload' , (req, res)=>{
     console.log(req.file)
})





app.use('/auth', AdminRouter)
app.use('/user',UserRouter)
// app.use(fileUpload());
app.use('/book' , BookRouter)


app.get('/dashboard',async  (req, res) => {
  
  try{
   const user = await User.countDocuments()
   const admin = await Admin.countDocuments()
   const books = await Books.countDocuments()
   return res.json({ok: true ,user,books,admin} )

  }catch(err){
   return res.json(err)
  }
})
//


app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})


app.listen(process.env.PORT,()=>{
    console.log("Server is running");
})