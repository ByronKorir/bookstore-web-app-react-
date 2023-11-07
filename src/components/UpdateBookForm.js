import React, { useState } from 'react'

export default function UpdateBookForm({book}) {
const [title, setTitle] = useState(book.title)
const [author, setAuthor] = useState(book.author)
const [cover, setCover] = useState(book.cover)
const [publishYear, setPublishYear] = useState(book.published_year)
const [description, setDescription] = useState(book.description)
const [genre, setGenre] = useState(book.genre)
const [price, setPrice] = useState(book.price)
const [stock, setStock] = useState(book.stock)


  return (
   
    <div className='card text-dark bg-secondary mt-1'>
      <h5 className='text-center'>Edit Book</h5>
      <form>
         <div className="mb-3">
            <label  className="form-label">Title</label>
            <input required type="text" className="form-control "  value={book.title}/>
         </div>
         <div className="mb-3">
            <label  className="form-label">Author</label>
            <input required  type="text" className="form-control"  value={book.author}/>
         </div>
         <div className="mb-3">
            <label  className="form-label">Cover-image</label>
            <input required  type="url" className="form-control"  value={book.cover}/>
         </div>
         <div className="mb-3">
            <label  className="form-label">Description</label>
            <textarea required  type="text" className="form-control"  value={book.description}/>
         </div>
         <div className='d-flex'>
            <div>
               <label  className="form-label text-center">Genre</label>
               <div class="form-floating">
                  <select required class="form-select" value={book.genre} id="genre" aria-label="Floating label select example">
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
               <input required  type="text" className="form-control"  value={book.published_year}/>
            </div>
         </div>
         <div className='d-flex'>
         <div className="mb-3 mx-3">
            <label  className="form-label">Price</label>
            <input required  type="number" className="form-control"  value={book.price}/>
         </div>
         <div className="mb-3 mx-3">
            <label  className="form-label">Stock</label>
            <input required  type="number" className="form-control"  value={book.stock}/>
         </div>
         </div>
         
         <button type="submit" className="btn btn-success">Update</button>
      </form>
    </div>
  )
}
