import React from 'react';
import { Tracklist } from './Tracklist';

export const Playlist = (props) => {

    return(
        <div>
            <h1>{props.playlistName}</h1>
            <Tracklist results={props.playlistTracks}
            changeSong={props.removeSong}
            isAdd={false}/>
        </div>
    )
}