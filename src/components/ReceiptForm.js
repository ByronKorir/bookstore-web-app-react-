import React, {useEffect, useState} from 'react'
import Swal from 'sweetalert2'
import '../styles/AddBook.css'


export default function ReceiptForm({id, quantity, setIsValid, isValid, onChange, setOnChange}) {
 
  const [Customer, setCustomer] = useState()
  const [book, setBook] = useState([])
  const total= parseInt(book.price)*parseInt(quantity)
  const stockLeft = parseInt(book.stock)-parseInt(quantity)
  console.log(stockLeft)
 
  useEffect(() => {
    fetch(`https://bookstore-project-react-jnpq.onrender.com/books/${id}`)
    .then((res)=>res.json())
    .then((data)=>{
     setBook(data)
    })
  }, [isValid])

      // function to update booksdatabase
      function updateBooksDatabase(id){
       fetch(`https://bookstore-project-react-jnpq.onrender.com/books/${id}`,{
           method:"PATCH",
           headers:{
               "Content-Type":"application/json",
               "Accept":"application/json"
           },
           body:JSON.stringify({
               stock:stockLeft
           })
       })

           .then((res)=>res.json())
           .then((data)=>{
            setIsValid(false)
            Swal.fire({
                position: "center",
                icon: "success",
                title: "the transaction is a success",
                showConfirmButton: false,
                timer: 1500
              });
               setOnChange(!onChange)
           })
           .catch((error)=>{
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "unable to reach the server!",
              });
           })
     }

  //           //function to update the purchase database
   function handleBookPurchase(){
        if(Customer.length>0){
      fetch("https://bookstore-project-react-jnpq.onrender.com/purchase",{
          method:"POST",
          headers:{
              "Content-Type":"application/json",
              "Accept":"application/json"
          },
          body:JSON.stringify({
              customer:Customer,
              book:book.title,
              quantity:quantity,
              total:total
          })
      })

          .then((res)=>res.json())
          .then((data)=>{
              
              setOnChange(!onChange)
          })
          .catch((error)=>{
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "unable to reach the server!",
              });
           })
    }
  }
  return( 
    <div id='add-book' className=' card text-dark bg-dark mt-1'>
    <div id='page-title' className='container '>
        <h4 className='text-center bg-dark '>Order Receipt</h4>
    </div>
    
    <form 
    onSubmit={(e)=>{
      e.preventDefault()
      handleBookPurchase()
      updateBooksDatabase(book.id)
    }}
    className='p-3'>
        <div className="mb-3">
            <label  className="form-label">Book</label>
            <input required type="button"  className="form-control " value={book.title} />
        </div>
        <div className="mb-3">
            <label  className="form-label">Customer's Name</label>
            <input required type="text" onChange={(e)=>setCustomer(e.target.value)}  className="form-control "  placeholder="Customer's Name"/>
        </div>
        <div className="mb-3">
            <label  className="form-label">Quantity</label>
            <input id='quantity' required type="button"  className="form-control " value={quantity}/>
        </div>
        <div className="mb-3">
            <label  className="form-label">Total:</label>
            <input id='tot' required  type="button"  className="form-control  text-center" value={`ksh/= ${total}`} />
        </div>
        <button
        id='addBtn'
        type="submit"
        className="btn "
        >Paid</button>
    </form>
</div>
  )
  
  }
