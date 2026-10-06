import React from 'react'
import { Link } from 'react-router-dom'

const BookCard = ({book}) => {
    const {name , author , genre_br , genre_nr , imageUrl} = book //,pdfPath
  return (
    <div className='book-card'>
       {/* <a href={pdfPath} target="_blank" rel="noopener noreferrer">
        <img src={imageUrl} alt={name} className='book-image'/>{console.log(pdfPath)}
      </a> */}
       <img src={imageUrl} alt={name} className='book-image'/>
       {/* {console.log(pdfPath)} */}
      <div className="book-details">
        <h3>{name}</h3>
        <p>{author}</p>
        <p>{genre_br}</p>
        <p>{genre_nr}</p>
      </div>
      <div className="book-actions">
        <button><Link to={`/book/${book._id}`} className='btn-link'>Edit</Link></button>
         <button><Link to={`/delete/${book._id}`} className='btn-link'>Delete</Link></button>
      </div>
    </div>
  )
}

export default BookCard
//<Link to={`/book/${book._id}`}>Edit</Link>