import { useState, useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import PropTypes from 'prop-types';

import getData from 'service/API/getData';
import { optionsSearchQuery } from 'service/API/options';

import { toast } from 'react-toastify';

import MoviesScroll from 'components/MoviesScroll/MoviesScroll';
import { FormSearch, FormInput, FormButton } from './Movies.styled';

const Movies = () => {
  const [filmsByQuery, setFilmsByQuery] = useState([]);
  const location = useLocation();

  const [searchParams, setSearchParams] = useSearchParams();
  const querySaved = searchParams.get('query');

  useEffect(() => {
    if (querySaved === null) {
      return;
    }
    getData(optionsSearchQuery(querySaved))
      .then(films => films.results)
      .then(films =>
        films.map(({ id, original_title }) => ({
          id,
          original_title,
        }))
      )
      .then(films => setFilmsByQuery(films));
  }, [querySaved]);

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    const query = form.elements.searchQuery.value;
    if (query.trim() === '') {
      toast.error('Please enter a search topic !');
      return;
    }
    setSearchParams({ query: query });
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
Movies.propTypes = {
  id: PropTypes.number,
  original_title: PropTypes.string,
};
