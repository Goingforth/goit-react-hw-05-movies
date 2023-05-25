export const optionsTrendMovies = {
  method: 'GET',
  url: 'https://api.themoviedb.org/3/trending/movie/day',
  params: { language: 'en-US' },
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZjc0YjdkOTk5OTdiNWYzYzQ0MGY3YTgxMzBmZGE1NCIsInN1YiI6IjY0NmYwODk2MTdjNDQzMDBhOWVkYWQ4MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XtyRL4EwN0GuyLC3DZJht20wxfHDS1peFCSQYFLhH6Q',
  },
};

//search for ID

export const optionsMovieByID = movieId => ({
  method: 'GET',
  url: `https://api.themoviedb.org/3/movie/${movieId}`,
  params: { language: 'en-US' },
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZjc0YjdkOTk5OTdiNWYzYzQ0MGY3YTgxMzBmZGE1NCIsInN1YiI6IjY0NmYwODk2MTdjNDQzMDBhOWVkYWQ4MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XtyRL4EwN0GuyLC3DZJht20wxfHDS1peFCSQYFLhH6Q',
  },
});

// search for name

// const optionsSearchQuery = {
//   method: 'GET',
//   url: 'https://api.themoviedb.org/3/search/movie',
//   params: {
//     query: `${query}`,
//     language: 'en-US',
//     page: '1',
//   },
//   headers: {
//     accept: 'application/json',
//     Authorization:
//       'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZjc0YjdkOTk5OTdiNWYzYzQ0MGY3YTgxMzBmZGE1NCIsInN1YiI6IjY0NmYwODk2MTdjNDQzMDBhOWVkYWQ4MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XtyRL4EwN0GuyLC3DZJht20wxfHDS1peFCSQYFLhH6Q',
//   },
// };

// cast - artist

// const options = {
//   method: 'GET',
//   url: 'https://api.themoviedb.org/3/movie/603692/credits',
//   params: { language: 'en-US' },
//   headers: {
//     accept: 'application/json',
//     Authorization:
//       'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZjc0YjdkOTk5OTdiNWYzYzQ0MGY3YTgxMzBmZGE1NCIsInN1YiI6IjY0NmYwODk2MTdjNDQzMDBhOWVkYWQ4MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XtyRL4EwN0GuyLC3DZJht20wxfHDS1peFCSQYFLhH6Q',
//   },
// };

//reviews

// const options = {
//   method: 'GET',
//   url: 'https://api.themoviedb.org/3/movie/603692/reviews',
//   params: { language: 'en-US', page: '1' },
//   headers: {
//     accept: 'application/json',
//     Authorization:
//       'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZjc0YjdkOTk5OTdiNWYzYzQ0MGY3YTgxMzBmZGE1NCIsInN1YiI6IjY0NmYwODk2MTdjNDQzMDBhOWVkYWQ4MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XtyRL4EwN0GuyLC3DZJht20wxfHDS1peFCSQYFLhH6Q',
//   },
// };
