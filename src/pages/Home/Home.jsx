import React, { useEffect, useState } from 'react';
import Loader from 'components/Loader/Loader';
import MovieList from 'components/MoviesList/MoviesList';
import { fetchMoviesTrending } from 'services/api';
import css from './Home.module.css';

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetchMoviesTrending()
      .then(data => setMovies(data))
      .catch(setError)
      .finally(setIsLoading(false));
  }, []);

  return (
    <div className={css.homeContainer}>
      <h1 className={css.homeTitle}>Trending today</h1>

      {isLoading && <Loader />}
      {!error && <MovieList movies={movies} />}
    </div>
  );
}
