import React, { Suspense, useEffect, useRef, useState } from 'react';
import {
  Link,
  NavLink,
  Route,
  Routes,
  useLocation,
  useNavigate,
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
  const navigate = useNavigate();

  useEffect(() => {
    if (!movieId) return;
    setIsLoading(true);
    fetchMovieDetails(movieId)
      .then(data => {
        setMovieDetails(data);
      })
      .catch(error => {
        navigate('/404');
        setError(error);
      })
      .finally(setIsLoading(false));
  }, [movieId]);

  return (
    <div className={css.containerPageMovieDetails}>
      <Link className={css.linkGoBack} to={backHomePage.current}>
        Go back
      </Link>
      {isLoading && <Loader />}
      {!error && (
        <div>
          <div className={css.containerMovieDetails}>
            <img
              width={300}
              height={450}
              alt={movieDetails.title ? movieDetails.title : movieDetails.name}
              title={
                movieDetails.title ? movieDetails.title : movieDetails.name
              }
              src={
                movieDetails.poster_path
                  ? `https://image.tmdb.org/t/p/w300${movieDetails.poster_path}`
                  : 'No poster found'
              }
            />
            <div className={css.containerInfoMovieDetails}>
              <h1 className={css.titleMovieDetails}>
                {movieDetails.title ? movieDetails.title : movieDetails.name}
              </h1>
              <p className={css.textMovieDetails}>
                User Score: {Math.round(movieDetails.vote_average * 10)}%
              </p>
              <h2 className={css.subtitleMovieDetails}>Overview:</h2>
              <p className={css.textMovieDetails}>{movieDetails.overview}</p>
              <h2 className={css.subtitleMovieDetails}>Genres:</h2>
              <ul className={css.listMovieDetailsGenres}>
                {movieDetails &&
                  movieDetails.genres.map(genre => (
                    <li className={css.textMovieDetails} key={genre.id}>
                      {genre.name}
                    </li>
                  ))}
              </ul>
            </div>
          </div>
          <div>
            <div className={css.blockCastReviews}>
              <NavLink className={css.linkCastReviews} to="cast">
                Cast
              </NavLink>
              <NavLink className={css.linkCastReviews} to="reviews">
                Reviews
              </NavLink>
            </div>
          </div>
          <div>
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
