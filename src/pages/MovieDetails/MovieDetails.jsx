import { useEffect, useRef, useState, Suspense } from 'react';
import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import getData from 'service/API/getData';
import { optionsMovieByID } from 'service/API/options';
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
  const [movie, setMovie] = useState([
    // { id: 28, name: 'Action' },
    // { id: 53, name: 'Thriller' },
    // { id: 80, name: 'Crime' },
  ]);
  const location = useLocation();
  const backLinklocationRef = useRef(location.state?.from ?? '/');

  // const [genresString, setGenresString] = useState('');

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
    //.then(() => (genresData = movie.genres));
  }, [movieId]);

  // const genrisData = () => {
  //   let tempGenres = [];
  //   movie.genres.forEach(genre => {
  //     tempGenres.push(genre.name);
  //   });
  //   let tempGenresString = tempGenres.join(', ');
  //   return tempGenresString;
  // };
  // console.log(genrisData());

  return (
    <div>
      <ButtonGoBack>
        <LinkGoBack to={backLinklocationRef.current}>
          &#8656; Go back
        </LinkGoBack>
      </ButtonGoBack>

      {/* <Link to={backLinklocationRef.current}>
        <ButtonGoBack>Go back</ButtonGoBack>
      </Link> */}
      <BlokMovieDetails>
        {movie.poster_path !== null ? (
          <Poster
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt={movie.title}
          />
        ) : (
          <Poster src={noposter} alt={movie.title} />
        )}

        <Details>
          <li>
            <h2>{movie.original_title}</h2>
          </li>
          <li>
            <h4>Popularity </h4>
          </li>
          <li>{movie.popularity}</li>
          <li>
            <h4>Overview</h4>
          </li>
          <li>{movie.overview}</li>
          <li>
            <h4>Genres</h4>
          </li>
          <li>genrisData</li>
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
