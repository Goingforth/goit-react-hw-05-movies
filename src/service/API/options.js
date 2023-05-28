const BASE__URL = 'https://api.themoviedb.org/3';
const optionsDefault = {
  method: 'GET',
  params: { language: 'en-US' },
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZjc0YjdkOTk5OTdiNWYzYzQ0MGY3YTgxMzBmZGE1NCIsInN1YiI6IjY0NmYwODk2MTdjNDQzMDBhOWVkYWQ4MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XtyRL4EwN0GuyLC3DZJht20wxfHDS1peFCSQYFLhH6Q',
  },
};
// search trend movies
export const optionsTrendMovies = {
  ...optionsDefault,
  url: `${BASE__URL}/trending/movie/day`,
};
//search for ID

export const optionsMovieByID = movieId => ({
  ...optionsDefault,
  url: `${BASE__URL}/movie/${movieId}`,
});

// search for name

export const optionsSearchQuery = query => ({
  ...optionsDefault,
  url: `${BASE__URL}/search/movie`,
  params: {
    query: `${query}`,
    page: '1',
    language: 'en-US',
  },
});

// cast - artist

export const optionsCastByID = movieId => ({
  ...optionsDefault,
  url: `${BASE__URL}/movie/${movieId}/credits`,
});

//reviews

export const optionsReviewsByID = movieId => ({
  ...optionsDefault,
  url: `${BASE__URL}/movie/${movieId}/reviews`,
  params: { language: 'en-US', page: '1' },
});
