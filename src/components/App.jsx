import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from 'layouts/Layout';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const MoviesPage = lazy(() => import('../pages/MoviesPage/MoviesPage'));
const MovieDetails = lazy(() => import('../pages/MovieDetails/MovieDetails'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={
            <Suspense>
              <HomePage />
            </Suspense>
          }
        />
        <Route
          path="movies"
          element={
            <Suspense>
              <MoviesPage />
            </Suspense>
          }
        />
        <Route
          path="movies/:id"
          element={
            <Suspense>
              <MovieDetails />
            </Suspense>
          }
        >
          <Route
            path="cast"
            element={
              <Suspense>
                <Cast />
              </Suspense>
            }
          />
          <Route
            path="reviews"
            element={
              <Suspense>
                <Reviews />
              </Suspense>
            }
          />
        </Route>
      </Route>
    </Routes>
  );
};
