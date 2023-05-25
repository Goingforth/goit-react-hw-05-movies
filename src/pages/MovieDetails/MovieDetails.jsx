import { useEffect, useState } from 'react';
import { useParams, Link, Outlet } from 'react-router-dom';
import getData from 'service/API/getData';
import { optionsMovieByID } from 'service/API/options';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({ title: 'new' });

  useEffect(() => {
    console.log('Render bi ID');
    getData(optionsMovieByID(movieId))
      //.then(film => setMovie(film));
      .then(
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
  // const image_src = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
  // console.log(image_src);
  return (
    <div>
      <img
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        alt={movie.title}
      />
      <ul>
        <li>
          <h2>{movie.original_title}</h2>
        </li>
        <li>{movie.popularity}</li>
        {/* <li>{movie.genres}</li> */}
        <li>{movie.overview}</li>
      </ul>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="Reviews">Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};
export default MovieDetails;
