import React, { useContext } from 'react'
import { Context } from './ContextProvider'
import { useStateValue } from './StateProvider'
import Product from './Product';


function Checkout() {
    const valueContext = useContext(Context)
    const [cart, dispatch] = useStateValue();
    console.log(cart)
    console.log(dispatch)

    return (
        <div>
            {cart.map(pro => <Product
                image={pro.image}
                name={pro.name}
                id={pro.id}
                price={pro.price}

            />)}
        </div>
    )
}

export default Checkout
