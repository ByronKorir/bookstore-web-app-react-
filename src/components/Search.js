import React, { useState } from 'react'

export default function Search() {
  const [searchTerm,setSearchTerm] =useState()
  const [filteredBooks, setFilteredBooks] = useState([])

  function handleSearch(){
    fetch("http://localhost:8001/books")
    .then((res)=>res.json())
    .then((data)=>{
      const Search = data && data.filter((book)=>{
        return(
          book.genre === searchTerm || book.genre === searchTerm.toLowerCase()
          || book.title === searchTerm || book.title.toLowerCase()===searchTerm
          || book.author===searchTerm || book.author.toLowerCase()===searchTerm
        )
      })
      setFilteredSearch(Search)
    })
  }
  console.log(filteredBooks)

  return (
    <form onSubmit={(e)=>{
      e.preventDefault()
      handleSearch()
    }}
     className="d-flex">
      <input onChange={(e)=>setSearchTerm(e.target.value)} className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success" type="submit">🔍</button>
    </form>
  )
}
