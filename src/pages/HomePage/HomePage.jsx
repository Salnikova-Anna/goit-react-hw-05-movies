import { fetchTrendingMovies } from 'api/fetchMovies';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { useEffect, useState } from 'react';

const HomePage = () => {
  const [moviesList, setMoviesList] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    try {
      const getTrendingMoviesList = async () => {
        const moviesList = await fetchTrendingMovies();
        setMoviesList(moviesList);
      };
      getTrendingMoviesList();
    } catch (error) {
      setError('Something went wrong. Please reload the page');
    }
  }, []);

  return (
    <>
      <h2 style={{ paddingLeft: '65px' }}>Trending today</h2>
      <MoviesList moviesList={moviesList} />
      {error && <p>{error}</p>}
    </>
  );
};

export default HomePage;
