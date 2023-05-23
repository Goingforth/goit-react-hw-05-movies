import { Link, Outlet } from 'react-router-dom';
const Movies = () => {
  return (
    <main>
      <h1>Movies page</h1>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="Reviews">Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </main>
  );
};
export default Movies;
