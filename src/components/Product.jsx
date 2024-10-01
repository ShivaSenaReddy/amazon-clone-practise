import React from 'react'
import { useDispatch } from './StateProvider'

function Product({ name, image, price, id }) {
    const dispatch = useDispatch()
    function addItem() {
        // console.log(dispatch)
        dispatch({ type: 'ADD_TO_BASKET', item: { name: name, price: price, image: image, id: id } })
        console.log('added item')

    }
    return (
        <div className='product'>
            <img src={image} className='product--image' />
            <div className='product--description'>
                <p>
                    {name}
                </p>
                <button className='product--Btn' onClick={() => addItem()} >Add to Cart</button>
                <p><span>{price}</span></p>
            </div>
        </div >
    )
}

export default Product
