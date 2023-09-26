import { fetchTrendingMovies } from 'api/fetchMovies';
import { useEffect, useState } from 'react';

const HomePage = () => {
  const [moviesList, setMoviesList] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    try {
      const getTrendingMoviesList = async () => {
        const moviesList = await fetchTrendingMovies();
        const moviesListTitles = moviesList.results.map(movie => movie.title);
        setMoviesList(moviesListTitles);
      };
      getTrendingMoviesList();
    } catch (error) {
      setError('Sorry. Please, try again');
    }
  }, []);

  return (
    <>
      <h2>Trending today</h2>
      <ul>
        {moviesList.map(movieTitle => (
          <li key={movieTitle}>{movieTitle}</li>
        ))}
      </ul>
      {error && <p>Sorry. {error}</p>}
    </>
  );
};

export default HomePage;
