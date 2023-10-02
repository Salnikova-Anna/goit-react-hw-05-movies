import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '7f7fb36d132031c575946338c2738074';

export const fetchTrendingMovies = async () => {
  const { data } = await axios(
    `${BASE_URL}trending/movie/week?api_key=${API_KEY}&language=en-US`
  );
  return data.results;
};

export const fetchMovieDetailsById = async id => {
  const { data } = await axios(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`);
  return data;
};

export const fetchMovieCast = async id => {
  const { data } = await axios(
    `${BASE_URL}movie/${id}/credits?api_key=${API_KEY}`
  );
  return data.cast;
};

export const fetchMovieReviews = async id => {
  const { data } = await axios(
    `${BASE_URL}movie/${id}/reviews?api_key=${API_KEY}`
  );
  return data.results;
};

export const fetchMoviesByQuery = async query => {
  const { data } = await axios(
    `${BASE_URL}search/movie?api_key=${API_KEY}&query=${query}`
  );
  return data.results;
};
