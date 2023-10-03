import axios from 'axios';

const API_KEY = '7f7fb36d132031c575946338c2738074';
const params = {
  params: {
    api_key: API_KEY,
  },
};

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export const fetchTrendingMovies = async () => {
  const { data } = await axios(`trending/movie/week`, params);
  return data.results;
};

export const fetchMovieDetailsById = async id => {
  const { data } = await axios(`/movie/${id}`, params);
  return data;
};

export const fetchMovieCast = async id => {
  const { data } = await axios(`movie/${id}/credits`, params);
  return data.cast;
};

export const fetchMovieReviews = async id => {
  const { data } = await axios(`movie/${id}/reviews`, params);
  return data.results;
};

export const fetchMoviesByQuery = async query => {
  const { data } = await axios(`search/movie?query=${query}`, params);
  return data.results;
};
