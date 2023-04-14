import React from 'react';
import { useState } from 'react';
import { SearchBar } from './SearchBar';
import { SearchResults } from './SearchResults';
import { Playlist } from './Playlist';
import './App.css'

export const App = () => {
    const[playlistTracks, setPlaylistTracks] = useState([
        {        
            trackId:1,
            trackName:'song1',
            artistName:'artist1',
            albumName:'album1'
        },
        {        
            trackId:2,
            trackName:'song2',
            artistName:'artist2',
            albumName:'album2'
        },
        {        
            trackId:3,
            trackName:'song3',
            artistName:'artist3',
            albumName:'album3'
        }
    ])
    const [searchResults, setSearchResults] = useState([
        {
            trackId:1,
            trackName:'searched song1',
            artistName:'artist1',
            albumName:'album1'
        },
        {
            trackId:2,
            trackName:'searched song2',
            artistName:'artist2',
            albumName:'album2'
        }
    ])
    const [playlistName, setPlaylistName] = useState('New Playlist')

    const addSong = (track) => {
        setPlaylistTracks([...playlistTracks, track])
    }

    const removeSong = (track) => {
        setPlaylistTracks(playlistTracks.filter(origtrack => origtrack !== track))
    }

    return(
        <div className = 'main'>
            <SearchBar />
            <div className='playlists'>
                <SearchResults searchResults={searchResults} addSong={addSong}/>
                <Playlist playlistTracks={playlistTracks} playlistName = {playlistName} removeSong={removeSong}/>
            </div>
        </div>
    )
}