import React, { useEffect, useState } from 'react'
import '../styles/SuccessfulTransactions.css'

export default function SuccessfulTransactions() {
   const [transactions, setTransactions]= useState([])
let grandTotal = 0
transactions.map((item)=>{
   return grandTotal +=item.total
})
console.log(grandTotal)

   
   useEffect(() => {
     fetch(`http://localhost:8001/purchase`)
     .then((res)=>res.json())
     .then((data)=>{
      setTransactions(data)
     })
   }, [])
   
  return (
    <div className=' container-fluid'>
      <div id='table' className='text-center'>
         <h4>SUCCESSFUL TRANSACTIONS</h4>
      <table class="table table-dark table-striped ">
         <thead>
            <tr className='text-center'>
               <th scope="col">ID</th>
               <th scope="col">Customer</th>
               <th scope="col">Book</th>
               <th scope="col">Quantity</th>
               <th scope="col">Paid</th>
            </tr>
         </thead>
         <tbody className='text-success text-center'>
            {
               transactions.map((item)=>(
                  <tr key={item.id}>
                     <th scope="row">{item.id}</th>
                     <td>{item && item.customer}</td>
                     <td>{item.book}</td>
                     <td>{item.quantity}</td>
                     <td>{item.total}</td>
                  </tr>
               ))
            }
            
         </tbody>
         </table>
      </div>
      <div id='total' className='text-end'>
         <h5>GrandTotal:Ksh/=<span>{grandTotal}</span></h5>
      </div>
    </div>
  )
}
