import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

export default function SingleBook() {
   const {id}= useParams()
   useEffect(() => {
      fetch(`http://localhost:8001/books/${id}`)
      .then((res)=> res.json())
      .then((book))
   }, [])
   
  return (
    <div id='single-book'>
      <div>
         <img src={book.cover} alt={book.title}/>
      </div>
      <div>

      </div>
      
    </div>
  )
}
