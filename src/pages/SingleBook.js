import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import '../styles/SingleBook.css'
import UpdateBookForm from '../components/UpdateBookForm'

export default function SingleBook() {
   const {id}= useParams()
   const[book,setBook] = useState([])
   const [quantity, setQuantity] =useState(1)
   const [editBook, setEditBook] = useState(false)
   useEffect(() => {
      fetch(`http://localhost:8001/books/${id}`)
      .then((res)=> res.json())
      .then((data)=>{
         setBook(data)
      })
   }, [editBook])
  
   
  return (
   <div id='main'>
      <div id='single-book' className='mx-auto'>
         <div id='image'>
            <img className='img-fluid' src={book.cover} alt={book.title}/>
            
         </div>
         <div>
            {
               editBook===true? 
               <UpdateBookForm book={book} onEdit={setEditBook}/>
               :
               <div id='main-des' className='text-start'>
                  <div id='title-edit'>
                  <h2 ><strong>{book.title}</strong></h2>
                  <button id='editBtn' type='button' className='bg-success' onClick={()=>setEditBook(true)}>Edit</button>
                  </div>
                  <p><strong>By:</strong><em>{book.author}</em></p>
                  <p>{book.description}</p>
                  <p>publishYear:{book.published_year}</p>
                  <div id='descriptions'>
                     <p>Genre:<span >{book.genre}</span></p>
                     <p>Price: ksh/=<span >{book.price}</span></p>
                     <p>Available:<span >{book.stock}</span></p>
                  </div>
                  <div>
                     <div>
                        <h4>Quantity</h4>
                     </div>
                        <button onClick={()=>setQuantity(quantity-1)} class="btn btn-light me-1" type="button">-</button>
                        <input class="btn btn-light me-1" type="button" value={quantity}/>
                        <button onClick={()=>setQuantity(quantity+1)}  class="btn btn-light me-4" type="button">+</button>
                        <button class="btn btn-light ms-5 bg-success" type="button">Add to Cart</button>
                     </div>
               </div>
            }
         </div>
            

         
         
      </div>
    </div>
  )
}
