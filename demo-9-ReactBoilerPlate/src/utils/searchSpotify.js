import axios from 'axios';


const searchSpotify = (searchItem) => new Promise((resolve, reject) => {

    // 获取专辑 https://freemusicarchive.org/api/get/albums.xml?api_key=WS35J1MULKPQQOEI&limit=10
    /*
    {
        "page_title": "Free Music Archive",
        "page_cache_key": "anonuser_pagecache_/api/trackSearch?q=snow&limit=100",
        "aRows": [
            "[Borful Tang] Smyrna Snow Walk (416)",
            "[Bonne Aparte] Taste My Snow (3401)"
        ]
    }
    */
    axios.get(`https://freemusicarchive.org/api/trackSearch?q=${searchItem}&limit=10`)
        .then(({data}) => resolve(data))
        .catch((err) => reject(err));
});

export default searchSpotify;