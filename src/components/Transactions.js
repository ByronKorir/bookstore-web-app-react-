// import React, {useState, useEffect} from 'react'



// export default function Transactions({id}) {
//    const [quantity, setQuantity] =useState(1)
   
   
//    const [book, setBook] = useState([])
   
//    const [total, setTotal]= useState()

//    // const [Customer, setCustomer] = useState()

   
  

//   setTotal(parseInt(book.price)*parseInt(quantity))
 
  
//    useEffect(() => {
//      fetch(`http://localhost:8001/books/${id}`)
//      .then((res)=>res.json())
//      .then((data)=>{
//       setBook(data)
//      })
//    }, [])
   

//    function handleBookSelection(id){
//       if(quantity<=book.stock){
//          setValid(true)

         
//       }
//       else if(quantity>book.stock){
//          alert(`sorry we only have ${book.stock} books left`)
//       }else if(quantity<1){
//          alert('Please make avalid order')
//       }
//    }

//   return (
//    <div>
  
   
//       <div>
//          <div>
//             <h4>Quantity</h4>
//          </div>
//             <button onClick={()=>setQuantity(quantity-1)} class="btn btn-light me-1" type="button">-</button>
//             <input class="btn btn-light me-1" type="button" value={quantity}/>
//             <button onClick={()=>setQuantity(quantity+1)}  class="btn btn-light me-4" type="button">+</button>
            
//             <button 
//             onClick={()=>handleBookSelection(id)}
//             class="btn btn-light ms-5 bg-success" 
//             type="button"
//             >Buy</button>
            
            
//       </div>
  
//    </div>
//   )
// }
