import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import getData from 'service/API/getData';
import { optionsTrendMovies } from 'service/API/options';

import MoviesScroll from 'components/MoviesScroll/MoviesScroll';
import { TrendingHeader } from './Homepage.styled';

const HomePage = () => {
  const [trendFilms, setTrendFilms] = useState([]);
  const location = useLocation();
  useEffect(() => {
    getData(optionsTrendMovies)
      .then(films => films.results)
      .then(films =>
        films.map(({ id, original_title }) => ({
          id,
          original_title,
        }))
      )
      .then(films => setTrendFilms(films));
  }, []);

  return (
    <div>
      <TrendingHeader>Trending today</TrendingHeader>
      <MoviesScroll
        arrayMovies={trendFilms}
        pathID={'movies/'}
        location={location}
      />
    </div>
  );
};
export default HomePage;
