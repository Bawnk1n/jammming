import React from 'react'; 
import './SearchBar.css';

export const SearchBar = (props) => {

    return(
        <div>
            <form>
                <input type='text' placeholder='Search' />            
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}