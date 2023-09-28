import { fetchMovieDetailsById } from 'api/fetchMovies';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const MovieDetails = () => {
  const [movie, setMovie] = useState('');
  const { id } = useParams();

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

  const {
    poster_path,
    original_title,
    release_date,
    vote_average,
    overview,
    genres,
  } = movie;

  return (
    <>
      <button type="button">Go back</button>
      <div>
        <img
          src={poster_path && `https://image.tmdb.org/t/p/w500${poster_path}`}
          alt={`${original_title} poster`}
          width="200px"
        />
        <div>
          <h2>{`${original_title} (${release_date?.slice(0, 4)})`}</h2>
          <p>{`User score: ${Math.ceil(vote_average * 10)}%`}</p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h3>Genres</h3>
          <ul>
            {genres?.map(genre => (
              <li key={genre.id}>{genre.name}</li>
            ))}
          </ul>
        </div>
      </div>
      <div>
        <h4>Additional information</h4>
        <ul>
          <li>Cast</li>
          <li>Reviews</li>
        </ul>
      </div>
    </>
  );
};
