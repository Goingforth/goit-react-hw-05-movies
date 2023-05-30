import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

// import HomePage from 'pages/HomePage/HomePage';
// import Movies from 'pages/Movies/Movies';

import SharedLayout from 'components/SharedLayout/SharedLayout';
//import MovieDetails from 'pages/MovieDetails/MovieDetails';

// import Cast from 'components/Cast/Cast';
// import Reviews from 'components/Reviews/Reviews';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const Movies = lazy(() => import('pages/Movies/Movies'));
const MovieDetails = lazy(() => import('pages/MovieDetails/MovieDetails'));
const Cast = lazy(() => import('components/Cast/Cast'));
const Reviews = lazy(() => import('components/Reviews/Reviews'));

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
      <ToastContainer autoClose={3000} theme={'colored'} />
    </div>
  );
};
export default App;
