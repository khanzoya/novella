import React from "react";
import "../css/homepage.css";
import { Link } from "react-router-dom";

const HomeBookCards = ({ book }) => {
  const { name, author, genre_br, genre_nr, imageUrl, pdfPath } = book;

  const sanitizedPdfPath = pdfPath?.replace(/\\/g, "/");

  const handleReadPdf = () => {
    if (sanitizedPdfPath) {
      const pdfUrl = `http://localhost:5173/upload/${name.replace(/\s+/g, "")}`;
      window.open(pdfUrl, "_blank"); // Open the PDF file in a new tab
    } else {
      alert("PDF not available for this book."); // Show an alert if PDF is not available
    }
  };

  return (
    <div className='book_cover' id='book_cover'>
      {/* <a href={pdfPath} target="_blank" rel="noopener noreferrer"> */}
      <img src={imageUrl} alt={name} className='book-image' />
      {console.log(pdfPath)}
      {/* </a> */}
      <div className='book-details'>
        <h3>{name}</h3>
        <p>{author}</p>
        <button className='read-button' onClick={handleReadPdf}>
          Read
        </button>
      </div>
    </div>
  );
};

export default HomeBookCards;
