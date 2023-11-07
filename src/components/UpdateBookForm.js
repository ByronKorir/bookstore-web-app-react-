import React, { useState } from 'react'

export default function UpdateBookForm({book, onEdit}) {
const [title, setTitle] = useState(book.title)
const [author, setAuthor] = useState(book.author)
const [cover, setCover] = useState(book.cover)
const [publishYear, setPublishYear] = useState(book.published_year)
const [description, setDescription] = useState(book.description)
const [genre, setGenre] = useState(book.genre)
const [price, setPrice] = useState(book.price)
const [stock, setStock] = useState(book.stock)
console.log(stock)
//handling patch
function UpdateBook(id){
   
   fetch(` http://localhost:8001/books/${id}`,{
      method:"PATCH",
      headers:{
         "Accept":"application/json",
         "Content-Type":"application/json"
      },
      body:JSON.stringify({
         title:title,
         author:author,
         cover:cover,
         published_year:publishYear,
         description:description,
         genre:genre,
         price:price,
         stock:stock
      })
   })
   .then((res)=>res.json())
   .then((data)=>{
      alert('Book updated')
      onEdit(false)
   })
   

}


  return (
   
    <div className='card text-dark bg-secondary mt-1'>
      <h5 className='text-center'>Edit Book</h5>
      <form>
         <div className="mb-3">
            <label  className="form-label">Title</label>
            <input required type="text" onChange={(e)=>setTitle(e.target.value)} className="form-control "  placeholder={book.title}/>
         </div>
         <div className="mb-3">
            <label  className="form-label">Author</label>
            <input required  type="text" onChange={(e)=>setAuthor(e.target.value)} className="form-control"  placeholder={book.author}/>
         </div>
         <div className="mb-3">
            <label  className="form-label">Cover-image</label>
            <input required  type="url" onChange={(e)=>setCover(e.target.value)} className="form-control"  placeholder={book.cover}/>
         </div>
         <div className="mb-3">
            <label  className="form-label">Description</label>
            <textarea required  type="text" onChange={(e)=>setDescription(e.target.value)} className="form-control"  placeholder={book.description}/>
         </div>
         <div className='d-flex'>
            <div className='mb-2'>
               <label  className="form-label text-center">Genre</label>
               <div class="form-floating">
                  <select required class="form-select" onChange={(e)=>setGenre(e.target.value)} placeholder={book.genre} id="genre" aria-label="Floating label select example">
                  <option selected></option>
                  <option value="action">action</option>
                  <option value="adventure">adventure</option>
                  <option value="anime">anime</option>
                  <option value="comedy">comedy</option>
                  <option value="document">documentary</option>
                  <option value="drama">drama</option>
                  <option value="education">education</option>
                  <option value="fantasy">fantasy</option>
                  <option value="fiction">fiction</option>
                  <option value="health">health</option>
                  <option value="historical">historical</option>
                  <option value="horror">horror</option>
                  <option value="kids">kids</option>
                  <option value="mystery">mystery</option>
                  <option value="thriller">thriller</option>
                  <option value="romance">romance</option>
                  </select>
               </div>
            </div>
            <div className="mb-3 mx-3">
               <label  className="form-label">Publish year</label>
               <input required  type="text" onChange={(e)=>setPublishYear(e.target.value)} className="form-control"  placeholder={book.published_year}/>
            </div>
         </div>
         <div className='d-flex'>
         <div className="mb-3 mx-3">
            <label  className="form-label">Price</label>
            <input required  type="number" onChange={(e)=>setPrice(e.target.value)} className="form-control"  placeholder={book.price}/>
         </div>
         <div className="mb-3 mx-3">
            <label  className="form-label">Stock</label>
            <input required  type="number" onChange={(e)=>setStock(e.target.value)} className="form-control"  placeholder={book.stock}/>
         </div>
         </div>
         
         <button onClick={(e)=>{
            e.preventDefault()
            UpdateBook(book.id)
         }} 
         type="submit"
          className="btn btn-success"
          >Update</button>
      </form>
    </div>
  )
}
