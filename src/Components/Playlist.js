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
            <input className='playlistName' type='text' value={props.playlistName} onChange={handleChangeName}/>
            <button className='save-playlist-btn' onClick={handleSavePlaylist}>Save Playlist</button>
            <Tracklist results={props.playlistTracks}
            changeSong={props.removeSong}
            isAdd={false}/>
            
        </div>
    )
}