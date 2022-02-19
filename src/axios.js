import axios from 'axios';

/** base url to make request to the themoviedatabase [TMDB] */

const instance = axios.create({
	baseURL: 'https://api.themoviedb.org/3'
});

// instance.get('/navbar');
// https://api.themoviedb.org/3/navbar

export default instance; 
