import React from 'react';
import { useState, useEffect } from 'react';
import { SearchBar } from './SearchBar';
import { SearchResults } from './SearchResults';
import { Playlist } from './Playlist';
import './App.css'
import Spotify from '../Spotify';
import { SignIn } from './SignIn';

export const App = () => {
    const[playlistTracks, setPlaylistTracks] = useState([])
    const [searchResults, setSearchResults] = useState([])
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

    const search = async (term) => {
        setSearchResults([]);
        const result = await Spotify.search(term);
        
        setSearchResults(result);
    };

    const signIn = async () => {
        await Spotify.getAccessToken();
    }

    useEffect(() => {

        const storedResults = Spotify.getStoredSearchResults();
        if (storedResults) {
            search(storedResults);
            
        }
    }, []);
    
    return(
        <div className = 'main'>
            <SignIn SignIn={signIn}/>
            <SearchBar onSearch={search}/>
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