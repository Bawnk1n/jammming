import React from 'react';
import { Tracklist } from './Tracklist';
import './searchResults.css'

export const SearchResults = (props) => {

    return(
        <div className='searchResults'>
            <Tracklist results={props.searchResults} changeSong={props.addSong} isAdd={true}/>
        </div>
    )   
}