import { Link } from 'react-router-dom';

export const MoviesList = ({ moviesList }) => {
  return (
    <ul>
      {moviesList.map(({ id, original_title }) => (
        <li key={id}>
          <Link to={`/movies/${id}`}>{original_title}</Link>
        </li>
      ))}
    </ul>
  );
};
