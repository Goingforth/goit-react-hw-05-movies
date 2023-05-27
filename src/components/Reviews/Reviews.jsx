import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import getData from 'service/API/getData';
import { optionsReviewsByID } from 'service/API/options';
import { BlockReviews, BlockReview } from './Reviews.styled';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviewsInfo, setReviewsInfo] = useState([]);
  useEffect(() => {
    getData(optionsReviewsByID(movieId))
      .then(reviews => reviews.results)
      .then(reviews =>
        reviews.map(({ id, author, content }) => ({ id, author, content }))
      )
      .then(reviews => setReviewsInfo(reviews));
  }, [movieId]);

  return (
    <BlockReviews>
      {reviewsInfo.length > 0 ? (
        <BlockReviews>
          {reviewsInfo.map(({ id, author, content }) => {
            return (
              <BlockReview key={id}>
                <li>
                  <h4>Author: {author}</h4>
                </li>
                <li>{content}</li>
              </BlockReview>
            );
          })}
        </BlockReviews>
      ) : (
        <div>
          <h2>We don't have reviews for this movie.</h2>
        </div>
      )}
    </BlockReviews>
  );
};
export default Reviews;
