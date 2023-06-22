import React, { useState } from 'react'
import { addProduct } from '../redux/product/action'
import { useDispatch } from 'react-redux'


export default function ProductForm() {
    const [product, setProduct]=useState({
        id:"",
        name:"",
        price:""
    })
    console.log("🚀 ~ file: ProductForm.jsx:12 ~ ProductForm ~ product:", product)
    const dispatch=useDispatch()
    const handleSubmit = (e) => {
       /*  e.preventDefault() */
        const newProduct={...product,id:Date.now()}
        dispatch(addProduct(newProduct))
       
        
     }
    const handleChange = (e) => { 
        console.log(e.target.value);
        setProduct({
            ...product,
            [e.target.name]:e.target.value
    
        })
    }
    
  return (
    <div>
        <h1>FORM</h1>
       <form onSubmit={handleSubmit} action="">
        <div>
            <label htmlFor="">Name</label>
            <input type="text" id='name' value={product.name} name='name' placeholder='Enter' onChange={handleChange}/>
        </div>
              <div>
                  <label htmlFor="">Price</label>
                  <input type="text" id='price' value={product.price} name='price' placeholder='Enter' onChange={handleChange} />
              </div>
              <button type='submit'>ADD</button>
       </form>
       
    </div>
  )
}
