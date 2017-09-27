import axios from 'axios';

const searchSpotify = (searchItem) => new Promise((resolve, reject) => {

    const url = `https://api.spotify.com/v1/search?q=${searchItem}&type=track`;

    const myClientInfo = {
        clientID: '439fe1d2fe8941829908a84e45e60522',
        clientSecret: '9ee52ed659e14e64a2d38ae54454ea9e'
    };

    const result = axios({
        method: 'post',
        url: 'https://accounts.spotify.com/api/token',
        data: {
            grant_type: 'client_credentials'
        },
        header: {
            'Authorization': 'Basic ' + btoa(`${myClientInfo.clientID}:${myClientInfo.clientSecret}`),
        },
    });

    result.then(({data}) => resolve(data))
        .catch((err) => reject(err));
});

export default searchSpotify;