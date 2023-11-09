import React, {useState, useEffect} from 'react'
// import { useParams } from 'react-router-dom'
import ReceiptForm from './ReceiptForm'
import Swal from 'sweetalert2'
import '../styles/Transactions.css'


export default function Transactions({id, onChange, setOnChange}) {
   // const {id} = useParams()
   const [book, setBook] = useState([])
   const [quantity, setQuantity] = useState(1)
   const [isValid, setIsValid] = useState(false)
   useEffect(() => {
     fetch(`http://localhost:8001/books/${id}`)
     .then((res)=>res.json())
     .then((data)=>{
      setBook(data)
     })
   }, [isValid])
   

   function handleBookSelection(){
      if(quantity<=book.stock){
         setIsValid(true) 
      }
      else if(quantity>book.stock){
         Swal.fire({
            icon: "error",
            title: "Sorry",
            text: ` we only have ${book.stock} books left`,
            footer: 'Why do I have this issue?'
          });
         alert()
      }else if(quantity<1){
         alert('Please make avalid order')
      }
   }

  return (
   <div>
      {isValid?
      <ReceiptForm
      id={book.id}
      isValid={isValid}
      quantity={quantity}
      setIsValid={setIsValid}
      onChange={onChange}
      setOnChange={setOnChange}
      />
      :
      
      <div>
         <div>
            <h4>Quantity</h4>
         </div>
            <button onClick={()=>setQuantity(quantity-1)} class="btn btn-light me-1" type="button">-</button>
            <input class="btn btn-light me-1" type="button" value={quantity}/>
            <button onClick={()=>setQuantity(quantity+1)}  class="btn btn-light me-4" type="button">+</button>
            
            <button id='buyBtn'
            onClick={()=>handleBookSelection()}
            class="btn btn-light ms-5 border-success" 
            type="button"
            >Buy</button>
      </div>
      }
   </div>
     
         
     
  )
}
