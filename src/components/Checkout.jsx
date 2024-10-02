import React, { useContext } from 'react'
import { Context } from './ContextProvider'
import { useStateValue } from './StateProvider'
import Product from './Product';
import CheckoutProduct from './CheckoutProduct';
function totalCost(cart) {
    let totalPrice = 0;
    // console.log(cart[0].price)
    for (let i = 0; i < cart.length; i++)
        totalPrice = totalPrice + parseInt(cart[i].price) * parseInt(cart[i].quantity);
    return totalPrice;
}

function Checkout() {
    const valueContext = useContext(Context)
    const [cart, dispatch] = useStateValue();
    console.log(cart)
    console.log(dispatch)

    return (
        <div className='checkout-page'>
            <div className='checkout'>
                <img src='/images/checkout.jpg' className='checkout-cover' />
                {cart.length > 0 ? 'Find the Items in your cart' : 'Your Cart is empty'}
                {cart.map(pro => <CheckoutProduct
                    image={pro.image}
                    name={pro.name}
                    id={pro.id}
                    price={pro.price}
                    rating={pro.rating}
                    quantity={pro.quantity}
                />)}
            </div>
            <div className='order-total'>
                <p>Subtotal Rs {totalCost(cart)}</p>
                <small>
                    <input type='checkbox' />
                    This Order contains gift option</small>
                <button className='checkout-btn' >Proceed to Checkout</button>
            </div>
        </div>
    )
}

export default Checkout
