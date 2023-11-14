import React, { useEffect,useState } from 'react'
import {  Link, useParams} from 'react-router-dom'
import '../styles/SingleBook.css'
import UpdateBookForm from '../components/UpdateBookForm'
import Transactions from '../components/Transactions'
import Swal from 'sweetalert2'


export default function SingleBook() {
   
   const {id}= useParams()
   const[book,setBook] = useState([])
   const[onChange, setOnChange] = useState(false)
   const [editBook, setEditBook] = useState(false)
   useEffect(() => {
      fetch(`https://bookstore-project-react-jnpq.onrender.com/books/${id}`)
      .then((res)=> res.json())
      .then((data)=>{
         setBook(data)
      })
   }, [editBook, onChange])

   //handle delete
   function handleDeleteBook(id){
      fetch(` https://bookstore-project-react-jnpq.onrender.com/books/${id}`,{
         method: "DELETE"
      })
      .then((res)=>(res.json()))
      .then((data)=>{
         setRedirectHome(true)
         Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
            }
          });
          
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
                  <Transactions
                  id={id}
                  onChange={onChange}
                  setOnChange={setOnChange}
                  />
                 
               </div>
            }
         </div>
      </div>
      <div className='text-center'>
         <button id='editBtn' type='button' className='s mx-2' onClick={()=>setEditBook(true)}>Edit</button>
         <Link to={'/'}>
           <button id='deleteBtn'onClick={()=>handleDeleteBook(book.id)}  type='submit' className=' mx-5' >delete</button>
         </Link>
      </div>
    </div>
  )
}
