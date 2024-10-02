import React, { useContext } from 'react'
import { Context } from './ContextProvider'
import { useStateValue } from './StateProvider'
import Product from './Product';
import CheckoutProduct from './CheckoutProduct';


function Checkout() {
    const valueContext = useContext(Context)
    const [cart, dispatch] = useStateValue();
    console.log(cart)
    console.log(dispatch)

    return (
        <div className='checkout-page'>
            <div className='checkout'>
                <img src='/images/checkout.jpg' className='checkout-cover' />
                {cart.map(pro => <CheckoutProduct
                    image={pro.image}
                    name={pro.name}
                    id={pro.id}
                    price={pro.price}
                    rating={pro.rating}
                />)}
            </div>
            <div className='order-total'>
                <p>Subtotal</p>
                <small>
                    <input type='checkbox' />
                    This Order contains gift option</small>
                <button className='checkout-btn' >Proceed to Checkout</button>
            </div>
        </div>
    )
}

export default Checkout
