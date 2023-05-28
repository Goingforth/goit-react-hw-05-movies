import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import getData from 'service/API/getData';
import { optionsSearchQuery } from 'service/API/options';
import { toast } from 'react-toastify';
import MoviesScroll from 'components/MoviesScroll/MoviesScroll';

import { FormSearch, FormInput, FormButton } from './Movies.styled';
const Movies = () => {
  const [query, setQuery] = useState('');
  const [filmsByQuery, setFilmsByQuery] = useState([]);
  const location = useLocation();
  useEffect(() => {
    getData(optionsSearchQuery(query))
      .then(films => films.results)
      .then(films =>
        films.map(({ id, original_title }) => ({
          id,
          original_title,
        }))
      )
      .then(films => setFilmsByQuery(films));
  }, [query]);

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    const query = form.elements.searchQuery.value;
    if (query.trim() === '') {
      toast.error('Please enter a search topic !');
      return;
    }
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
      <MoviesScroll
        arrayMovies={filmsByQuery}
        pathID={''}
        location={location}
      />
    </div>
  );
};
export default Movies;
