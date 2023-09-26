import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '7f7fb36d132031c575946338c2738074';

export const fetchTrendingMovies = async () => {
  const { data } = await axios(
    `${BASE_URL}trending/movie/day?api_key=${API_KEY}`
  );
  return data;
};
