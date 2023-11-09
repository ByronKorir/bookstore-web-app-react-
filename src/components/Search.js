import React, { useState } from 'react'
import '../styles/Search.css'
import Swal from 'sweetalert2'

export default function Search({setFilteredBooks, onSearch, searched}) {
  const [searchTerm,setSearchTerm] =useState()
  

  function handleSearch(){
    fetch("http://localhost:8001/books")
    .then((res)=>res.json())
    .then((data)=>{
      const search = data && data.filter((book)=>{
        return(
           book.genre.toLowerCase() === searchTerm.toLowerCase()
          ||  book.title.toLowerCase()===searchTerm.toLowerCase()
          ||  book.author.toLowerCase()===searchTerm.toLowerCase()
        )
      })
      if(search.length<1){
        Swal.fire({
          position: "top",
          title: "No match found",
          showConfirmButton: false,
          timer: 1500
        });
        onSearch(!searched)
      }
      setFilteredBooks(search)
      
    })
  }
  
  return (
    <form onSubmit={(e)=>{
      e.preventDefault()
      handleSearch()
    }}
    id='searchbar'
     className="bg-dark mb-5">
      <input onChange={(e)=>{
        setSearchTerm(e.target.value)
        onSearch(!searched)
      }} className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button id='submitBtn' className="btn " type="submit">🔍</button>
    </form>
  )
}
