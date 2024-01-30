import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';
import Notiflix from 'notiflix';
import Loader from 'components/Loader/Loader';
import MovieList from 'components/MoviesList/MoviesList';
import css from './Movies.module.css';

const KEY = '7e63573e5f6a11223e01d9dfd6333e93';

export default function Movies() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchedMovie, setSearchedMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const queryValue = searchParams.get('query');

  const onFormSubmit = event => {
    event.preventDefault();
    const valueSearch = event.currentTarget.elements.searchKey.value;
    setSearchParams({ query: valueSearch });
  };

  useEffect(() => {
    if (!queryValue) return;
    const fetchSearchedMovie = async () => {
      try {
        setIsLoading(true);
        const { data } = await axios.get(
          `https://api.themoviedb.org/3/search/movie?api_key=${KEY}&query=${queryValue}&include_adult=false&language=en-US`
        );
        setSearchedMovie(data.results);
        if (data.results.length === 0) {
          setSearchParams();
          setSearchedMovie('');

          Notiflix.Notify.failure('There are no films. Please try again.');
          return;
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchSearchedMovie();
  }, [queryValue, setSearchParams]);

  return (
    <div className={css.formContainer}>
      <form onSubmit={onFormSubmit}>
        <label>
          <input
            type="text"
            name="searchKey"
            className={css.formInput}
            required
            placeholder="what movie are you looking for?"
          />
        </label>
        <button className={css.formButton} type="submit">
          Search
        </button>
      </form>

      {isLoading && <Loader />}
      {!error && <MovieList movies={searchedMovie} />}
    </div>
  );
}
