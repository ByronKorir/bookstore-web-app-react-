import React, { useEffect,useState } from 'react'
import {  useParams } from 'react-router-dom'
import '../styles/SingleBook.css'
import UpdateBookForm from '../components/UpdateBookForm'
import Transactions from '../components/Transactions'
export default function SingleBook() {
   const {id}= useParams()
   const[book,setBook] = useState([])
   
   const [editBook, setEditBook] = useState(false)
   useEffect(() => {
      fetch(`http://localhost:8001/books/${id}`)
      .then((res)=> res.json())
      .then((data)=>{
         setBook(data)
      })
   }, [editBook])

   //handle delete
   function handleDeleteBook(id){
      fetch(` http://localhost:8001/books/${id}`,{
         method: "DELETE"
      })
      .then((res)=>(res.json()))
      .then((data)=>{
         
         alert('book deleted')
      })
      .catch((error)=>{
         console.error('unable to delete book')
      })
   }
  
   
  return (
   <div id='main ' >
      <div id='single-book' className='mx-auto'>
         <div id='image'>
            <img className='img-fluid' src={book.cover} alt={book.title}/>
            
         </div>
         <div>
            {
               editBook===true? 
               <UpdateBookForm book={book} onEdit={setEditBook}/>
               :
               <div id='main-des' className='text-start bg-dark  p-3'>
                  <h2 ><strong>{book.title}</strong></h2>
                  <p><strong>By:</strong><em>{book.author}</em></p>
                  <p>{book.description}</p>
                  <p>publishYear:<span>{book.published_year}</span></p>
                  <div id='descriptions'>
                     <p>Genre:<span >{book.genre}</span></p>
                     <p>Price: ksh/=<span >{book.price}</span></p>
                     <p>Available:<span >{book.stock}</span></p>
                  </div>
                  {/* <Transactions
                  id={id}
                  /> */}
                 
               </div>
            }
         </div>
      </div>
      <div className='text-center'>
      <button id='editBtn' type='button' className='s mx-2' onClick={()=>setEditBook(true)}>Edit</button>
      
      <button id='deleteBtn'onClick={()=>handleDeleteBook(book.id)}  type='submit' className=' mx-5' >delete</button>
      
      
      </div>
    </div>
  )
}
