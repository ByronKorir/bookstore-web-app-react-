import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import '../styles/SingleBook.css'

export default function SingleBook() {
   const {id}= useParams()
   const[book,setBook] = useState([])
   useEffect(() => {
      fetch(`http://localhost:8001/books/${id}`)
      .then((res)=> res.json())
      .then((data)=>{
         setBook(data)
      })
   }, [])
  
   
  return (
    <div id='single-book' className='mx-auto'>
      <div id='image'>
         <img className='img-fluid' src={book.cover} alt={book.title}/>
      </div>
      <div className='text-center'>
         <p>{book.title}</p>
         <p><strong>By:</strong><em>{book.author}</em></p>
         <p>{book.description}</p>
         <div>
            <p>Genre:{book.genre}</p>
            <p>Price: ksh/={book.price}</p>
            <p>Available:{book.stock}</p>
         </div>

      </div>
      
    </div>
  )
}
