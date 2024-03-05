import axios from 'axios';

// the movie API KEY
const API_KEY = 'b8a9918fa279466eb406add0f3a083b8';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
axios.defaults.params = {
  api_key: API_KEY,
};

// REFERENCE: https://developer.themoviedb.org/reference/trending-movies
export const fetchTrendingMovies = async () => {
  const response = await axios.get(`trending/movie/day`);
  return response.data.results;
};

// REFERENCE: https://developer.themoviedb.org/reference/search-movie
export const fetchMovieByQuery = async movieName => {
  const response = await axios.get(`search/movie?query=${movieName}`);
  return response.data.results;
};

// REFERENCE: https://developer.themoviedb.org/reference/movie-details
export const fetchMovieDetails = async movieId => {
  const response = await axios.get(`movie/${movieId}`);
  return response.data;
};

// REFERENCE: https://developer.themoviedb.org/reference/movie-credits
export const fetchMovieCast = async movieId => {
  const response = await axios.get(`movie/${movieId}/credits?`);
  return response.data.cast;
};

// REFERENCE: https://developer.themoviedb.org/reference/movie-reviews
export const fetchMovieReviews = async movieId => {
  const response = await axios.get(`movie/${movieId}/reviews?`);
  return response.data.results;
};
