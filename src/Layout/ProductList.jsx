import React from 'react'
import { useSelector } from 'react-redux'

export default function ProductList() {
    const {products}=useSelector(state=>state.productReducer)
    
  return (
    <div>
        <h2>LIST</h2>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>PRICE</th>
                    <th>ACTION</th>
                </tr>
            </thead>
        </table>
    </div>
  )
}
