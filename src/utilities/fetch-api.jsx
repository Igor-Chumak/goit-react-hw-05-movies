import PropTypes from 'prop-types';
import axios from 'axios';
const API_KEY = '30b0102eba46f206e4cdb2df1254a2c5';
const API_TOKEN =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMGIwMTAyZWJhNDZmMjA2ZTRjZGIyZGYxMjU0YTJjNSIsInN1YiI6IjY0ZDc2N2ZlMDAxYmJkMDBlMzViMmY3MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.arjSJ1yKD4ONmBdxPW4Nl-3pHH5kUcNLhLTD2FV7ec0';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
// axios.defaults.headers.common['Authorization'] = API_KEY;
// axios.defaults.params = {
//   key: API_KEY,
//   image_type: 'photo',
//   orientation: 'horizontal',
//   per_page: 12,
// };

const typeRequests = {
  getTrending: 'trending/movie/day',
  searchMovies: 'search/movie',
  movieDetails: 'movie/{movie_id}',
  movieCredits: 'movie/{movie_id}/credits',
  movieReviews: 'movie/{movie_id}/reviews',
};

export const getDataQuery = async (searchData, page = 1) => {
  const searchParams = new URLSearchParams({
    key: API_KEY,
    image_type: 'photo',
    orientation: 'horizontal',
    per_page: 12,
    q: searchData,
    page: page,
  });
  const { data } = await axios.get(`?${searchParams}`);
  //   const dataAPI = await axios.get(`?q=${searchData}&page=${page}`);
  return data;
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
  searchData: PropTypes.string.isRequired,
  page: PropTypes.string,
};
