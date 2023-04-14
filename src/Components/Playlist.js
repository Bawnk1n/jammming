import React from 'react';
import { Tracklist } from './Tracklist';

export const Playlist = (props) => {

    return(
        <Tracklist results={props.playlistTracks}/>
    )
}