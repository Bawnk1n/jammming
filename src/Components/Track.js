import React from 'react';

export const Track = (props) => {

    let isAdd = props.isAdd;

    const handleChangeSong = (event) => {
        props.changeSong(props.track)
    }

return(
    <div>
        <h1>{props.songName}</h1> 
        <h2>{props.artistName} {props.albumName}</h2>
        {isAdd ? <button onClick={handleChangeSong}>+</button> : <button onClick={handleChangeSong}>-</button>}
        <audio src = {props.previewURL} controls />
        
    </div>
)
}