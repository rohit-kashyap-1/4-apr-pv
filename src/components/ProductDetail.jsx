import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function ProductDetail(props) {
    let id = useParams('')
    id = Number(id.id)

    let [product, setProduct] = useState()
    let [images,setImages] = useState()
    useEffect(function () {
        fetch('https://dummyjson.com/products/' + id).then((response) => response.json()).then((data) => {
            setProduct(data)
            setImages(data.images)
        })
    }, [])
    return (
        <div>
            {(product != undefined) ?
                <div>
                    {console.log(product)}
                    <h1>{product.title}</h1>
                    <div className='row'>
                        <div className='col-md-8'>
                        <img src={product.thumbnail} className='img-fluid w-100 rounded-3' />
                        <div className='row'>
                            {(images!=undefined)?images.map(function(item){return <div key={item} className='col-md-3'>
                                <img src={item} className='img-fluid border mt-2 rounded' style={{width:'100%',height:'80px',objectFit:'cover'}} />
                            </div>}):''}
                        </div>
                        <div className='mt-2 border p-4 rounded'>
                            {product.description}
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div className='border p-4 rounded'>
                                <div className='display-4'>${product.price}</div>
                                <div className='text-danger'>{product.discountPercentage} % off</div>
                                <button className='btn btn-success btn-lg mt-2'>Buy Now</button>
                                </div>
                        </div>
                    </div>
                </div>

                : ''}

        </div>
    )
}
