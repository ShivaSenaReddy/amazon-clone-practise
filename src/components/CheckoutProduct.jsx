import React from 'react'
import { useDispatch } from './StateProvider'

function CheckoutProduct({ name, image, price, id, rating }) {
    console.log('checkout', rating)
    const dispatch = useDispatch()
    function removeItem() {
        // console.log(dispatch)
        dispatch({ type: 'REMOVE_FROM_BASKET', item: { id: id } })
        console.log('added item')

    }
    return (
        <div className='checkout-product'>
            <img src={image} className='product--image' />
            <div className='checkout-product--description'>
                <p>
                    {name}
                </p>
                <p><span>Rs {price}</span></p>
                <p>{new Array(rating).fill('⭐')}</p>
                <button className='product--Btn' onClick={() => removeItem()} >Remove from Cart</button>

            </div>
        </div >
    )
}

export default CheckoutProduct;
