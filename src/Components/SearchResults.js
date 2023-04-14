import React from 'react';
import { Tracklist } from './Tracklist';

export const SearchResults = (props) => {

    return(
        <Tracklist results={props.searchResults}/>
    )
}