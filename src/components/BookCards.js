import React, {useState, useEffect} from 'react'
import '../styles/BookCard.css'
import { Link } from 'react-router-dom';


export default function BookCards() {
   const [books, setBooks] = useState([]);

   useEffect(() => {
     fetch(`http://localhost:8001/books`)
     .then((res)=> res.json())
     .then((data)=>{
      setBooks(data)
     })
   }, [])
   
   

  return (
    <div className='container row mx-auto'>
      {
         books.map((book)=>(
         <div key={book.id} className='col-md-2 card mb-3 ms-5 text-center'>
            <Link to={`books/${book.id}`}>
               <div className='pt-1'>
                  <img id='book-card-cover' className='img-fluid' src={book.cover} alt={book.title}/>
               </div>
            </Link>
            
            <div id='description' className='d-flex'>
               <p>{book.genre}</p>
               <p>Price:<span>{book.price}</span></p>
            </div>
         </div>
         ))
      }
      
    </div>
  )
}
