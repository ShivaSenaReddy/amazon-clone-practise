import React, { useContext } from 'react'
import { State, useDispatch, useStateValue } from './StateProvider'
import Product from './Product'

function ProductList() {
    // const cart = useContext(State)


    return (
        <div className='product--List'>
            <div className='home--row'>
                <Product image={'/images/dell.jpg'}
                    name={'Dell G15-5530'}
                    id={1}
                    price={49999}
                    rating={5}
                />
                <Product image={'/images/tshirt.jpg'}
                    name={" Men T-Shirt ||T-Shirt for Men || Printed T Shirt || T-Shirt-LA "}
                    id={2}
                    price={499}
                    rating={5}
                />
                <Product image={'/images/pendrive.webp'}
                    name={" Sandisk Pendrive "}
                    id={3}
                    price={399}
                    rating={5}
                />


            </div>
            <div className='home--row'>

                <Product image={'/images/book.jpg'}
                    name={"  Lean Startup By Eric Ries ve "}
                    id={4}
                    price={349}
                    rating={5}
                />
                <Product image={'/images/sony.jpg'}
                    name={"Sony WH-1000XM4 Industry Leading Wireless Noise Cancellation Bluetooth Over Ear Headphones with Mic for Phone Calls, 30 Hours Battery Life, Quick Charge, AUX, Touch Control and Voice Control - Black"}
                    id={4}
                    price={9999}
                    rating={5}
                />


            </div>
            <div className='home--row'>
                <Product image={'/images/tab.jpg'}
                    name={"Xiaomi Pad 6| Qualcomm Snapdragon 870| Powered by HyperOS |144Hz Refresh Rate| 8GB, 256GB| 2.8K+ Display (11-inch/27.81cm) Tablet| Dolby Vision Atmos| Quad Speakers| Wi-Fi| Gray"}
                    id={5}
                    price={19999}
                    rating={5}
                />

            </div>
        </div>
    )
}

export default ProductList
