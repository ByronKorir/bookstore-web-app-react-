import React, {useState} from 'react'
import '../styles/AddBook.css'

export default function AddBook() {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [cover, setCover] = useState('')
  const [publishYear, setPublishYear] = useState('')
  const [description, setDescription] = useState('')
  const [genre, setGenre] = useState('')
  const [price, setPrice] = useState(0)
  const [stock, setStock] = useState(0)


  //handling POST
  function addBook(){
    fetch(`http://localhost:8001/books`,{
      method:"POST",
      headers:{
        "Accept": "application/json",
        "Content-type": "application/json"
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
      //clearing form
    setTitle("")
    setAuthor('')
    setCover('')
    setPublishYear('')
    setDescription('')
    setGenre('')
    setPrice(0)
    setStock(0)
      Swal.fire({
        title: "Successfully!",
        text: "book has been successfully added!",
        icon: "success"
      });
    })
    
  }
  // console.log(title)
  // console.log(author)
  // console.log(cover)
  // console.log(publishYear)
  // console.log(description)
  // console.log(genre)
  // console.log(price)
  // console.log(stock)

  return (
    <div id='add-book' className='card text-dark bg-dark mt-1'>
      <div id='page-title' className='container '>
       <h1 className='text-center bg-dark '>Add Book</h1>
      </div>
      
      <form 
       onSubmit={(e)=>{
        e.preventDefault()
        addBook()
    }} 
      className='p-3'>
        <div className="mb-3">
            <label  className="form-label">Title</label>
            <input required type="text" onChange={(e)=>setTitle(e.target.value)} className="form-control "  placeholder="Book Title"/>
        </div>
        <div className="mb-3">
            <label  className="form-label">Author</label>
            <input required  type="text" onChange={(e)=>setAuthor(e.target.value)} className="form-control"  placeholder="Author"/>
        </div>
        <div className="mb-3">
            <label  className="form-label">Cover-image</label>
            <input required  type="url" onChange={(e)=>setCover(e.target.value)} className="form-control"  placeholder="Cover image"/>
        </div>
        <div className="mb-3">
            <label  className="form-label">Description</label>
            <textarea required  type="text" onChange={(e)=>setDescription(e.target.value)} className="form-control"  placeholder="description"/>
        </div>
        <div className='d-flex'>
            <div className='mb-2 me-5'>
              <label  className="form-label text-center">Genre</label>
              <div class="form-floating">
                  <select required class="form-select" onChange={(e)=>setGenre(e.target.value)}  >
                  <option selected disabled>select genre</option>
                  <option value="action">action</option>
                  <option value="adventure">adventure</option>
                  <option value="anime">anime</option>
                  <option value="comedy">comedy</option>
                  <option value="documentary">documentary</option>
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
                  <label  className="form-label text-center">Select genre</label>
              </div>
            </div>
            <div className="mb-3 ms-5">
              <label  className="form-label">Publish year</label>
              <input required  type="text" onChange={(e)=>setPublishYear(e.target.value)} className="form-control"  placeholder="publish year"/>
            </div>
        </div>
        <div className='d-flex'>
        <div className="mb-3 mx-3">
            <label  className="form-label">Price</label>
            <input required  type="number" onChange={(e)=>setPrice(e.target.value)} className="form-control"  placeholder="price"/>
        </div>
        <div className="mb-3 mx-3">
            <label  className="form-label">Stock</label>
            <input required  type="number" onChange={(e)=>setStock(e.target.value)} className="form-control"  placeholder="stock"/>
        </div>
        </div>
        
        <button
        id='addBtn'
        type="submit"
          className="btn "
          >Add</button>
      </form>
    </div>
  )
}
