import { Routes, Route } from 'react-router-dom';
import HomePage from 'pages/HomePage/HomePage';
import Movies from 'pages/Movies/Movies';
import SharedLayout from 'components/SharedLayout/SharedLayout';
import MovieDetails from 'pages/MovieDetails/MovieDetails';
import Cast from 'components/Cast/Cast';
import Reviews from 'components/Reviews/Reviews';
// import NotFound from 'pages/NotFound/NotFound';
// import ProductDetails from 'pages/ProductDetails/ProductDetails';
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
    </div>
  );
};
export default App;
