import React from 'react'

export default function ReceiptForm() {
  return (
   <div id='add-book' className='card text-dark bg-dark mt-1'>
   <div id='page-title' className='container '>
    <h4 className='text-center bg-dark '>Receipt</h4>
   </div>
   
   <form className='p-3'>
     <div className="mb-3">
         <label  className="form-label">Book</label>
         <input required type="button"  className="form-control " value="book"/>
     </div>
     <div className="mb-3">
         <label  className="form-label">Customer's Name</label>
         <input required type="text"  className="form-control "  placeholder="Customer's Name"/>
     </div>
     <div className="mb-3">
         <label  className="form-label">Quantity</label>
         <input required type="button"  className="form-control " value="1"/>
     </div>
     <div className="mb-3">
         <label  className="form-label">Total:</label>
         <input required  type="button"  className="form-control text-success text-center"  value="1"/>
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
