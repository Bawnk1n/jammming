import React from 'react';

export const Track = (props) => {

return(
    <div>
        <h1>{props.songName}</h1> <br/>
        <h2>{props.artistName} {props.albumName}</h2>
    </div>
)
}