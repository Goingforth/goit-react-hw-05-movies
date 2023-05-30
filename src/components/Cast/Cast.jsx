import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import getData from 'service/API/getData';
import { optionsCastByID } from 'service/API/options';
import { BlokCast, GalleryCast, Profile } from './Cast.styled';
import noimage from '../../images/noimg.png';
const Cast = () => {
  const { movieId } = useParams();
  const [consistPerformers, setConsistPerformers] = useState([]);
  useEffect(() => {
    getData(optionsCastByID(movieId))
      .then(cast => cast.cast)
      .then(cast =>
        cast.map(({ id, original_name, profile_path, character }) => ({
          id,
          original_name,
          profile_path,
          character,
        }))
      )
      .then(cast => setConsistPerformers(cast));
  }, [movieId]);

  return (
    <BlokCast>
      {consistPerformers.length > 0 ? (
        <div>
          {consistPerformers.map(
            ({ id, original_name, profile_path, character }) => {
              return (
                <GalleryCast key={id}>
                  {profile_path !== null ? (
                    <Profile
                      src={`https://image.tmdb.org/t/p/w500/${profile_path}`}
                      alt={original_name}
                    />
                  ) : (
                    <Profile src={noimage} alt={original_name} />
                  )}

                  <li>{original_name}</li>
                  <p>Character: {character}</p>
                </GalleryCast>
              );
            }
          )}
        </div>
      ) : (
        <div>
          <h2>We don't have cast for this movie.</h2>
        </div>
      )}
    </BlokCast>
  );
};
export default Cast;

Cast.propTypes = {
  id: PropTypes.number,
  original_name: PropTypes.string,
  profile_path: PropTypes.string,
  character: PropTypes.string,
};
// return (
//   <BlokCast>
//     {consistPerformers.map(({ id, original_name, profile_path, character }) => {
//       return (
//         <GalleryCast key={id}>
//           {profile_path !== null ? (
//             <Profile
//               src={`https://image.tmdb.org/t/p/w500/${profile_path}`}
//               alt={original_name}
//             />
//           ) : (
//             <Profile src={noimage} alt={original_name} />
//           )}

//           <li>{original_name}</li>
//           <p>Character: {character}</p>
//         </GalleryCast>
//       );
//     })}
//   </BlokCast>
// );
