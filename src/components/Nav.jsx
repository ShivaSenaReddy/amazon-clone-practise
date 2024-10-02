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
            <NavLink to='/signin'>
                <div className='nav-line1'>Hello,</div>
                <div className='nav-line2'>Sign in </div>
            </NavLink>
            <NavLink to='/returns'>
                <div className='nav-line1'>   Returns,</div>
                <div className='nav-line2'> & Orders </div>
            </NavLink>

            <NavLink to='/checkout' className='shopping--cart'>
                <div className='view-cart'>
                    <FiShoppingCart className='cart--icon' size={100} />
                    {cart.length}
                </div>
            </NavLink>

        </nav>
    )
}

export default Nav
