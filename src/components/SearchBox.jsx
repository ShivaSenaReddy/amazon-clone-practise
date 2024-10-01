import React from 'react'
import { IoMdSearch } from "react-icons/io";
function SearchBox() {
    return (
        <div className='searchBox'>

            <input type='text' placeholder='Search in Amazon.in'></input>
            <IoMdSearch className='searchIcon' />
        </div>
    )
}

export default SearchBox
