import React from 'react';
import { Track } from './Track';
import './Tracklist.css'

export const Tracklist = (props) => {
    

    return (
        <div className='tracklist'>
            {props.results.map((track) => {
                return (
                    <Track key={track.id} 
                    track={track}
                    songName={track.trackName} 
                    artistName={track.artistName} 
                    albumName={track.albumName} 
                    changeSong={props.changeSong}
                    previewURL={track.previewURL}
                    isAdd={props.isAdd}
                    />
                )
            })}
        </div>
    )
}