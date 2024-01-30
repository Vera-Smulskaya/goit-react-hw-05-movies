import React, { Suspense, useEffect, useRef, useState } from 'react';
import {
  Link,
  NavLink,
  Route,
  Routes,
  useLocation,
  useParams,
} from 'react-router-dom';
import Loader from 'components/Loader/Loader';
import { fetchMovieDetails } from 'services/api';
import css from './MovieDetails.module.css';
import MovieCast from 'components/MovieCast/MovieCast';
import MovieReviews from 'components/MovieReviews/MovieReviews';

export default function MovieDetails() {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState('');
  const [isLoading, setIsLoading] = useState(null);
  const [error, setError] = useState(null);
  const location = useLocation();
  const backHomePage = useRef(location.state?.from ?? '/');

  useEffect(() => {
    if (!movieId) return;
    setIsLoading(true);
    fetchMovieDetails(movieId)
      .then(data => {
        console.log('data', data);
        setMovieDetails(data);
      })
      .catch(setError)
      .finally(setIsLoading(false));
  }, [movieId]);

  return (
    <div className={css.containerMovieDetails}>
      <Link className={css.linkGoBack} to={backHomePage.current}>
        Go back
      </Link>
      {isLoading && <Loader />}
      {!error && (
        <div>
          <img
            width={300}
            alt={movieDetails.title ? movieDetails.title : movieDetails.name}
            title={movieDetails.title ? movieDetails.title : movieDetails.name}
            src={
              movieDetails.poster_path
                ? `https://image.tmdb.org/t/p/w300${movieDetails.poster_path}`
                : 'No poster found'
            }
          />
          <div>
            <h1>
              {movieDetails.title ? movieDetails.title : movieDetails.name}
            </h1>
            <p>User Score: {Math.round(movieDetails.vote_average * 10)}%</p>
            <h2>Overview</h2>
            <p>{movieDetails.overview}</p>
            <h2>Genres</h2>
            <ul>
              {movieDetails.genres.map(genre => (
                <li key={genre.id}>{genre.name}</li>
              ))}
            </ul>
          </div>
          <div>
            <div>
              <NavLink to="cast">Cast</NavLink>
              <NavLink to="reviews">Reviews</NavLink>
            </div>
          </div>
          <div className={css.cast}>
            <Suspense fallback={<Loader />}>
              <Routes>
                <Route path="cast" element={<MovieCast />} />
                <Route path="reviews" element={<MovieReviews />} />
              </Routes>
            </Suspense>
          </div>
        </div>
      )}
    </div>
  );
}
