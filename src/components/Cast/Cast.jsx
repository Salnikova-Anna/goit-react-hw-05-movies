import { fetchMovieCast } from 'api/fetchMovies';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const Cast = () => {
  const { id } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    try {
      const getCast = async () => {
        const cast = await fetchMovieCast(id);
        setCast(cast);
      };
      getCast();
    } catch (error) {
      console.log(error);
    }
  }, [id]);

  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

  return (
    <ul>
      {cast.map(({ id, profile_path, name, character }) => (
        <li key={id}>
          <img
            src={
              profile_path
                ? `https://image.tmdb.org/t/p/w500${profile_path}`
                : defaultImg
            }
            alt={`${name}`}
            width="100px"
          />
          <p>{name}</p>
          <p>{`Character: ${character}`}</p>
        </li>
      ))}
    </ul>
  );
};
