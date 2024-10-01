import React from 'react'
import { NavLink } from 'react-router-dom'
import SearchBox from './SearchBox'
import { FiShoppingCart } from "react-icons/fi";
function Nav() {
    return (
        <nav>
            <NavLink to='/'> <img src='../public/images/logo.png' className='amazon-logo' /></NavLink>

            <SearchBox />
            <NavLink to=''>Hello,sign in</NavLink>
            <NavLink to='/'>Returns and Orders</NavLink>
            <NavLink to='/checkout' className='shopping--cart'> <FiShoppingCart className='cart--icon' size={100} />0</NavLink>

        </nav>
    )
}

export default Nav
