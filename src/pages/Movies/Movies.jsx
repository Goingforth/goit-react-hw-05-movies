import { useState, useEffect } from 'react';

import { FormSearch, FormInput, FormButton } from './Movies.styled';
const Movies = () => {
  const [query, setQuery] = useState(null);
  useEffect(() => {
    console.log(`Movies by name ${query}`);
    // getData(optionsReviewsByID(movieId))
    //   .then(reviews => reviews.results)
    //   .then(reviews =>
    //     reviews.map(({ id, author, content }) => ({ id, author, content }))
    //   )
    //   .then(reviews => setReviewsInfo(reviews));
  }, [query]);
  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    const query = form.elements.searchQuery.value;
    setQuery(query);
    form.reset();
  };
  return (
    <div>
      <FormSearch onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="searchQuery"
          autocomplete="off"
          autoFocus={true}
          placeholder="Search movies by name"
        />

        <FormButton type="submit">Search</FormButton>
      </FormSearch>
    </div>
  );
};
export default Movies;
