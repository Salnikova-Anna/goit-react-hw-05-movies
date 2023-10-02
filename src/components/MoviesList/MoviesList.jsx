import { Link, useLocation } from 'react-router-dom';

export const MoviesList = ({ moviesList }) => {
  const location = useLocation();

  return (
    <ul>
      {moviesList.map(({ id, title }) => (
        <li key={id}>
          <Link state={location} to={`/movies/${id}`}>
            {title}
          </Link>
        </li>
      ))}
    </ul>
  );
};
