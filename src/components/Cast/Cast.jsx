import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import getData from 'service/API/getData';
import { optionsCastByID } from 'service/API/options';
const Cast = () => {
  const { movieId } = useParams();
  const [consistPerformer, setConsistPerformer] = useState([]);
  useEffect(() => {
    getData(optionsCastByID(movieId))
      .then(cast => cast.cast)
      .then(cast => setConsistPerformer(cast));
  }, [movieId]);
  // original_name,profile_path,character

  return (
    <div>
      <h1>Cast page</h1>
    </div>
  );
};
export default Cast;
