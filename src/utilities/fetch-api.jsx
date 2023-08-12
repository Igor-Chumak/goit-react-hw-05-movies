import PropTypes from 'prop-types';
import axios from 'axios';
// const API_KEY = '30b0102eba46f206e4cdb2df1254a2c5';
const ACCESS_TOKEN =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMGIwMTAyZWJhNDZmMjA2ZTRjZGIyZGYxMjU0YTJjNSIsInN1YiI6IjY0ZDc2N2ZlMDAxYmJkMDBlMzViMmY3MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.arjSJ1yKD4ONmBdxPW4Nl-3pHH5kUcNLhLTD2FV7ec0';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
axios.defaults.headers = {
  accept: 'application/json',
  Authorization: `Bearer ${ACCESS_TOKEN}`,
};
// axios.defaults.params = {
//   key: API_KEY,
//   image_type: 'photo',
//   orientation: 'horizontal',
//   per_page: 12,
// };

export const getDataQuery = async (
  typeRequest,
  query = '',
  movie_id = null,
  page = 1
) => {
  const typeRequests = {
    getTrending: {
      url: 'trending/movie/day',
      params: { language: 'en-US' },
    },
    searchMovies: {
      url: 'search/movie',
      params: { language: 'en-US', query: { query } },
    },
    movieDetails: { url: `movie/${movie_id}`, params: { language: 'en-US' } },
    movieCredits: {
      url: `movie/${movie_id}/credits`,
      params: { language: 'en-US' },
    },
    movieReviews: {
      url: `movie/${movie_id}/reviews`,
      params: { language: 'en-US', page: { page } },
    },
  };

  let pathname = typeRequests[typeRequest.url];
  const requestParams = typeRequests[typeRequest].params;
  //  const requestParams = new URLSearchParams(typeRequests[typeRequest].params);
  return await axios.get(`${pathname}?${requestParams}`);
};

// export const getDataQuery = async (searchData, page = 1) => {
//   const searchParams = new URLSearchParams({
//     key: API_KEY,
//     image_type: 'photo',
//     orientation: 'horizontal',
//     per_page: 12,
//     q: searchData,
//     page: page,
//   });
//   const { data } = await axios.get(`?${searchParams}`);
//   //   const dataAPI = await axios.get(`?q=${searchData}&page=${page}`);
//   return data;
// };

getDataQuery.propType = {
  typeRequest: PropTypes.string.isRequired,
  query: PropTypes.string,
  movie_id: PropTypes.number,
  page: PropTypes.number,
};
