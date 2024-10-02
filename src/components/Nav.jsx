import React from 'react'
import { NavLink } from 'react-router-dom'
import SearchBox from './SearchBox'
import { FiShoppingCart } from "react-icons/fi";
import { useStateExport } from './StateProvider';
function Nav() {
    const [cart, dispatch] = useStateExport();
    return (
        <nav>
            <NavLink to='/'> <img src='/images/logo.png' className='amazon-logo' /></NavLink>

            <SearchBox />
            <NavLink to=''>Hello,sign in</NavLink>
            <NavLink to='/'>Returns and Orders</NavLink>

            <NavLink to='/checkout' className='shopping--cart'>
                <div>
                    <FiShoppingCart className='cart--icon' size={100} />
                    {cart.length}
                </div>
            </NavLink>

        </nav>
    )
}

export default Nav
