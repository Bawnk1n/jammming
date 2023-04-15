import React, { useState } from 'react'; 
import './SearchBar.css';

export const SearchBar = (props) => {

    const [searchValue, setSearchValue] = useState('')

    const getSearch = (e) => {
        setSearchValue(e.target.value);
    }

    const handleSumbit = (e) => {
        e.preventDefault();
        props.onSearch(searchValue)
    }

    return(
        <div>
            <form onSubmit={handleSumbit}>
                <input type='text' placeholder='Search' onChange={getSearch}/>            
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}