import React, {useState, useEffect} from 'react'
import '../styles/BookCard.css'
import { Link } from 'react-router-dom';
import Search from './Search';


export default function BookCards() {
   const [books, setBooks] = useState([]);
   const [filteredBooks, setFilteredBooks] = useState([])
   const [searched, setSearched] = useState(false)

   useEffect(() => {
     fetch(`http://localhost:8001/books`)
     .then((res)=> res.json())
     .then((data)=>{
      setBooks(data)
     })
   },[searched])
   
   

  return (
   <div>
      <div id='searchbar' className='text-center'>
      
        <Search 
        onSearch={setSearched}
         searched={searched}
          setFilteredBooks={setFilteredBooks}
          />
          
      </div>
   
    <div className='container row mx-auto'>
      {filteredBooks.length>0?
         filteredBooks.map((book)=>(
         <div key={book.id} className='col-md-3  text-center'>
            <div id='main-container' className='mb-3  text-center border border-success bg-dark text-light'>
               <Link to={`books/${book.id}`}>
                  <div className='pt-1'>
                     <img id='book-card-cover' className='img-fluid' src={book.cover} alt={book.title}/>
                  </div>
               </Link>
               
               <div id='description' className='d-flex  cntainer-fluid'>
                  <p>{book.genre}</p>
                  
                  <p>Price:<span>{book.price}</span></p>
                  
               </div>
               
            </div>
         </div>
         
         ))
         :
         books && books.map((book)=>(
            <div key={book.id} className='col-md-3  text-center'>
               <div id='main-container' className='mb-3  text-center border border-success bg-dark text-light'>
                  <Link to={`books/${book.id}`}>
                     <div className='pt-1'>
                        <img id='book-card-cover' className='img-fluid' src={book.cover} alt={book.title}/>
                     </div>
                  </Link>
                  <div>
                  <div id='description' className='d-flex  container-fluid'>
                     <p>{book.genre}</p>
                     <p>Price:<span>{book.price}</span></p>
                  </div>
                  {/* <Link to={`transaction/${book.id}`}> */}
                  {/* <button>buy</button> */}
                  {/* </Link> */}
                 
                  </div>
               </div>
            </div>
            
            ))
      }
      
    </div>
    </div>
  )
}
