import { fetchMovieDetailsById } from 'api/fetchMovies';
import { useEffect, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';

const MovieDetails = () => {
  const [movie, setMovie] = useState('');
  const { id } = useParams();

  const location = useLocation();

  const backLink = location.state?.from ?? '/';

  useEffect(() => {
    try {
      const getMovieDetails = async () => {
        const movieDetails = await fetchMovieDetailsById(id);
        setMovie(movieDetails);
      };
      getMovieDetails();
    } catch (error) {
      console.log(error);
    }
  }, [id]);

  if (!movie) return;

  const { poster_path, title, release_date, vote_average, overview, genres } =
    movie;

  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

  return (
    <>
      <Link
        to={backLink}
        style={{ marginTop: 20, marginBottom: 10, marginLeft: 25 }}
      >
        Go back
      </Link>
      <div style={{ display: 'flex', gap: '20px', marginLeft: 25 }}>
        <img
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w500${poster_path}`
              : defaultImg
          }
          alt={`${title} poster`}
          width="200px"
        />
        <div>
          <h2>{`${title} (${release_date?.slice(0, 4)})`}</h2>
          <p>{`User score: ${Math.ceil(vote_average * 10)}%`}</p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h3>Genres</h3>
          <ul
            style={{ display: 'flex', gap: 10, listStyle: 'none', padding: 0 }}
          >
            {genres?.map(genre => (
              <li key={genre.id}>{genre.name}</li>
            ))}
          </ul>
        </div>
      </div>
      <div style={{ marginLeft: 25 }}>
        <h4>Additional information</h4>
        <ul>
          <li>
            <Link to={`/movies/${id}/cast`} state={location.state}>
              Cast
            </Link>
          </li>
          <li>
            <Link to={`/movies/${id}/reviews`} state={location.state}>
              Reviews
            </Link>
          </li>
          <Outlet />
        </ul>
      </div>
    </>
  );
};

export default MovieDetails;
