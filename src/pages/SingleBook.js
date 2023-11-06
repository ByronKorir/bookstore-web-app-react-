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
   <div id='main'>
      <div id='single-book' className='mx-auto'>
         <div id='image'>
            <img className='img-fluid' src={book.cover} alt={book.title}/>
         </div>
         <div id='main-des' className='text-start'>
            <h2 className='text-success'><strong>{book.title}</strong></h2>
            <p><strong>By:</strong><em>{book.author}</em></p>
            <p>{book.description}</p>
            <div id='descriptions'>
               <p>Genre:<span className='text-success'>{book.genre}</span></p>
               <p>Price: ksh/=<span className='text-success'>{book.price}</span></p>
               <p>Available:<span className='text-success'>{book.stock}</span></p>
            </div>

         </div>
         
      </div>
    </div>
  )
}
