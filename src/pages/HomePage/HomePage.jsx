import { useState, useEffect } from 'react';
import getData from 'service/API/getData';
import { optionsTrendMovies } from 'service/API/options';
import { Link } from 'react-router-dom';
import { TrendingHeader, TrendingList, TrendMovie } from './Homepage.styled';

const HomePage = () => {
  const [trendFilms, setTrendFilms] = useState([]);
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
      <TrendingList>
        {trendFilms.map(({ id, original_title }) => {
          return (
            <TrendMovie key={id}>
              <Link to={`movies/${id}`}>{original_title}</Link>
            </TrendMovie>
          );
        })}
      </TrendingList>
    </div>
  );
};
export default HomePage;
