import React, {useState, useEffect} from 'react'
import '../styles/BookCard.css'
import { Link } from 'react-router-dom';


export default function BookCards() {
   const [books, setBooks] = useState([]);
   // const [filteredBooks, setFilteredBooks] = useState([])
   // const [searched, setSearched] = useState(false)

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
         <div key={book.id} className='col-md-3  text-center'>
            <div id='main-container' className='mb-3  text-center border border-success bg-dark text-light'>
               <Link to={`books/${book.id}`}>
                  <div className='pt-1'>
                     <img id='book-card-cover' className='img-fluid' src={book.cover} alt={book.title}/>
                  </div>
               </Link>
               
               <div id='description' className='d-flex  cntainer-fluid'>
                  <p>{book.genre}</p>
                  <p>Price:<span>{book.price}</span></p>
               </div>
            </div>
         </div>
         ))
      }
      
    </div>
  )
}
