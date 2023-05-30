import { useEffect, useRef, useState, Suspense } from 'react';
import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import getData from 'service/API/getData';
import { optionsMovieByID } from 'service/API/options';
import arrayNameToString from 'service/API/arrayNameToString';
import {
  BlokMovieDetails,
  Poster,
  Details,
  AdditionalInfo,
  AdditionalInfoItems,
  LinkGoBack,
  ButtonGoBack,
} from './MovieDetails.styled';
import noposter from '../../images/noposter.jpg';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState([]);
  const location = useLocation();
  const backLinklocationRef = useRef(location.state?.from ?? '/');

  useEffect(() => {
    getData(optionsMovieByID(movieId)).then(
      ({
        poster_path,
        original_title,
        title,
        overview,
        genres,
        popularity,
      }) => {
        setMovie({
          poster_path,
          original_title,
          title,
          overview,
          genres,
          popularity,
        });
      }
    );
  }, [movieId]);

  const { poster_path, original_title, title, overview, genres, popularity } =
    movie;
  return (
    <div>
      <ButtonGoBack>
        <LinkGoBack to={backLinklocationRef.current}>
          &#8656; Go back
        </LinkGoBack>
      </ButtonGoBack>

      <BlokMovieDetails>
        {movie.poster_path !== null ? (
          <Poster
            src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
            alt={title}
          />
        ) : (
          <Poster src={noposter} alt={title} />
        )}

        <Details>
          <li>
            <h2>{original_title}</h2>
          </li>
          <li>
            <h4>Popularity </h4>
          </li>
          <li>{popularity}</li>
          <li>
            <h4>Overview</h4>
          </li>
          <li>{overview}</li>
          <li>
            <h4>Genres</h4>
          </li>
          <li>{arrayNameToString(genres)}</li>
        </Details>
      </BlokMovieDetails>
      <AdditionalInfo>
        <h4>Additional information</h4>
        <AdditionalInfoItems>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </AdditionalInfoItems>
      </AdditionalInfo>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};
export default MovieDetails;
MovieDetails.propTypes = {
  poster_path: PropTypes.string,
  original_title: PropTypes.string,
  title: PropTypes.string,
  overview: PropTypes.string,
  genres: PropTypes.array,
  popularity: PropTypes.number,
};
