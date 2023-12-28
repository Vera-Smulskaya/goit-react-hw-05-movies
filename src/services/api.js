import axios from 'axios';

const KEY = '7e63573e5f6a11223e01d9dfd6333e93';

export async function fetchMovies() {
  const response = await axios(
    'https://api.themoviedb.org/3/trending/movie/day?api_key=7e63573e5f6a11223e01d9dfd6333e93'
  );
  if (response.status === 404) {
    Notiflix.Notify.failure('Sorry, some error occured.');
    return Promise.reject();
  }
  return response;
}
