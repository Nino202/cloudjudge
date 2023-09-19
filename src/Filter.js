import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
export const Filter = ({ country, handleSearchChange, handleSelectChange }) => {
    return (
        <div className='filter'>
            <div className='search-input'>
                <FontAwesomeIcon id='search-icon' icon={faSearch} />
                <input type="text" value={country} onChange={handleSearchChange} placeholder='Search for a country   ' />
                <a><div className='search-button' onClick={console.log("Search")}>Search</div></a>
            </div>
            
        </div>
    )
}
