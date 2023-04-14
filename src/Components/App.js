import React from 'react';
import { useState } from 'react';
import { SearchBar } from './SearchBar';
import { SearchResults } from './SearchResults';
import { Playlist } from './Playlist';

export const App = () => {
    const[tracklist, setTracklist] = useState({
        trackOne:{        
            trackId:1,
            trackName:'song1',
            artistName:'artist1',
            albumName:'album1'
        },
        trackTwo:{        
            trackId:2,
            trackName:'song2',
            artistName:'artist2',
            albumName:'album2'
        },
        trackThree:{        
            trackId:3,
            trackName:'song3',
            artistName:'artist3',
            albumName:'album3'
        }
    })

    return(
        <div>
            <SearchBar />
            <div>
                <SearchResults />
                <Playlist />
            </div>
        </div>
    )
}