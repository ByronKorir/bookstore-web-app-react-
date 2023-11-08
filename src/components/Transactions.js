import React, {useState} from 'react'

export default function Transactions({available, book, price, id}) {
   const [quantity, setQuantity] =useState(1)
   const [total, setTotal] = useState()
   const [valid, setValid] = useState(false)
   const [remainingStock, setRemainingStock] = useState()

   function handleBookPurchase(id){
      if(quantity<=available){
         setValid(true)
         const amount = parseInt(price)*parseInt(quantity)
         setTotal(amount)
         const stockLeft = parseInt(available)-parseInt(quantity)
         setRemainingStock(stockLeft)
      }
      else if(quantity>available){
         alert(`sorry we only have ${available} books left`)
      }else if(quantity<1){
         alert('Please make avalid order')
      }
   }

  return (
   <div>
      <div>
         <h4>Quantity</h4>
      </div>
         <button onClick={()=>setQuantity(quantity-1)} class="btn btn-light me-1" type="button">-</button>
         <input class="btn btn-light me-1" type="button" value={quantity}/>
         <button onClick={()=>setQuantity(quantity+1)}  class="btn btn-light me-4" type="button">+</button>
         <button 
         onClick={()=>handleBookPurchase(id)}
         class="btn btn-light ms-5 bg-success" 
         type="button"
         >Buy</button>
   </div>
  )
}
