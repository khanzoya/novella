import React, { useEffect, useState } from "react";
import axios from "axios";
import BookCard from "./BookCard";
import "../css/BookCard.css";

const Books = () => {
  const [bookCollection, setBooks] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/book/bookCollection")
      .then((res) => {
        // console.log('bookCollection type:', typeof bookCollection);
        setBooks(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className='book-list'>
      {bookCollection.map((book) => {
        return <BookCard key={book._id} book={book} />;
      })}
    </div>
  );
};

export default Books;
