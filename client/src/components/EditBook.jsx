import React, { useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom"
import '../css/Register.css'
import axios from 'axios';

const EditBook = () => {
  const [name, setName] = useState('');
  const [author, setAuthor] = useState('');
  const [genre_br, setGenrebr] = useState('');
  const [genre_nr, setGenrenr] = useState('');
  const [imageUrl, setImageUrl] = useState(''); 
  // const [pdfPath, setPdf] = useState('');

const navigate = useNavigate()

const {id} = useParams()

useEffect(() => {
  console.log("Fetching book with ID:", id);
    axios.get('http://localhost:3001/book/book/'+id)
    .then(res => {
        console.log(res)
        setName(res.data.name)
        setAuthor(res.data.author)
        setGenrebr(res.data.genre_br)
        setGenrenr(res.data.genre_nr)
        setImageUrl(res.data.imageUrl)
        // setPdf(res.data.pdfPath)
    })
     .catch(err => console.log(err))
}, [])
    

 const handleSubmit = async (e) => {
    e.preventDefault();
    axios.put('http://localhost:3001/book/book/'+id, {name , author , genre_br , genre_nr , imageUrl}) //pdfPath
      .then(res => {
        if(res.data.updated){
          navigate('/bookCollection')
        }
        else{
          console.log(res)
        }
      }) 
      .catch(err => console.log(err))
  };
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const res = await axios.put('http://localhost:3001/book/book/'+id, {name , author , genre_br , genre_nr , imageUrl});  //pdfPath
  //     if(res.data.added){
  //       navigate('/bookCollection')
  //     }
  //     else{
  //       console.log(res)
  //     }
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };

//  const handleFileChange = (e) => {
//   setPdf(e.target.files[0]);
// };


  return (
    <div className="register-page">
      <div className="register-container">
        <h2>Edit Books</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="book">Book Name</label>
            <input type="text"  id="book" name="book" placeholder="Book name"  value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="author">Author Name</label>
            <input type="text"  id="author" name="author" placeholder="Author name"  value={author} onChange={(e) => setAuthor(e.target.value)}/>
          </div>
           <div className="form-group">
         <label htmlFor='genre_br'>Genre</label>
         <select name='genre_br' id='genre_br' value={genre_br} onChange={(e) => setGenrebr(e.target.value)}>
          <option value='fiction'>Fiction</option>
          <option value='non-fiction'>Non-Fiction</option>
         </select>
        </div>
          <div className="form-group">
         <label htmlFor='genre_nr'>Under this genre:</label>
         <select name='genre_nr' id='genre_nr' value={genre_nr} onChange={(e) => setGenrenr(e.target.value)}>
          <option value='self-help'>Self-help</option>
          <option value='autobiographies'>Autobiographies</option>
          <option value='true-crime'>True-crime</option>
          <option value='sports'>Sports</option>
          <option value='biographies'>biographies</option>
          <option value='fantasy'>Fantasy</option>
          <option value='classic'>Classic</option>
          <option value='young-love'>Young Love</option>
          <option value='myster-suspense'>Mystery & Suspense</option>
          <option value='horror'>Horror</option>
         </select>
        </div>
        {/* <div className="form-group">
            <label htmlFor="pdfPath">PDF File</label>
            <input type="file" name="pdfPath"  value={pdfPath} onChange={handleFileChange} accept=".pdf" />
          </div>  */}
         
           <div className="form-group">
            <label htmlFor="imageUrl">Image URL</label>
            <input type="text" id="imageUrl" name="imageUrl" placeholder="Enter image url" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} />
          </div>
          
          <button type="submit" className="btn-register">Update</button>
        </form>
      </div>
    </div>
  );
};

export default EditBook;
