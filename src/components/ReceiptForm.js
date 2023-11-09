import React, {useEffect, useState} from 'react'


export default function ReceiptForm({id, quantity, setIsValid, isValid, onChange, setOnChange}) {
 
  const [Customer, setCustomer] = useState()
  const [book, setBook] = useState([])
  const total= parseInt(book.price)*parseInt(quantity)
  const stockLeft = parseInt(book.stock)-parseInt(quantity)
  console.log(stockLeft)
 
  useEffect(() => {
    fetch(`http://localhost:8001/books/${id}`)
    .then((res)=>res.json())
    .then((data)=>{
     setBook(data)
    })
  }, [isValid])

      // function to update booksdatabase
      function updateBooksDatabase(id){
       fetch(`http://localhost:8001/books/${id}`,{
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
              
               setOnChange(!onChange)
           })
           .catch((error)=>{
            alert('Transaction unsuccessful')
           })
     }

  //           //function to update the purchase database
   function handleBookPurchase(){
        if(Customer.length>0){
      fetch("http://localhost:8001/purchase",{
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
              alert('book purchased')
              setOnChange(!onChange)
          })
    }
  }
  return( 
    <div id='add-book' className='card text-dark bg-dark mt-1'>
    <div id='page-title' className='container '>
        <h4 className='text-center bg-dark text-success'>Receipt</h4>
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
            <input required type="button"  className="form-control " value={quantity}/>
        </div>
        <div className="mb-3">
            <label  className="form-label">Total:</label>
            <input required  type="button"  className="form-control text-success text-center" value={`ksh/= ${total}`} />
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
