import { useEffect, useState } from 'react';
import { useParams, Link, Outlet } from 'react-router-dom';
import getData from 'service/API/getData';
import { optionsMovieByID } from 'service/API/options';
import {
  BlokMovieDetails,
  Poster,
  Details,
  AdditionalInfo,
  AdditionalInfoItems,
} from './MovieDetails.styled';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState([
    // { id: 28, name: 'Action' },
    // { id: 53, name: 'Thriller' },
    // { id: 80, name: 'Crime' },
  ]);
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
      <BlokMovieDetails>
        <Poster
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt={movie.title}
        />
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
      <Outlet />
    </div>
  );
};
export default MovieDetails;
