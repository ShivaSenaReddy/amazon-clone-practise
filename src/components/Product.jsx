import React from 'react'
import { useDispatch } from './StateProvider'
import { FaStar } from "react-icons/fa";
function Product({ name, image, price, id, rating }) {
    const dispatch = useDispatch()
    function addItem() {
        // console.log(dispatch)
        dispatch({ type: 'ADD_TO_BASKET', item: { name: name, price: price, image: image, id: id, rating: rating } })
        console.log('added item')

    }

    return (
        <div className='product'>
            <img src={image} className='product--image' />
            <div className='product--description'>
                <p>
                    {name}
                </p>
                <p>{new Array(rating).fill('⭐')}</p>
                <p><span>Rs {price}</span></p>
                <button className='product--Btn' onClick={() => addItem()} >Add to Cart</button>
            </div>
        </div >
    )
}

export default Product
