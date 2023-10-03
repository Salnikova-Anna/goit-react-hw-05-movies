import { Link, useLocation } from 'react-router-dom';

export const MoviesList = ({ moviesList }) => {
  const location = useLocation();

  return (
    <ul style={{ paddingLeft: '85px' }}>
      {moviesList.map(({ id, title }) => (
        <li key={id} style={{ marginBottom: 5 }}>
          <Link state={location} to={`/movies/${id}`}>
            {title}
          </Link>
        </li>
      ))}
    </ul>
  );
};
