import { fetchMoviesByQuery } from 'api/fetchMovies';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const MoviesPage = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const currentQuery = searchParams.get('query');
    if (!currentQuery) return;

    const getMoviesByQuery = async () => {
      try {
        const searchedMoviesList = await fetchMoviesByQuery(currentQuery);
        setMovies(searchedMoviesList);
      } catch (error) {
        console.log(error);
      }
    };
    getMoviesByQuery();
  }, [searchParams]);

  const handleChange = ({ target: { value } }) => {
    setQuery(value);
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    setSearchParams({ query });
    setQuery('');
  };
  return (
    <>
      <form onSubmit={handleSubmit} style={{ margin: '25px 0 0 30px' }}>
        <input
          type="text"
          onChange={handleChange}
          value={query}
          style={{ marginRight: 15, width: 250 }}
        />
        <button type="submit">Search</button>
      </form>
      {movies.length > 0 && <MoviesList moviesList={movies} />}
    </>
  );
};

export default MoviesPage;
