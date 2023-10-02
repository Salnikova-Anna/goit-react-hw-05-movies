import Layout from 'layouts/Layout';
import HomePage from 'pages/HomePage/HomePage';
import { MovieDetails } from 'pages/MovieDetails/MovieDetails';
import MoviesPage from 'pages/MoviesPage/MoviesPage';
import { Routes, Route } from 'react-router-dom';
import { Cast } from './Cast/Cast';
import { Reviews } from './Reviews/Reviews';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="movies" element={<MoviesPage />} />
        <Route path="movies/:id" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
    </Routes>
  );
};
