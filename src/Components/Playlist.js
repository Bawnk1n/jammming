import React from 'react';
import { Tracklist } from './Tracklist';
import './Playlist.css';

export const Playlist = (props) => {

    const handleChangeName = (event) => {
        props.changeName(event.target.value)
    }

    const handleSavePlaylist = () => {
        props.savePlaylist(props.playlistTracks)
        console.log(props.playlistTracks, ' is saved')
    }

    return(
        <div className='playlist'>
            <input type='text' value={props.playlistName} onChange={handleChangeName}/>
            <Tracklist results={props.playlistTracks}
            changeSong={props.removeSong}
            isAdd={false}/>
            <button className='save-playlist' onClick={handleSavePlaylist}>Save Playlist</button>
        </div>
    )
}