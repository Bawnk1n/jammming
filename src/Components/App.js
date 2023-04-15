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
            albumName:'album1',
            uri:1
        },
        {        
            trackId:2,
            trackName:'song2',
            artistName:'artist2',
            albumName:'album2',
            uri:2
        },
        {        
            trackId:3,
            trackName:'song3',
            artistName:'artist3',
            albumName:'album3',
            uri:3
        }
    ])
    const [searchResults, setSearchResults] = useState([
        {
            trackId:1,
            trackName:'searched song1',
            artistName:'artist1',
            albumName:'album1',
            uri:1
        },
        {
            trackId:2,
            trackName:'searched song2',
            artistName:'artist2',
            albumName:'album2',
            uri:2
        }
    ])
    const [playlistName, setPlaylistName] = useState('New Playlist')

    const addSong = (track) => {
        setPlaylistTracks([...playlistTracks, track])
    }

    const removeSong = (track) => {
        setPlaylistTracks(playlistTracks.filter(origtrack => origtrack !== track))
    }

    const changePlaylistName = (input) => {
        setPlaylistName(input)
    }

    const savePlaylist = (playlistArray) => {
        const saveToSpotify = [];
        for (let i=0; i<playlistArray.length; i++){
            saveToSpotify.push(playlistArray.uri)
        }
        setPlaylistTracks([])
        return saveToSpotify;
    }

    return(
        <div className = 'main'>
            <SearchBar />
            <div className='playlists'>

                <SearchResults searchResults={searchResults} 
                addSong={addSong}
                />

                <Playlist playlistTracks={playlistTracks} 
                playlistName = {playlistName} 
                removeSong={removeSong}
                changeName={changePlaylistName}
                savePlaylist={savePlaylist}
                />

            </div>
        </div>
    )
}