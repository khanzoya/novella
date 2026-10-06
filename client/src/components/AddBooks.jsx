import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/Register.css";
import axios from "axios";

const AddBooks = () => {
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [genre_br, setGenrebr] = useState("");
  const [genre_nr, setGenrenr] = useState("");
  const [imageUrl, setImageUrl] = useState(""); // Corrected variable name
  const [pdfPath, setPdfPath] = useState(null);

  const navigate = useNavigate();

  //

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const res = await axios.post("http://localhost:3001/book/add", {
  //       name,
  //       author,
  //       genre_br,
  //       genre_nr,
  //       imageUrl,
  //     });
  //     if (res.data.added) {
  //       console.log(res);
  //       navigate("/bookCollection");
  //     } else {
  //       console.log(res);
  //     }
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("author", author);
    formData.append("genre_br", genre_br);
    formData.append("genre_nr", genre_nr);
    formData.append("imageUrl", imageUrl);
    formData.append("pdfPath", pdfPath); // Append the selected PDF file to the FormData object

    try {
      const res = await axios.post("http://localhost:3001/book/add", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      if (res.data.added) {
        console.log(res);
        navigate("/bookCollection");
      } else {
        console.log(res);
      }
    } catch (err) {
      console.error("Error submitting form:", err);
    }
  };

  const handleFileChange = (e) => {
    setPdfPath(e.target.files[0]); // Store the selected PDF file in state
  };

  return (
    <div className='register-page'>
      <div className='register-container'>
        <h2>Add Books</h2>
        <form onSubmit={handleSubmit}>
          <div className='form-group'>
            <label htmlFor='book'>Book Name</label>
            <input
              type='text'
              id='book'
              name='book'
              placeholder='Book name'
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className='form-group'>
            <label htmlFor='author'>Author Name</label>
            <input
              type='text'
              id='author'
              name='author'
              placeholder='Author name'
              onChange={(e) => setAuthor(e.target.value)}
            />
          </div>
          <div className='form-group'>
            <label htmlFor='genre_br'>Genre</label>
            <select
              name='genre_br'
              id='genre_br'
              onChange={(e) => setGenrebr(e.target.value)}
            >
              <option value='Fiction'>Fiction</option>
              <option value='NonFiction'>Non-Fiction</option>
            </select>
          </div>
          <div className='form-group'>
            <label htmlFor='genre_nr'>Under this genre:</label>
            <select
              name='genre_nr'
              id='genre_nr'
              onChange={(e) => setGenrenr(e.target.value)}
            >
              <option value='self-help'>Self-help</option>
              <option value='autobiographies'>Autobiographies</option>
              <option value='true-crime'>True-crime</option>
              <option value='sports'>Sports</option>
              <option value='biographies'>biographies</option>
              <option value='fantasy'>Fantasy</option>
              <option value='classic'>Classic</option>
              <option value='young-love'>Young Love</option>
              <option value='mystery-suspense'>Mystery & Suspense</option>
              <option value='horror'>Horror</option>
            </select>
          </div>

          <div className='form-group'>
            <label htmlFor='imageUrl'>Image URL</label>
            <input
              type='text'
              id='imageUrl'
              name='imageUrl'
              placeholder='Enter image url'
              onChange={(e) => setImageUrl(e.target.value)}
            />
          </div>

          <div className='form-group'>
            <label htmlFor='pdfPath'>PDF File</label>
            <input
              type='file'
              name='pdfPath'
              onChange={handleFileChange}
              accept='.pdf'
            />
          </div>

          <button type='submit' className='btn-register'>
            Add Book
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddBooks;
