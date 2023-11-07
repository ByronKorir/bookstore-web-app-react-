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
            <h2 ><strong>{book.title}</strong></h2>
            <p><strong>By:</strong><em>{book.author}</em></p>
            <p>{book.description}</p>
            <div id='descriptions'>
               <p>Genre:<span >{book.genre}</span></p>
               <p>Price: ksh/=<span >{book.price}</span></p>
               <p>Available:<span >{book.stock}</span></p>
            </div>
            <div>
               <div>
                  <h4>Quantity</h4>
               </div>
               <button class="btn btn-light me-1" type="submit">-</button>
               <input class="btn btn-light me-1" type="button" value="Input"/>
               <button class="btn btn-light me-4" type="submit">+</button>
               <button class="btn btn-light ms-5 bg-success" type="submit">Add to Cart</button>
            </div>

         </div>
         
      </div>
    </div>
  )
}
