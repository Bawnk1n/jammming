import React from 'react';
import './track.css'

export const Track = (props) => {

    let isAdd = props.isAdd;

    const handleChangeSong = (event) => {
        props.changeSong(props.track)
    }

return(
    <div className='track-div'>
        <h1>{props.songName}</h1> 
        <h2>{props.artistName} {props.albumName}</h2>
        <div className='btn-and-audio'>
            {isAdd ? <button onClick={handleChangeSong}>ADD</button> : <button onClick={handleChangeSong}>REMOVE</button>}
            <audio src = {props.previewURL} controls />
        </div>
    </div>
)
}