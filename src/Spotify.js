


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
    }
}

export default Spotify;

