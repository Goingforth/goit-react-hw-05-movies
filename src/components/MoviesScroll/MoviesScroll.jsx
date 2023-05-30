import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { MovieLink, MoviesList } from './MoviesScroll.styled';
const MoviesScroll = ({ arrayMovies, pathID, location }) => {
  return (
    <MoviesList>
      {arrayMovies.map(({ id, original_title }) => {
        return (
          <MovieLink key={id}>
            <Link to={`${pathID}${id}`} state={{ from: location }}>
              {original_title}
            </Link>
          </MovieLink>
        );
      })}
    </MoviesList>
  );
};
export default MoviesScroll;
MoviesScroll.propTypes = {
  id: PropTypes.number,
  original_title: PropTypes.string,
};
