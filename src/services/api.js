import axios from 'axios';

const KEY = '7e63573e5f6a11223e01d9dfd6333e93';
const baseUrl = 'https://api.themoviedb.org/3/';
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
  },
};

export const fetchMoviesTrending = async () => {
  const { data } = await axios.get(
    `${baseUrl}trending/all/day?api_key=${KEY}`,
    options
  );

  return data.results;
};

export const fetchMovieDetails = async movieId => {
  const query = await axios.get(
    `${baseUrl}movie/${movieId}?api_key=${KEY}&language=en-US`,
    options
  );
  const { data } = query;

  return data;
};

export const fetchMovieCast = async movieId => {
  const { data } = await axios.get(
    `${baseUrl}movie/${movieId}/credits?api_key=${KEY}&include_adult=false&language=en-US`,
    options
  );

  return data.cast;
};

export const fetchMovieReviews = async movieId => {
  const { data } = await axios.get(
    `${baseUrl}movie/${movieId}/reviews?api_key=${KEY}&include_adult=false&language=en-US`,
    options
  );

  return data.results;
};

export const fetchSearchedMovie = async queryValue => {
  const { data } = await axios.get(
    `${baseUrl}search/movie?api_key=${KEY}&query=${queryValue}&include_adult=false&language=en-US`,
    options
  );
  return data;
};
