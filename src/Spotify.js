

let user_access_token;
var client_id = '1ed057b665a141699e61143e10af47e8';
var redirect_uri = 'http://localhost:3000';


const Spotify = {
     getAccessToken(user_access_token) {
        if(user_access_token){
            return user_access_token;
        }

        const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
        const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);

        if(accessTokenMatch && expiresInMatch){
            
            user_access_token = accessTokenMatch[1];
            const expiresIn = Number(expiresInMatch[1])

            window.setTimeout(() => user_access_token = '', expiresIn * 1000);
            window.history.pushState('Access Token', null, '/');
            return user_access_token;
            
        } else {
            var url = 'https://accounts.spotify.com/authorize';
            url += '?response_type=token';
            url += '&client_id=' + encodeURIComponent(client_id);
            url += '&redirect_uri=' + encodeURIComponent(redirect_uri);
            window.location = url;
            
        }

    },
    search(term){
        user_access_token = this.getAccessToken();

        return fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`, {
            headers:{
                Authorization: `Bearer ${user_access_token}`
            }
        }).then(response => {
            return response.json();
        }).then(jsonResponse => {
            if(!jsonResponse.tracks){
                return [];
            }
            return jsonResponse.tracks.items.map(track => ({
                trackId: track.id,
                trackName: track.name,
                artistName: track.artists[0].name,
                albumName: track.album.name,
                uri: track.uri,
                previewURL: track.preview_url
                
            }))
        })
    },
    savePlaylist(playlistName, trackURIs){
        if(!playlistName || !trackURIs.length){
            return
        }
        const accessToken = Spotify.getAccessToken();
        const headers = {Authorization: `Bearer ${accessToken}`};
        let userID;

        return fetch('https://api.spotify.com/v1/me', {headers: headers}
        ).then(response => response.json()
        ).then(jsonResponse => {
            userID = jsonResponse.id;
            return fetch(`https://api.spotify.com/v1/users/${userID}/playlists`, {
                headers: headers,
                method: 'POST',
                body: JSON.stringify({name: playlistName})
            }).then(response => response.json()
            ).then(jsonResponse => {
                const playlistID = jsonResponse.id;
                return fetch(`https://api.spotify.com/v1/users/${userID}/playlists/${playlistID}/tracks`, {
                    headers: headers,
                    method: 'POST',
                    body: JSON.stringify({uris: trackURIs})
                })
            })
        })

    }
}

export default Spotify;

