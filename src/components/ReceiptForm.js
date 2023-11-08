import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'

export default function ReceiptForm() {
   const {id} = useParams()
 
 {/* {
      valid?
      <div id='add-book' className='card text-dark bg-dark mt-1'>
        <div id='page-title' className='container '>
            <h4 className='text-center bg-dark '>Receipt</h4>
        </div>
        
        <form className='p-3'>
            <div className="mb-3">
                <label  className="form-label">Book</label>
                <input required type="button"  className="form-control " value={book.title}/>
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
                <input required  type="button"  className="form-control text-success text-center"  value={total}/>
            </div>
            <button
            id='addBtn'
            type="submit"
            className="btn "
            >Paid</button>
        </form>
    </div>
      : */}
 


  return( 
  <div>
    <h1>{id}</h1>
    </div>
  )
  
  }
//           //function to update the purchase database
//   function handleBookPurchase(){
    
//    fetch("http://localhost:8001/purchase",{
//        method:"POST",
//        headers:{
//            "Content-Type":"application/json",
//            "Accept":"application/json"
//        },
//        body:JSON.stringify({
//            Customer:Customer,
//            book:book.title,
//            quantity:quantity,
//            total:total
//        })
//    })

//        .then((res)=>res.json())
//        .then((data)=>{
//            alert('book purchased')
//        })
//  }

  //function to update booksdatabase
//   function updateBooksDatabase(id){
//    fetch("http://localhost:8001/purchase",{
//        method:"PATCH",
//        headers:{
//            "Content-Type":"application/json",
//            "Accept":"application/json"
//        },
//        body:JSON.stringify({
//            stock:remainingBooks
//        })
//    })

//        .then((res)=>res.json())
//        .then((data)=>{
//            alert('book purchased successful')
//        })
//  }