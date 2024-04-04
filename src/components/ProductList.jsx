import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function ProductList() {
    //call fetch()
   let [products, setProducts] =  useState()

   useEffect(function(){
    //
    fetch('https://dummyjson.com/products').then((response)=>response.json()).then((data)=>{
        setProducts(data.products)
    })
   },[])

   //one time
   //each time

  return (
    <div>
        <h2>Product List</h2>
        
      <div className='row'>
        {(products!=undefined)?products.map((item)=>{return (<div key={item.id} className='col-md-3 mb-3'>
            <img src={item.thumbnail} className='img-fluid rounded mb-2 bg-dark' style={{width:'100%',height:'150px',objectFit:'cover'}} />
            <Link to={'/products/'+item.id}>
                <h5>{item.title}</h5>
                </Link>
                <p className='d-flex justify-content-between'>Rs.{item.price} <span className='text-danger'>{item.discountPercentage} % Off</span></p>
        </div>)}): ''}
      </div>
    </div>
  )
}
